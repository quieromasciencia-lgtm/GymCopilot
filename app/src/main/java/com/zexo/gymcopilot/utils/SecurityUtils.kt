package com.zexo.gymcopilot.utils

import java.util.Calendar

object SecurityUtils {
    /**
     * Genera el código dinámico basado en la fecha actual.
     * Algoritmo: (Día + Mes + Año) + "gym"
     */
    fun generateDynamicCode(): String {
        val calendar = Calendar.getInstance()
        val day = calendar.get(Calendar.DAY_OF_MONTH)
        val month = calendar.get(Calendar.MONTH) + 1
        val year = calendar.get(Calendar.YEAR)
        return "${day + month + year}gym"
    }
}
