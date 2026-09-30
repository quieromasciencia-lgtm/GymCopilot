package com.zexo.gymcopilot.ui.screens

import androidx.compose.animation.*
import androidx.compose.animation.core.*
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
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
import androidx.compose.ui.graphics.*
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.zexo.gymcopilot.DataStoreManager
import com.zexo.gymcopilot.model.*
import com.zexo.gymcopilot.ui.theme.*
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.launch

@Composable
fun AdminDashboardScreen(
    onAppSettingsClick: () -> Unit = {},
    onStoreClick: () -> Unit = {},
    onMembersClick: (String?) -> Unit = {},
    onProfessorsClick: () -> Unit = {},
    onScheduleClick: () -> Unit = {},
    onSubscriptionsClick: () -> Unit = {},
    attendanceRepository: Any? = null,
    scheduleRepository: Any? = null,
    googleCloudRepository: Any? = null,
    dataStoreManager: DataStoreManager = remember { DataStoreManager() }
) {
    val coroutineScope = rememberCoroutineScope()

    val appLanguage by dataStoreManager.getAppLanguage().collectAsState(initial = "Español")
    val gymName by dataStoreManager.getGymName().collectAsState(initial = "Tu Gimnasio")
    val gymIsOpen by dataStoreManager.getGymIsOpen().collectAsState(initial = true)

    val members by dataStoreManager.getMembers().collectAsState(initial = emptyList())
    val paymentRecords by dataStoreManager.getPaymentRecords().collectAsState(initial = emptyList())

    val savedBtnColor by dataStoreManager.getButtonColor().collectAsState(initial = null)
    val accentColor = if (savedBtnColor != null) Color(savedBtnColor!!) else PrimaryTurquoise

    val buttonStyle by dataStoreManager.getButtonStyle().collectAsState(initial = 1)
    val containerShape = getButtonStyleShape(buttonStyle)

    var showMonthlyIncome by remember { mutableStateOf(false) }

    val monthlyIncomeValue = remember(paymentRecords) {
        val total = paymentRecords.sumOf { it.amount }
        if (total == 0.0) "0.0"
        else total.toString()
    }

    val activeCount = members.count { (it.membershipStatus.uppercase() == "ACTIVO") || (it.membershipStatus.uppercase() == "ACTIVE") }
    val overdueCount = members.count { (it.membershipStatus.uppercase() == "DEUDOR") || (it.membershipStatus.uppercase() == "DEBTOR") || (it.membershipStatus.uppercase() == "VENCIDO") }

    val t = remember(appLanguage) {
        if (appLanguage == "Español") {
            mapOf(
                "title" to "Panel Admin", "open" to "ABIERTO", "closed" to "CERRADO",
                "total" to "TOTAL", "active" to "ACTIVOS", "debtors" to "DEUDORES",
                "inc_m" to "Ingresos", "subs" to "Suscripciones", "new" to "Nuevos (Mes)",
                "ast" to "Asistencia Hoy", "gst" to "Horarios",
                "show_qr" to "QR Admin", "scan_member" to "Asistencia"
            )
        } else {
            mapOf(
                "title" to "Admin Panel", "open" to "OPEN", "closed" to "CLOSED",
                "total" to "TOTAL", "active" to "ACTIVE", "debtors" to "DEBTORS",
                "inc_m" to "Income", "subs" to "Subscriptions", "new" to "New members",
                "ast" to "Attendance", "gst" to "Schedule",
                "show_qr" to "Gym QR", "scan_member" to "Attendance"
            )
        }
    }

    Box(modifier = Modifier.fillMaxSize()) {
        Scaffold(
            topBar = {
                Box(modifier = Modifier.padding(horizontal = 20.dp, vertical = 12.dp)) {
                    AdminHeader(
                        gymName = gymName,
                        font = FontFamily.Default,
                        accentColor = accentColor,
                        title = t["title"] ?: "Panel Admin",
                        statusText = if (gymIsOpen) (t["open"] ?: "ABIERTO") else (t["closed"] ?: "CERRADO"),
                        statusColor = if (gymIsOpen) Color(0xFF00C853) else Color(0xFFF44336),
                        onStatusClick = {
                            coroutineScope.launch {
                                dataStoreManager.setGymIsOpen(!gymIsOpen)
                            }
                        }
                    )
                }
            },
            bottomBar = {
                AdminBottomNavigation(
                    currentRoute = "admin_dashboard",
                    onHomeClick = { },
                    onStoreClick = onStoreClick,
                    onMembersClick = { onMembersClick(null) },
                    onProfessorsClick = onProfessorsClick,
                    onSettingsClick = onAppSettingsClick,
                    accentColor = accentColor
                )
            },
            containerColor = Color.Transparent
        ) { padding ->
            LazyColumn(
                modifier = Modifier.fillMaxSize().padding(padding).padding(horizontal = 20.dp),
                verticalArrangement = Arrangement.spacedBy(20.dp),
                contentPadding = PaddingValues(bottom = 48.dp)
            ) {
                item {
                    GymBroadcastEditor(
                        accentColor = accentColor,
                        containerShape = containerShape,
                        dataStoreManager = dataStoreManager,
                        coroutineScope = coroutineScope
                    )
                }

                item {
                    MetricsGridSection(
                        metrics = listOf(
                            MetricData(t["subs"] ?: "Suscripciones", "PLANES", Icons.Default.ShoppingCart, accentColor) { onSubscriptionsClick() },
                            MetricData(
                                label = t["inc_m"] ?: "Ingresos",
                                value = if (showMonthlyIncome) "$$monthlyIncomeValue" else "****",
                                icon = Icons.Default.Star,
                                color = Color(0xFF4CAF50),
                                isSecure = true,
                                isVisible = showMonthlyIncome,
                                onToggleVisibility = { showMonthlyIncome = !showMonthlyIncome }
                            ),
                            MetricData(t["total"] ?: "TOTAL", members.size.toString(), Icons.Default.Person, accentColor) { onMembersClick(null) },
                            MetricData(t["new"] ?: "Nuevos", "1", Icons.Default.Add, Color(0xFFFFC107)),
                            MetricData(t["debtors"] ?: "DEUDORES", overdueCount.toString(), Icons.Default.Warning, Color(0xFFF44336)) { onMembersClick("DEUDOR") },
                            MetricData(t["active"] ?: "ACTIVOS", activeCount.toString(), Icons.Default.Person, Color(0xFF4CAF50)) { onMembersClick("ACTIVO") },
                            MetricData(t["ast"] ?: "Asistencia", "0", Icons.Default.Check, Color(0xFF9C27B0)),
                            MetricData("Gestión", "HORARIOS", Icons.Default.DateRange, Color(0xFFE91E63)) { onScheduleClick() },
                            MetricData(t["show_qr"] ?: "Gym QR", "ASISTENCIA", Icons.Default.Phone, accentColor) { },
                            MetricData(t["scan_member"] ?: "Asistencia", "SCAN", Icons.Default.Search, accentColor) { }
                        ),
                        accentColor = accentColor,
                        shape = containerShape
                    )
                }

                item {
                    Text("Actividad Reciente", color = accentColor, fontSize = 20.sp, fontWeight = FontWeight.Black)
                }

                items(members) { member ->
                    ActivityRowItem(member = member, shape = containerShape, accentColor = accentColor)
                }
            }
        }
    }
}

