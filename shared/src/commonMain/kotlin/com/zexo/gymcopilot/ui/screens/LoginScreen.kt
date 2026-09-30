package com.zexo.gymcopilot.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.KeyboardArrowRight
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.zexo.gymcopilot.DataStoreManager
import com.zexo.gymcopilot.ui.theme.*
import kotlinx.coroutines.launch

@Composable
fun LoginScreen(
    onRoleSelected: (String) -> Unit = {},
    onSettingsClick: () -> Unit = {},
    dataStoreManager: DataStoreManager = remember { DataStoreManager() }
) {
    val scope = rememberCoroutineScope()

    val appLanguage by dataStoreManager.getAppLanguage().collectAsState(initial = "Español")
    val savedBtnColor by dataStoreManager.getButtonColor().collectAsState(initial = null)
    val accentColor = if (savedBtnColor != null) Color(savedBtnColor!!) else PrimaryTurquoise
    val buttonStyle by dataStoreManager.getButtonStyle().collectAsState(initial = 1)
    val buttonShape = getButtonStyleShape(buttonStyle)

    val gymName by dataStoreManager.getGymName().collectAsState(initial = "Tu Gimnasio")

    val welcome: String; val selectRole: String
    val ownerTitle: String; val ownerDesc: String
    val profTitle: String; val profDesc: String
    val memberTitle: String; val memberDesc: String

    when (appLanguage) {
        "Español" -> {
            welcome = "Bienvenido a"; selectRole = "Selecciona tu rol para continuar"
            ownerTitle = "Administrador"; ownerDesc = "Gestiona tu gimnasio, socios y planes"
            profTitle = "Profesor"; profDesc = "Acceso al panel de entrenamiento"
            memberTitle = "Socio del Gimnasio"; memberDesc = "Sigue tu progreso y tabla"
        }
        else -> {
            welcome = "Welcome to"; selectRole = "Select your role to continue"
            ownerTitle = "Administrator"; ownerDesc = "Manage your gym, members, and plans"
            profTitle = "Professor"; profDesc = "Access training panel"
            memberTitle = "Gym Member"; memberDesc = "Track your progress and leaderboard"
        }
    }

    Box(modifier = Modifier.fillMaxSize()) {
        LazyColumn(
            modifier = Modifier.fillMaxSize().padding(24.dp),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(16.dp),
            contentPadding = PaddingValues(top = 80.dp, bottom = 40.dp)
        ) {
            item {
                Surface(
                    color = accentColor.copy(alpha = 0.15f),
                    shape = RoundedCornerShape(24.dp)
                ) {
                    Text(
                        text = "🦁",
                        fontSize = 64.sp,
                        modifier = Modifier.padding(20.dp)
                    )
                }

                Spacer(modifier = Modifier.height(24.dp))

                Text(text = welcome, color = TextGray, fontSize = 18.sp, textAlign = TextAlign.Center)
                Text(text = gymName.ifBlank { "GymCopilot" }, color = accentColor, fontSize = 32.sp, fontWeight = FontWeight.Black, textAlign = TextAlign.Center)

                Spacer(modifier = Modifier.height(24.dp))

                Text(text = selectRole, color = TextWhite, fontSize = 16.sp, textAlign = TextAlign.Center)
                Spacer(modifier = Modifier.height(16.dp))
            }

            item {
                RoleCardItem(
                    title = ownerTitle,
                    description = ownerDesc,
                    iconEmoji = "🛡️",
                    accentColor = accentColor,
                    shape = buttonShape,
                    onClick = {
                        scope.launch {
                            dataStoreManager.setUserRole("admin")
                            dataStoreManager.setUserName("Admin")
                            onRoleSelected("admin")
                        }
                    }
                )
            }

            item {
                RoleCardItem(
                    title = profTitle,
                    description = profDesc,
                    iconEmoji = "💻",
                    accentColor = accentColor,
                    shape = buttonShape,
                    onClick = {
                        scope.launch {
                            dataStoreManager.setUserRole("professor")
                            dataStoreManager.setUserName("Profesor")
                            onRoleSelected("professor")
                        }
                    }
                )
            }

            item {
                RoleCardItem(
                    title = memberTitle,
                    description = memberDesc,
                    iconEmoji = "👤",
                    accentColor = accentColor,
                    shape = buttonShape,
                    onClick = {
                        scope.launch {
                            dataStoreManager.setUserRole("member")
                            dataStoreManager.setUserName("Socio")
                            onRoleSelected("member")
                        }
                    }
                )
            }
        }
    }
}

@Composable
fun RoleCardItem(
    title: String,
    description: String,
    iconEmoji: String,
    accentColor: Color,
    shape: Shape,
    onClick: () -> Unit
) {
    Box(
        modifier = Modifier
            .fillMaxWidth()
            .clip(shape)
            .background(Color(0xFF081C24))
            .border(1.5.dp, accentColor, shape)
            .clickable { onClick() }
            .padding(20.dp)
    ) {
        Row(modifier = Modifier.fillMaxWidth(), verticalAlignment = Alignment.CenterVertically) {
            Box(
                modifier = Modifier.size(56.dp).clip(shape).background(accentColor.copy(alpha = 0.15f)),
                contentAlignment = Alignment.Center
            ) {
                Text(text = iconEmoji, fontSize = 26.sp)
            }
            Spacer(modifier = Modifier.width(16.dp))
            Column(modifier = Modifier.weight(1f)) {
                Text(text = title, color = TextWhite, fontSize = 18.sp, fontWeight = FontWeight.Bold)
                Text(text = description, color = TextGray, fontSize = 14.sp)
            }
            Icon(imageVector = Icons.AutoMirrored.Filled.KeyboardArrowRight, contentDescription = null, tint = accentColor, modifier = Modifier.size(24.dp))
        }
    }
}
