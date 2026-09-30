package com.zexo.gymcopilot.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.KeyboardArrowRight
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
fun ProfessorDashboardScreen(
    onHomeClick: () -> Unit = {},
    onStoreClick: () -> Unit = {},
    onScheduleClick: () -> Unit = {},
    onClassesClick: () -> Unit = {},
    onMembersClick: (String?) -> Unit = {},
    onRoutinesClick: () -> Unit = {},
    onChatClick: () -> Unit = {},
    onProfileClick: () -> Unit = {},
    onHelpClick: () -> Unit = {},
    onProfessorClick: (String) -> Unit = {},
    onScanClick: () -> Unit = {},
    attendanceRepository: Any? = null,
    dataStoreManager: DataStoreManager = remember { DataStoreManager() }
) {
    val gymName by dataStoreManager.getGymName().collectAsState(initial = "Tu Gimnasio")
    val currentUserName by dataStoreManager.getUserName().collectAsState(initial = "Profesor")
    val members by dataStoreManager.getMembers().collectAsState(initial = emptyList())
    val allProfessors by dataStoreManager.getProfessors().collectAsState(initial = emptyList())

    val savedBtnColor by dataStoreManager.getButtonColor().collectAsState(initial = null)
    val accentColor = if (savedBtnColor != null) Color(savedBtnColor!!) else PrimaryTurquoise
    val buttonStyle by dataStoreManager.getButtonStyle().collectAsState(initial = 1)
    val containerShape = getButtonStyleShape(buttonStyle)

    Scaffold(
        topBar = {
            Row(
                modifier = Modifier.fillMaxWidth().padding(horizontal = 24.dp, vertical = 16.dp),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Column {
                    Text(text = gymName, color = TextWhite, fontSize = 22.sp, fontWeight = FontWeight.Bold)
                    Text(text = currentUserName, color = accentColor, fontSize = 16.sp, fontWeight = FontWeight.Medium)
                }

                Surface(
                    color = Color(0xFF00222E),
                    shape = RoundedCornerShape(16.dp),
                    modifier = Modifier.size(60.dp).clickable { onProfileClick() }
                ) {
                    Box(contentAlignment = Alignment.Center) {
                        Text(text = "👨‍🏫", fontSize = 28.sp)
                    }
                }
            }
        },
        bottomBar = {
            ProfessorBottomNavigation(
                currentRoute = "professor_dashboard",
                onHomeClick = onHomeClick,
                onStoreClick = onStoreClick,
                onScheduleClick = onScheduleClick,
                onMembersClick = { onMembersClick(null) },
                onRoutinesClick = onRoutinesClick,
                onChatClick = onChatClick,
                accentColor = accentColor
            )
        },
        containerColor = Color.Transparent
    ) { padding ->
        LazyColumn(
            modifier = Modifier.fillMaxSize().padding(padding),
            verticalArrangement = Arrangement.spacedBy(20.dp),
            contentPadding = PaddingValues(bottom = 20.dp)
        ) {
            item {
                Box(modifier = Modifier.padding(horizontal = 24.dp)) {
                    Column {
                        Text("Staff de Profesores", color = accentColor, fontWeight = FontWeight.Bold, fontSize = 14.sp)
                        Spacer(Modifier.height(12.dp))
                        LazyRow(
                            horizontalArrangement = Arrangement.spacedBy(16.dp),
                            modifier = Modifier.fillMaxWidth()
                        ) {
                            items(allProfessors) { prof ->
                                Surface(
                                    color = Color(0xFF081C24),
                                    shape = CircleShape,
                                    modifier = Modifier.size(56.dp).border(1.5.dp, accentColor, CircleShape)
                                ) {
                                    Box(contentAlignment = Alignment.Center) {
                                        Text(prof.firstName.take(1).uppercase(), color = accentColor, fontWeight = FontWeight.Bold)
                                    }
                                }
                            }
                        }
                    }
                }
            }

            item {
                Box(modifier = Modifier.padding(horizontal = 24.dp)) {
                    Row(modifier = Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(16.dp)) {
                        ProfessorActionCard(
                            text = "Mis Alumnos",
                            icon = Icons.Default.Person,
                            modifier = Modifier.weight(1f),
                            accentColor = accentColor,
                            shape = containerShape,
                            onClick = { onMembersClick(null) }
                        )
                        ProfessorActionCard(
                            text = "Rutinas",
                            icon = Icons.Default.Star,
                            modifier = Modifier.weight(1f),
                            accentColor = accentColor,
                            shape = containerShape,
                            onClick = onRoutinesClick
                        )
                    }
                }
            }

            item {
                Box(modifier = Modifier.padding(horizontal = 24.dp)) {
                    Text("Alumnos Asignados", color = accentColor, fontSize = 20.sp, fontWeight = FontWeight.Black)
                }
            }

            items(members) { member ->
                Box(modifier = Modifier.padding(horizontal = 24.dp)) {
                    ProfessorActivityRowItem(member = member, shape = containerShape, accentColor = accentColor)
                }
            }
        }
    }
}

