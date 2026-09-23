package com.zexo.gymcopilot.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.basicMarquee
import androidx.compose.foundation.layout.*
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.zexo.gymcopilot.DataStoreManager
import com.zexo.gymcopilot.ui.theme.TextWhite

@Composable
fun BroadcastMessageDisplay(dataStoreManager: DataStoreManager, accentColor: Color) {
    val message by dataStoreManager.getBroadcastMessage().collectAsState(initial = "")
    
    if (message.isNotBlank()) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .background(Color.White.copy(alpha = 0.05f))
                .background(
                    brush = Brush.horizontalGradient(
                        0.0f to Color(0xFF8A2BE2).copy(alpha = 0.3f), // Violeta
                        0.3f to Color.Transparent,
                        0.7f to Color.Transparent,
                        1.0f to Color.Red.copy(alpha = 0.3f) // Rojo
                    )
                )
                .padding(vertical = 12.dp, horizontal = 24.dp),
            contentAlignment = Alignment.Center
        ) {
            Text(
                text = message,
                color = TextWhite,
                fontSize = 18.sp,
                fontWeight = FontWeight.Bold,
                textAlign = TextAlign.Center,
                maxLines = 1,
                modifier = Modifier.basicMarquee(
                    iterations = Int.MAX_VALUE,
                    repeatDelayMillis = 1000
                )
            )
        }
    }
}