@Composable
fun AdminHeader(
    gymName: String,
    font: FontFamily,
    accentColor: Color,
    title: String,
    statusText: String? = null,
    statusColor: Color = Color.Green,
    onStatusClick: (() -> Unit)? = null
) {
    Row(
        modifier = Modifier.fillMaxWidth().padding(top = 8.dp),
        horizontalArrangement = Arrangement.spacedBy(16.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Column(modifier = Modifier.weight(1f)) {
            Text(
                text = gymName,
                color = TextWhite,
                fontSize = 24.sp,
                fontWeight = FontWeight.ExtraBold,
                fontFamily = font,
                lineHeight = 28.sp
            )

            Spacer(Modifier.height(12.dp))

            if (statusText != null && onStatusClick != null) {
                StatusBadge(text = statusText, color = statusColor, onClick = onStatusClick)
            }

            Spacer(Modifier.height(16.dp))

            Text("by GymCopilot", color = accentColor, fontSize = 14.sp, fontWeight = FontWeight.Bold)
            Text(title, color = TextWhite, fontSize = 22.sp, fontWeight = FontWeight.Black)
        }

        Surface(
            color = Color(0xFF00222E),
            shape = RoundedCornerShape(20.dp),
            border = ButtonDefaults.outlinedButtonBorder(enabled = true),
            modifier = Modifier.size(100.dp)
        ) {
            Box(contentAlignment = Alignment.Center) {
                Text(text = "🦁", fontSize = 54.sp)
            }
        }
    }
}

@Composable
fun StatusBadge(text: String, color: Color, onClick: () -> Unit) {
    Box(
        modifier = Modifier
            .clip(RoundedCornerShape(8.dp))
            .background(color.copy(alpha = 0.15f))
            .border(1.dp, color, RoundedCornerShape(8.dp))
            .clickable { onClick() }
            .padding(horizontal = 10.dp, vertical = 4.dp)
    ) {
        Text(text, color = color, fontSize = 11.sp, fontWeight = FontWeight.Black)
    }
}

@Composable
fun GymBroadcastEditor(
    accentColor: Color,
    containerShape: Shape,
    dataStoreManager: DataStoreManager,
    coroutineScope: kotlinx.coroutines.CoroutineScope
) {
    val currentMessage by dataStoreManager.getBroadcastMessage().collectAsState(initial = "")
    var messageText by remember(currentMessage) { mutableStateOf(currentMessage) }

    Card(
        modifier = Modifier.fillMaxWidth().border(1.5.dp, accentColor, containerShape),
        shape = containerShape,
        colors = CardDefaults.cardColors(containerColor = Color(0xFF00222E))
    ) {
        Column(modifier = Modifier.padding(12.dp)) {
            Row(verticalAlignment = Alignment.CenterVertically) {
                Icon(Icons.Default.Send, null, tint = accentColor, modifier = Modifier.size(20.dp))
                Spacer(Modifier.width(8.dp))
                Text("MENSAJE", color = TextGray, fontSize = 10.sp, fontWeight = FontWeight.Bold)

                Spacer(Modifier.weight(1f))

                IconButton(
                    onClick = {
                        coroutineScope.launch {
                            dataStoreManager.setBroadcastMessage(messageText)
                        }
                    },
                    modifier = Modifier.size(28.dp).background(accentColor, RoundedCornerShape(4.dp))
                ) {
                    Text("➤", color = Color.Black, fontSize = 12.sp, fontWeight = FontWeight.Bold)
                }
            }
            Spacer(Modifier.height(8.dp))
            OutlinedTextField(
                value = messageText,
                onValueChange = { messageText = it },
                modifier = Modifier.fillMaxWidth(),
                placeholder = { Text("Escribe un mensaje para todos...", color = TextGray.copy(alpha = 0.5f), fontSize = 13.sp) },
                colors = OutlinedTextFieldDefaults.colors(
                    focusedBorderColor = accentColor,
                    unfocusedBorderColor = Color.White.copy(alpha = 0.1f),
                    focusedTextColor = TextWhite,
                    unfocusedTextColor = TextWhite
                ),
                shape = RoundedCornerShape(8.dp),
                maxLines = 2
            )
        }
    }
}

@Composable
fun MetricsGridSection(metrics: List<MetricData>, accentColor: Color, shape: Shape) {
    Column(verticalArrangement = Arrangement.spacedBy(16.dp)) {
        for (i in metrics.indices step 2) {
            Row(horizontalArrangement = Arrangement.spacedBy(16.dp)) {
                SmallMetricCard(metrics[i], Modifier.weight(1f), accentColor, shape)
                if (i + 1 < metrics.size) SmallMetricCard(metrics[i + 1], Modifier.weight(1f), accentColor, shape)
                else Spacer(Modifier.weight(1f))
            }
        }
    }
}

data class MetricData(
    val label: String,
    val value: String,
    val icon: ImageVector,
    val color: Color,
    val isSecure: Boolean = false,
    val isVisible: Boolean = true,
    val onToggleVisibility: (() -> Unit)? = null,
    val onClick: (() -> Unit)? = null
)

@Composable
fun SmallMetricCard(data: MetricData, modifier: Modifier, accentColor: Color, shape: Shape) {
    Card(
        modifier = modifier
            .border(1.5.dp, accentColor.copy(alpha = 0.4f), shape)
            .clickable(enabled = data.onClick != null) { data.onClick?.invoke() },
        shape = shape,
        colors = CardDefaults.cardColors(containerColor = Color(0xFF00222E))
    ) {
        Row(modifier = Modifier.padding(12.dp), verticalAlignment = Alignment.CenterVertically) {
            Box(
                modifier = Modifier.size(36.dp).background(data.color.copy(alpha = 0.15f), CircleShape),
                contentAlignment = Alignment.Center
            ) {
                Icon(data.icon, null, tint = data.color, modifier = Modifier.size(18.dp))
            }
            Spacer(modifier = Modifier.width(10.dp))
            Column(modifier = Modifier.weight(1f)) {
                Text(data.value, color = TextWhite, fontSize = 16.sp, fontWeight = FontWeight.Bold, maxLines = 1, overflow = TextOverflow.Ellipsis)
                Text(data.label, color = TextGray, fontSize = 10.sp, lineHeight = 11.sp)
            }
            if (data.isSecure) {
                IconButton(onClick = { data.onToggleVisibility?.invoke() }, modifier = Modifier.size(28.dp)) {
                    Icon(imageVector = Icons.Default.Lock, contentDescription = null, tint = TextGray, modifier = Modifier.size(16.dp))
                }
            }
        }
    }
}

@Composable
fun ActivityRowItem(member: Member, shape: Shape, accentColor: Color) {
    Card(
        modifier = Modifier.fillMaxWidth().border(1.dp, Color.White.copy(alpha = 0.05f), shape),
        shape = shape,
        colors = CardDefaults.cardColors(containerColor = Color(0xFF00222E))
    ) {
        Row(modifier = Modifier.padding(16.dp), verticalAlignment = Alignment.CenterVertically) {
            Box(
                modifier = Modifier.size(44.dp).clip(CircleShape).background(PrimaryTurquoise.copy(alpha = 0.15f)),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    text = member.firstName.take(1).uppercase(),
                    color = PrimaryTurquoise,
                    fontWeight = FontWeight.Bold,
                    fontSize = 18.sp
                )
            }
            Spacer(modifier = Modifier.width(16.dp))
            Column(modifier = Modifier.weight(1f)) {
                Text(member.fullName, color = TextWhite, fontSize = 16.sp, fontWeight = FontWeight.SemiBold)
                Text("Estado: ${member.membershipStatus}", color = TextGray, fontSize = 12.sp)
            }
            Icon(Icons.AutoMirrored.Filled.KeyboardArrowRight, null, tint = accentColor)
        }
    }
}

