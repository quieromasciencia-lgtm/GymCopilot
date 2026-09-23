package com.zexo.gymcopilot.ui

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun SharedGymCopilotApp(
    userRole: String = "admin",
    gymName: String = "GymCopilot"
) {
    GymCopilotTheme {
        Box(
            modifier = Modifier
                .fillMaxSize()
                .background(MaterialTheme.colorScheme.background),
            contentAlignment = Alignment.Center
        ) {
            Column(
                horizontalAlignment = Alignment.CenterHorizontally,
                verticalArrangement = Arrangement.Center,
                modifier = Modifier.padding(24.dp)
            ) {
                Text(
                    text = gymName.ifBlank { "GymCopilot" },
                    fontSize = 28.sp,
                    fontWeight = FontWeight.Bold,
                    color = PrimaryTurquoise
                )
                Spacer(modifier = Modifier.height(12.dp))
                Text(
                    text = "Perfil activo: ${userRole.uppercase()}",
                    fontSize = 16.sp,
                    color = TextWhite
                )
            }
        }
    }
}
