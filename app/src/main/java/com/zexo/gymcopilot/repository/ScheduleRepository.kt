package com.zexo.gymcopilot.repository

import android.util.Log
import com.google.gson.JsonArray
import com.zexo.gymcopilot.DataStoreManager
import com.zexo.gymcopilot.model.ScheduleEntry
import com.zexo.gymcopilot.network.GymApiService
import com.zexo.gymcopilot.network.NetworkModule
import com.zexo.gymcopilot.network.ScheduleSyncRequest
import kotlinx.coroutines.flow.first
import kotlinx.serialization.encodeToString
import kotlinx.serialization.json.Json

class ScheduleRepository(
    private val apiService: GymApiService,
    private val dataStoreManager: DataStoreManager
) {

    suspend fun syncSchedules(): Result<Unit> {
        return try {
            val gymUrl = dataStoreManager.getGymApiUrl().first()
            if (gymUrl.isBlank()) return Result.success(Unit)

            val apiServiceGet = NetworkModule.getApiServiceForGet(gymUrl)
            val syncUrl = if (gymUrl.contains("?")) "$gymUrl&type=schedules" else "$gymUrl?type=schedules"

            val response = apiServiceGet.getSchedulesRaw(syncUrl, "Bearer session_active")

            if (response.isSuccessful) {
                val jsonElement = response.body() ?: return Result.success(Unit)

                val rows = when {
                    jsonElement.isJsonArray -> jsonElement.asJsonArray
                    jsonElement.isJsonObject -> {
                        val obj = jsonElement.asJsonObject
                        if (obj.has("data")) obj.getAsJsonArray("data") else null
                    }
                    else -> null
                } ?: return Result.success(Unit)

                val remoteSchedules = parseSchedules(rows)
                dataStoreManager.saveAllSchedules(remoteSchedules)
                Log.d("ScheduleSync", "Sincronización completada.")
                Result.success(Unit)
            } else {
                Result.failure(Exception("Error servidor: ${response.code()}"))
            }
        } catch (e: Exception) {
            Log.e("ScheduleSync", "Error sincronizando: ${e.message}")
            Result.failure(e)
        }
    }

    suspend fun uploadSchedule(professorId: String, schedules: List<ScheduleEntry>): Result<Unit> {
        return try {
            val gymUrl = dataStoreManager.getGymApiUrl().first()
            if (gymUrl.isBlank()) return Result.failure(Exception("Red no configurada"))

            val gymId = dataStoreManager.getGymName().first()
            val schedulesJson = Json.encodeToString(schedules)

            val request = ScheduleSyncRequest(
                action = "update_schedule",
                gymId = gymId,
                professorId = professorId.trim(),
                schedulesJson = schedulesJson
            )

            val token = dataStoreManager.getAuthToken().first() ?: "session_active"
            val apiServicePost = NetworkModule.getApiService(gymUrl)
            val response = apiServicePost.postScheduleSync(gymUrl, "Bearer $token", request)

            if (response.isSuccessful || response.code() == 302) {
                syncSchedules()
                Result.success(Unit)
            } else {
                Result.failure(Exception("Error servidor: ${response.code()}"))
            }
        } catch (e: Exception) {
            Log.e("ScheduleSync", "Excepción al subir: ${e.message}")
            Result.failure(e)
        }
    }

    private fun parseSchedules(rows: JsonArray): Map<String, List<ScheduleEntry>> {
        val result = mutableMapOf<String, MutableList<ScheduleEntry>>()
        try {
            val startIdx = if (rows.size() > 0 && rows[0].isJsonArray && rows[0].asJsonArray[0].asString == "ID_Profesor") 1 else 0

            for (i in startIdx until rows.size()) {
                val row = rows[i]
                if (row.isJsonArray) {
                    val arr = row.asJsonArray
                    if (arr.size() < 4) continue

                    val rawProfId = arr[0].asString.trim()
                    if (rawProfId.isEmpty()) continue
                    
                    // Normalizar el ID del gimnasio para que coincida con lo que espera la UI (GENERAL_GYM)
                    val profId = if (rawProfId.equals("general_gym", ignoreCase = true)) "GENERAL_GYM" else rawProfId

                    val dayOrDate = arr[1].asString.trim()
                    // Fix para el formato de hora ISO visto en tu imagen
                    val start = formatTime(arr[2].asString.trim())
                    val end = formatTime(arr[3].asString.trim())
                    val name = if (arr.size() > 4) arr[4].asString.trim() else ""
                    val emailsRaw = if (arr.size() > 5) arr[5].asString.trim() else ""
                    val emails = if (emailsRaw.isNotEmpty()) emailsRaw.split(",").map { it.trim() }.filter { it.isNotEmpty() } else emptyList()

                    val entry = if (dayOrDate.contains("-")) {
                        ScheduleEntry(date = dayOrDate, startTime = start, endTime = end, eventName = name, assignedMemberEmails = emails)
                    } else {
                        val dayInt = dayOrDate.toDoubleOrNull()?.toInt() ?: dayOrDate.toIntOrNull()
                        if (dayInt != null) ScheduleEntry(dayOfWeek = dayInt, startTime = start, endTime = end, eventName = name, assignedMemberEmails = emails) else null
                    }

                    if (entry != null) {
                        result.getOrPut(profId) { mutableListOf() }.add(entry)
                    }
                }
            }
        } catch (e: Exception) {
            Log.e("ScheduleSync", "Error parseando filas: ${e.message}")
        }
        return result
    }

    private fun formatTime(raw: String): String {
        return if (raw.contains("T") && raw.contains(":")) {
            // Caso ISO: 1899-12-30T19:44:48.000Z -> 19:44
            try { raw.substringAfter("T").substring(0, 5) } catch (e: Exception) { raw }
        } else {
            raw
        }
    }
}
