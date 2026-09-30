package com.zexo.gymcopilot.ui.theme

import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.unit.dp

private val DarkColorScheme = darkColorScheme(
    primary = PrimaryTurquoise,
    secondary = SecondaryGray,
    tertiary = PrimaryTurquoise,
    background = DarkBackground,
    surface = SurfaceColor,
    onPrimary = Color.Black,
    onSecondary = TextWhite,
    onTertiary = Color.Black,
    onBackground = TextWhite,
    onSurface = TextWhite,
    error = ErrorRed
)

val GymBackgroundGradient = Brush.verticalGradient(
    0.0f to DarkBackgroundTop,
    0.25f to DarkBackground,
    1.0f to DarkBackground
)

fun getButtonStyleShape(style: Int): Shape {
    return when (style) {
        0 -> RoundedCornerShape(0.dp) // Recto
        1 -> RoundedCornerShape(14.dp) // Redondeado
        2 -> RoundedCornerShape(24.dp) // Más redondeado
        3 -> CircleShape // Totalmente redondeado
        else -> RoundedCornerShape(14.dp)
    }
}

fun getGymFontFamily(fontName: String?): androidx.compose.ui.text.font.FontFamily {
    return androidx.compose.ui.text.font.FontFamily.Default
}

@Composable
fun GymCopilotTheme(
    content: @Composable () -> Unit
) {
    MaterialTheme(
        colorScheme = DarkColorScheme,
        content = content
    )
}
