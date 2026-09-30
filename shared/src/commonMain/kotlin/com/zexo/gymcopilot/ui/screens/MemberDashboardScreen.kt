package com.zexo.gymcopilot.ui.screens

import androidx.compose.animation.core.*
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.zexo.gymcopilot.DataStoreManager
import com.zexo.gymcopilot.model.*
import com.zexo.gymcopilot.ui.theme.*

@Composable
fun MemberDashboardScreen(
    onProfileClick: () -> Unit = {},
    onCheckInClick: () -> Unit = {},
    onHomeClick: () -> Unit = {},
    onStoreClick: () -> Unit = {},
    onClassesClick: () -> Unit = {},
    onRoutinesClick: () -> Unit = {},
    onRoutineDetailClick: (String) -> Unit = {},
    onChatClick: (String?) -> Unit = {},
    onHelpClick: () -> Unit = {},
    dataStoreManager: DataStoreManager = remember { DataStoreManager() }
) {
    val gymName by dataStoreManager.getGymName().collectAsState(initial = "Tu Gimnasio")
    val userName by dataStoreManager.getUserName().collectAsState(initial = "Socio")
    val userEmail by dataStoreManager.getUserEmail().collectAsState(initial = "")

    val members by dataStoreManager.getMembers().collectAsState(initial = emptyList())
    val currentMember = remember(members, userEmail) { members.find { it.email == userEmail } ?: members.firstOrNull() }

    val savedBtnColor by dataStoreManager.getButtonColor().collectAsState(initial = null)
    val accentColor = if (savedBtnColor != null) Color(savedBtnColor!!) else PrimaryTurquoise
    val buttonStyle by dataStoreManager.getButtonStyle().collectAsState(initial = 1)
    val containerShape = getButtonStyleShape(buttonStyle)

    val gymIsOpen by dataStoreManager.getGymIsOpen().collectAsState(initial = true)

    val savedRoutines by dataStoreManager.getRoutines().collectAsState(initial = emptyList())
    val todayRoutine = savedRoutines.firstOrNull()

    Scaffold(
        containerColor = Color.Transparent,
        topBar = {
            Row(
                modifier = Modifier.fillMaxWidth().padding(horizontal = 24.dp, vertical = 16.dp),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Column {
                    Text(text = gymName, color = TextWhite, fontSize = 22.sp, fontWeight = FontWeight.Bold)
                    Text(text = userName, color = accentColor, fontSize = 16.sp, fontWeight = FontWeight.Medium)
                }

                Surface(
                    color = Color(0xFF00222E),
                    shape = RoundedCornerShape(16.dp),
                    modifier = Modifier.size(60.dp).clickable { onProfileClick() }
                ) {
                    Box(contentAlignment = Alignment.Center) {
                        Text(text = "👤", fontSize = 28.sp)
                    }
                }
            }
        },
        bottomBar = {
            MemberBottomNavigation(
                currentRoute = "member_dashboard",
                onHomeClick = onHomeClick,
                onStoreClick = onStoreClick,
                onClassesClick = onClassesClick,
                onRoutinesClick = onRoutinesClick,
                onChatClick = { onChatClick(null) },
                accentColor = accentColor
            )
        }
    ) { padding ->
        LazyColumn(
            modifier = Modifier.fillMaxSize().padding(padding),
            verticalArrangement = Arrangement.spacedBy(20.dp),
            contentPadding = PaddingValues(vertical = 20.dp)
        ) {
            item {
                Row(
                    modifier = Modifier.fillMaxWidth().padding(horizontal = 24.dp),
                    horizontalArrangement = Arrangement.spacedBy(12.dp)
                ) {
                    StatusChip(
                        text = if (gymIsOpen) "GIMNASIO ABIERTO" else "GIMNASIO CERRADO",
                        color = if (gymIsOpen) Color(0xFF4CAF50) else Color(0xFFF44336),
                        modifier = Modifier.weight(1f)
                    )
                }
            }

            item {
                Box(modifier = Modifier.padding(horizontal = 24.dp)) {
                    MembershipStatusCard(
                        status = currentMember?.membershipStatus ?: "Vigente",
                        planName = currentMember?.planType ?: "Plan Mensual",
                        accentColor = accentColor,
                        shape = containerShape
                    )
                }
            }

            item {
                Row(
                    modifier = Modifier.fillMaxWidth().padding(horizontal = 24.dp),
                    horizontalArrangement = Arrangement.spacedBy(16.dp)
                ) {
                    ActionCard(
                        title = "Mi QR Login",
                        icon = Icons.Default.Phone,
                        modifier = Modifier.weight(1f),
                        onClick = { },
                        shape = containerShape,
                        accentColor = accentColor
                    )
                    ActionCard(
                        title = "Check-in",
                        icon = Icons.Default.Check,
                        modifier = Modifier.weight(1f),
                        onClick = onCheckInClick,
                        shape = containerShape,
                        accentColor = accentColor,
                        iconColor = Color(0xFF4CAF50)
                    )
                }
            }

            item {
                Row(
                    modifier = Modifier.fillMaxWidth().padding(horizontal = 24.dp),
                    horizontalArrangement = Arrangement.spacedBy(16.dp)
                ) {
                    ActionCard(
                        title = "Mis Rutinas",
                        icon = Icons.Default.Star,
                        modifier = Modifier.weight(1f),
                        onClick = onRoutinesClick,
                        shape = containerShape,
                        accentColor = accentColor,
                        iconColor = Color(0xFF2196F3)
                    )
                }
            }

            item {
                Box(modifier = Modifier.padding(horizontal = 24.dp)) {
                    TodayRoutineCard(
                        routine = todayRoutine,
                        accentColor = accentColor,
                        onRoutinesClick = onRoutinesClick,
                        onViewDetailClick = onRoutineDetailClick,
                        shape = containerShape
                    )
                }
            }
        }
    }
}