@Composable
fun ProfessorActivityRowItem(member: Member, shape: Shape, accentColor: Color) {
    Card(
        modifier = Modifier.fillMaxWidth().border(1.dp, Color.White.copy(alpha = 0.05f), shape),
        shape = shape,
        colors = CardDefaults.cardColors(containerColor = Color.White.copy(alpha = 0.03f))
    ) {
        Row(modifier = Modifier.padding(16.dp), verticalAlignment = Alignment.CenterVertically) {
            Box(modifier = Modifier.size(48.dp).clip(CircleShape).background(Color.Gray.copy(alpha = 0.1f)), contentAlignment = Alignment.Center) {
                Text(member.firstName.take(1).uppercase(), color = TextWhite, fontWeight = FontWeight.Bold)
            }
            Spacer(modifier = Modifier.width(16.dp))
            Column(modifier = Modifier.weight(1f)) {
                Text(member.fullName, color = TextWhite, fontSize = 16.sp, fontWeight = FontWeight.SemiBold)
                Text("Plan: ${member.planType}", color = TextGray, fontSize = 13.sp)
            }
            Icon(Icons.AutoMirrored.Filled.KeyboardArrowRight, null, tint = accentColor)
        }
    }
}

@Composable
fun ProfessorActionCard(text: String, icon: ImageVector, modifier: Modifier, accentColor: Color, shape: Shape, onClick: () -> Unit = {}) {
    Surface(
        modifier = modifier.height(120.dp).clip(shape).clickable { onClick() }.border(1.5.dp, accentColor, shape),
        color = Color(0xFF081C24)
    ) {
        Column(horizontalAlignment = Alignment.CenterHorizontally, verticalArrangement = Arrangement.Center, modifier = Modifier.fillMaxSize()) {
            Box(
                modifier = Modifier.size(56.dp).background(accentColor.copy(alpha = 0.15f), CircleShape),
                contentAlignment = Alignment.Center
            ) {
                Icon(icon, null, tint = accentColor, modifier = Modifier.size(38.dp))
            }
            Spacer(Modifier.height(8.dp))
            Text(text, color = TextWhite, fontSize = 11.sp, fontWeight = FontWeight.Bold, textAlign = TextAlign.Center)
        }
    }
}

@Composable
fun ProfessorBottomNavigation(
    currentRoute: String,
    onHomeClick: () -> Unit,
    onStoreClick: () -> Unit,
    onScheduleClick: () -> Unit,
    onMembersClick: () -> Unit,
    onRoutinesClick: () -> Unit,
    onChatClick: () -> Unit,
    accentColor: Color
) {
    NavigationBar(
        modifier = Modifier.height(56.dp),
        containerColor = Color(0xFF00151C),
        contentColor = TextWhite
    ) {
        val items = listOf("Home", "Tienda", "Horarios", "Alumnos", "Rutinas", "Chat")
        items.forEachIndexed { index, label ->
            val isSelected = when (index) {
                0 -> currentRoute == "professor_dashboard"
                1 -> currentRoute == "public_store"
                2 -> currentRoute == "professor_schedule"
                3 -> currentRoute == "members"
                4 -> currentRoute == "routines"
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
                            2 -> onScheduleClick()
                            3 -> onMembersClick()
                            4 -> onRoutinesClick()
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
                            "Horarios" -> "📅"
                            "Alumnos" -> "👥"
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
