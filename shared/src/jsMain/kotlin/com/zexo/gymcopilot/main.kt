package com.zexo.gymcopilot

import androidx.compose.ui.ExperimentalComposeUiApi
import androidx.compose.ui.window.CanvasBasedWindow
import com.zexo.gymcopilot.ui.SharedGymCopilotApp

@OptIn(ExperimentalComposeUiApi::class)
fun main() {
    CanvasBasedWindow(title = "GymCopilot") {
        SharedGymCopilotApp()
    }
}