@Composable
fun StatusChip(text: String, color: Color, modifier: Modifier = Modifier) {
    Surface(
        modifier = modifier.height(48.dp),
        color = color.copy(alpha = 0.1f),
        shape = RoundedCornerShape(12.dp),
        border = androidx.compose.foundation.BorderStroke(1.dp, color.copy(alpha = 0.3f))
    ) {
        Row(
            modifier = Modifier.fillMaxSize(),
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.Center
        ) {
            Box(
                modifier = Modifier
                    .size(8.dp)
                    .background(color, CircleShape)
            )
            Spacer(Modifier.width(8.dp))
            Text(
                text = text,
                color = color,
                fontSize = 10.sp,
                fontWeight = FontWeight.Bold
            )
        }
    }
}

@Composable
fun MembershipStatusCard(
    status: String,
    planName: String,
    accentColor: Color,
    shape: Shape
) {
    val statusColor = if (status.uppercase() == "ACTIVO" || status.uppercase() == "VIGENTE") Color(0xFF4CAF50) else Color(0xFFF44336)

    Card(
        modifier = Modifier.fillMaxWidth().border(1.5.dp, accentColor, shape),
        shape = shape,
        colors = CardDefaults.cardColors(containerColor = Color(0xFF00222E))
    ) {
        Row(modifier = Modifier.padding(20.dp), verticalAlignment = Alignment.CenterVertically) {
            Column(modifier = Modifier.weight(1f)) {
                Text("ESTADO DE MEMBRESÍA", color = TextGray, fontSize = 11.sp, fontWeight = FontWeight.Bold)
                Text(status, color = statusColor, fontSize = 28.sp, fontWeight = FontWeight.Black)
                Text("Plan: $planName", color = TextWhite, fontSize = 14.sp, fontWeight = FontWeight.Bold)
            }
            Box(modifier = Modifier.size(60.dp).background(Color(0xFF0A2F35), CircleShape), contentAlignment = Alignment.Center) {
                Icon(Icons.Default.Check, null, tint = statusColor, modifier = Modifier.size(36.dp))
            }
        }
    }
}

@Composable
fun ActionCard(
    title: String,
    icon: ImageVector,
    modifier: Modifier = Modifier,
    onClick: () -> Unit,
    shape: Shape,
    accentColor: Color = PrimaryTurquoise,
    iconColor: Color? = null
) {
    val finalIconColor = iconColor ?: accentColor
    Surface(
        modifier = modifier
            .height(120.dp)
            .clip(shape)
            .clickable { onClick() }
            .border(1.5.dp, accentColor, shape),
        color = Color(0xFF081C24)
    ) {
        Column(
            modifier = Modifier.fillMaxSize(),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Box(
                modifier = Modifier.size(56.dp).background(finalIconColor.copy(alpha = 0.15f), CircleShape),
                contentAlignment = Alignment.Center
            ) {
                Icon(
                    imageVector = icon,
                    contentDescription = null,
                    tint = finalIconColor,
                    modifier = Modifier.size(38.dp)
                )
            }
            Spacer(Modifier.height(12.dp))
            Text(
                text = title,
                color = TextWhite,
                fontSize = 14.sp,
                fontWeight = FontWeight.Bold
            )
        }
    }
}

