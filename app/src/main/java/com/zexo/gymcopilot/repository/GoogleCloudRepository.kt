package com.zexo.gymcopilot.repository

import android.content.Context
import android.util.Log
import com.google.android.gms.auth.GoogleAuthUtil
import com.zexo.gymcopilot.DataStoreManager
import com.zexo.gymcopilot.network.CreateProjectRequest
import com.zexo.gymcopilot.network.DeploymentRequest
import com.zexo.gymcopilot.network.DriveFileMetadata
import com.zexo.gymcopilot.network.GoogleCloudService
import com.zexo.gymcopilot.network.NetworkModule
import com.zexo.gymcopilot.network.VersionRequest
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.withContext
import okhttp3.MediaType.Companion.toMediaTypeOrNull
import okhttp3.RequestBody.Companion.toRequestBody
import org.json.JSONArray
import org.json.JSONObject

class GoogleCloudRepository(
    private val googleCloudService: GoogleCloudService,
    private val dataStoreManager: DataStoreManager,
    private val context: Context
) {
    private suspend fun refreshGoogleToken(): String? {
        return withContext(Dispatchers.IO) {
            try {
                val email = dataStoreManager.getUserEmail().first()
                if (email.isBlank()) return@withContext null

                val scope = "oauth2:https://www.googleapis.com/auth/drive.file " +
                        "https://www.googleapis.com/auth/spreadsheets " +
                        "https://www.googleapis.com/auth/script.projects " +
                        "https://www.googleapis.com/auth/script.deployments " +
                        "https://www.googleapis.com/auth/script.external_request"

                val currentToken = dataStoreManager.getGoogleAccessToken().first()
                if (currentToken.isNotBlank()) {
                    try {
                        GoogleAuthUtil.clearToken(context, currentToken)
                    } catch (e: Exception) {}
                }

                val newToken = GoogleAuthUtil.getToken(context, email, scope)
                dataStoreManager.setGoogleAccessToken(newToken)
                newToken
            } catch (e: Exception) {
                Log.e("GoogleCloudRepo", "Error renovando credenciales: ${e.message}")
                null
            }
        }
    }

    suspend fun setupGymBackend(gymName: String): Result<String> {
        return try {
            val token = refreshGoogleToken()
            if (token.isNullOrBlank()) {
                return Result.failure(Exception("NO HAY SESIÓN: Desvinculá y volvé a vincular tu cuenta de Google."))
            }

            val cleanName = gymName.filter { it.isLetterOrDigit() }.take(15)

            // 0. Crear Planilla
            val driveResponse = googleCloudService.createDriveFolder(
                DriveFileMetadata(
                    name = "GymCopilot_DB_$cleanName",
                    mimeType = "application/vnd.google-apps.spreadsheet"
                )
            )

            if (!driveResponse.isSuccessful) {
                val errorJson = driveResponse.errorBody()?.string() ?: ""
                Log.e("GoogleCloudRepo", "Error creando planilla: $errorJson")
                return Result.failure(Exception("Error al crear la planilla (403?). Habilita Google Apps Script API."))
            }

            val spreadsheetId = driveResponse.body()?.id ?: return Result.failure(Exception("No se obtuvo ID de planilla."))

            // 1. Crear Proyecto Script
            val projectResponse = googleCloudService.createScriptProject(
                CreateProjectRequest(title = "GymProject_$cleanName")
            )

            if (!projectResponse.isSuccessful) {
                return Result.failure(Exception("Error al crear el proyecto de script."))
            }

            val scriptId = projectResponse.body()?.scriptId ?: return Result.failure(Exception("No se obtuvo ID de script."))
            dataStoreManager.setGymScriptId(scriptId)

            // 2. Subir Código
            val rawScript = readScriptFromAssets()
            val scriptContent = injectSpreadsheetId(rawScript, spreadsheetId)
            
            val updateBody = JSONObject().apply {
                val files = JSONArray().apply {
                    put(JSONObject().apply {
                        put("name", "app")
                        put("type", "SERVER_JS")
                        put("source", scriptContent)
                    })
                    put(JSONObject().apply {
                        put("name", "appsscript")
                        put("type", "JSON")
                        put("source", "{\"timeZone\":\"America/Argentina/Buenos_Aires\",\"exceptionLogging\":\"STACKDRIVER\",\"runtimeVersion\":\"V8\",\"webapp\":{\"access\":\"ANYONE_ANONYMOUS\",\"executeAs\":\"USER_DEPLOYING\"},\"oauthScopes\":[\"https://www.googleapis.com/auth/spreadsheets\",\"https://www.googleapis.com/auth/script.projects\",\"https://www.googleapis.com/auth/script.deployments\",\"https://www.googleapis.com/auth/script.scriptapp\",\"https://www.googleapis.com/auth/drive.file\",\"https://www.googleapis.com/auth/script.external_request\"]}")
                    })
                }
                put("files", files)
            }.toString().toRequestBody("application/json".toMediaTypeOrNull())

            val updateResponse = googleCloudService.updateScriptContent(scriptId, updateBody)
            if (!updateResponse.isSuccessful) return Result.failure(Exception("Error al subir el código."))

            delay(2000)

            // 3. Crear Versión
            val versionResponse = googleCloudService.createVersion(scriptId, VersionRequest("V1"))
            val vNum = versionResponse.body()?.versionNumber ?: 1

            // 4. Desplegar
            val deployResponse = googleCloudService.createDeployment(scriptId, DeploymentRequest(versionNumber = vNum))
            if (deployResponse.isSuccessful) {
                val url = deployResponse.body()?.entryPoints?.firstOrNull()?.webApp?.url ?: return Result.failure(Exception("No se generó la URL."))
                dataStoreManager.setGymApiUrl(url)
                
                // 5. Inicialización Remota (Warm-up call para crear todas las pestañas)
                withContext(Dispatchers.IO) {
                    try {
                        delay(5000) // Esperamos 5 segundos para propagación de Google
                        val warmUpUrl = if (url.contains("?")) "$url&action=setup" else "$url?action=setup"
                        NetworkModule.getApiServiceForGet(warmUpUrl).getAttendanceRaw(warmUpUrl, null)
                        Log.d("GoogleCloudRepo", "Warm-up OK: Planilla inicializada")
                    } catch (e: Exception) {
                        Log.e("GoogleCloudRepo", "Error en warm-up: ${e.message}")
                    }
                }

                Result.success(url)
            } else {
                Result.failure(Exception("Error al desplegar la Web App."))
            }
        } catch (e: Exception) {
            Result.failure(e)
        }
    }

    private fun injectSpreadsheetId(rawScript: String, spreadsheetId: String): String {
        val declarationRegex = Regex("""var\s+SS_ID_FROM_APP\s*=\s*'[^']*';""")
        return if (declarationRegex.containsMatchIn(rawScript)) {
            declarationRegex.replace(rawScript, "var SS_ID_FROM_APP = '$spreadsheetId';")
        } else {
            "var SS_ID_FROM_APP = '$spreadsheetId';\n$rawScript"
        }
    }

    private fun readScriptFromAssets(): String {
        return try {
            context.assets.open("appscript_backup.js").bufferedReader().use { it.readText() }
        } catch (e: Exception) {
            "function doPost(e) { return ContentService.createTextOutput(JSON.stringify({status: 'ok'})).setMimeType(ContentService.MimeType.JSON); }"
        }
    }
}