@Composable
fun AdminBottomNavigation(
    currentRoute: String,
    onHomeClick: () -> Unit,
    onStoreClick: () -> Unit,
    onMembersClick: () -> Unit,
    onProfessorsClick: () -> Unit,
    onSettingsClick: () -> Unit,
    accentColor: Color
) {
    NavigationBar(
        modifier = Modifier.height(56.dp),
        containerColor = Color(0xFF00151C),
        contentColor = TextWhite
    ) {
        val items = listOf("Home", "Store", "Clientes", "Profesores", "Config")
        items.forEachIndexed { index, label ->
            val isSelected = when (index) {
                0 -> currentRoute == "admin_dashboard"
                1 -> currentRoute == "store"
                2 -> currentRoute == "members"
                3 -> currentRoute == "professors"
                else -> currentRoute == "app_settings"
            }

            Box(
                modifier = Modifier
                    .weight(1f)
                    .fillMaxHeight()
                    .clickable {
                        when (index) {
                            0 -> onHomeClick()
                            1 -> onStoreClick()
                            2 -> onMembersClick()
                            3 -> onProfessorsClick()
                            else -> onSettingsClick()
                        }
                    },
                contentAlignment = Alignment.Center
            ) {
                Column(horizontalAlignment = Alignment.CenterHorizontally) {
                    Text(
                        text = when (label) {
                            "Home" -> "📊"
                            "Store" -> "🛒"
                            "Clientes" -> "👥"
                            "Profesores" -> "👨‍🏫"
                            else -> "⚙️"
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