@Composable
fun TodayRoutineCard(
    routine: Routine?,
    accentColor: Color,
    onRoutinesClick: () -> Unit,
    onViewDetailClick: (String) -> Unit,
    shape: Shape
) {
    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = shape,
        colors = CardDefaults.cardColors(containerColor = Color(0xFF00222E)),
        border = androidx.compose.foundation.BorderStroke(1.dp, accentColor.copy(alpha = 0.3f))
    ) {
        Column(modifier = Modifier.padding(20.dp)) {
            Text("RUTINA DE HOY", color = TextGray, fontSize = 11.sp, fontWeight = FontWeight.Bold)
            Spacer(Modifier.height(16.dp))

            if (routine != null) {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Icon(Icons.Default.Star, null, tint = accentColor, modifier = Modifier.size(24.dp))
                    Spacer(Modifier.width(12.dp))
                    Text(routine.name, color = TextWhite, fontSize = 24.sp, fontWeight = FontWeight.Black)
                }
                Spacer(Modifier.height(20.dp))
                Button(
                    onClick = { onViewDetailClick(routine.id) },
                    modifier = Modifier.fillMaxWidth().height(48.dp),
                    colors = ButtonDefaults.buttonColors(containerColor = PrimaryTurquoise),
                    shape = shape
                ) {
                    Text("VER DETALLE DE RUTINA", color = Color.White, fontWeight = FontWeight.Bold)
                }
            } else {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Icon(Icons.Default.Star, null, tint = Color(0xFFFFD700), modifier = Modifier.size(24.dp))
                    Spacer(Modifier.width(12.dp))
                    Text("¡Día de Descanso!", color = TextWhite, fontSize = 24.sp, fontWeight = FontWeight.Black)
                }
                Spacer(Modifier.height(20.dp))
                Button(
                    onClick = onRoutinesClick,
                    modifier = Modifier.fillMaxWidth().height(48.dp),
                    colors = ButtonDefaults.buttonColors(containerColor = Color.White.copy(alpha = 0.05f)),
                    shape = shape,
                    border = androidx.compose.foundation.BorderStroke(1.dp, accentColor.copy(alpha = 0.3f))
                ) {
                    Text("VER TODAS MIS RUTINAS", color = TextWhite, fontWeight = FontWeight.Bold)
                }
            }
        }
    }
}

@Composable
fun MemberBottomNavigation(
    currentRoute: String,
    onHomeClick: () -> Unit,
    onStoreClick: () -> Unit,
    onClassesClick: () -> Unit,
    onRoutinesClick: () -> Unit,
    onChatClick: () -> Unit,
    accentColor: Color
) {
    NavigationBar(
        modifier = Modifier.height(56.dp),
        containerColor = Color(0xFF00151C),
        contentColor = TextWhite
    ) {
        val items = listOf("Home", "Tienda", "Clases", "Rutinas", "Chat")
        items.forEachIndexed { index, label ->
            val isSelected = when (index) {
                0 -> currentRoute == "member_dashboard"
                1 -> currentRoute == "public_store"
                2 -> currentRoute == "member_schedule"
                3 -> currentRoute == "routines"
                else -> currentRoute == "chat"
            }

            Box(
                modifier = Modifier
                    .weight(1f)
                    .fillMaxHeight()
                    .clickable {
                        when (index) {
                            0 -> onHomeClick()
                            1 -> onStoreClick()
                            2 -> onClassesClick()
                            3 -> onRoutinesClick()
                            else -> onChatClick()
                        }
                    },
                contentAlignment = Alignment.Center
            ) {
                Column(horizontalAlignment = Alignment.CenterHorizontally) {
                    Text(
                        text = when (label) {
                            "Home" -> "📊"
                            "Tienda" -> "🛒"
                            "Clases" -> "📅"
                            "Rutinas" -> "🏋️"
                            else -> "💬"
                        },
                        fontSize = 18.sp
                    )
                    Text(
                        text = label,
                        fontSize = 8.sp,
                        color = if (isSelected) accentColor else TextGray
                    )
                }
            }
        }
    }
}
