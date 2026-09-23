package com.zexo.gymcopilot.ui

import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color

val DarkBackgroundColor = Color(0xFF0D1F2D)
val SurfaceColor = Color(0xFF132A3A)
val PrimaryTurquoise = Color(0xFF00E5FF)
val AccentOrange = Color(0xFFFF9100)
val TextWhite = Color(0xFFFFFFFF)
val TextGray = Color(0xFF90A4AE)

private val GymColorScheme = darkColorScheme(
    primary = PrimaryTurquoise,
    secondary = AccentOrange,
    background = DarkBackgroundColor,
    surface = SurfaceColor,
    onPrimary = Color.Black,
    onSecondary = Color.Black,
    onBackground = TextWhite,
    onSurface = TextWhite
)

@Composable
fun GymCopilotTheme(
    content: @Composable () -> Unit
) {
    MaterialTheme(
        colorScheme = GymColorScheme,
        content = content
    )
}
