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
import androidx.compose.material.icons.automirrored.filled.ArrowBack
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
import kotlinx.coroutines.flow.first
import kotlinx.coroutines.launch

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun MembersScreen(
    onBack: () -> Unit = {},
    onHomeClick: () -> Unit = {},
    onStoreClick: () -> Unit = {},
    onSettingsClick: () -> Unit = {},
    onScheduleClick: () -> Unit = {},
    onMembersClick: () -> Unit = {},
    onProfessorsClick: () -> Unit = {},
    onRoutinesClick: () -> Unit = {},
    onChatClick: (String) -> Unit = {},
    isAdmin: Boolean = true,
    isProfessor: Boolean = false,
    onMemberClick: (String) -> Unit = {},
    onAddMemberClick: (() -> Unit)? = null,
    initialFilter: String = "ALL",
    dataStoreManager: DataStoreManager = remember { DataStoreManager() }
) {
    val coroutineScope = rememberCoroutineScope()
    val members by dataStoreManager.getMembers().collectAsState(initial = emptyList())
    val plans by dataStoreManager.getSubscriptionPlans().collectAsState(initial = emptyList())
    val professors by dataStoreManager.getProfessors().collectAsState(initial = emptyList())
    val memberDesignation by dataStoreManager.getMemberDesignation().collectAsState(initial = "Alumno")
    val appLanguage by dataStoreManager.getAppLanguage().collectAsState(initial = "Español")

    val userEmail by dataStoreManager.getUserEmail().collectAsState(initial = "")
    val userName by dataStoreManager.getUserName().collectAsState(initial = "")
    val userRole by dataStoreManager.getUserRole().collectAsState(initial = "")
    val linkedProfId by dataStoreManager.getLinkedProfessorId().collectAsState(initial = null)

    val savedBtnColor by dataStoreManager.getButtonColor().collectAsState(initial = null)
    val accentColor = if (savedBtnColor != null) Color(savedBtnColor!!) else PrimaryTurquoise
    val buttonStyle by dataStoreManager.getButtonStyle().collectAsState(initial = 1)
    val containerShape = getButtonStyleShape(buttonStyle)

    var searchQuery by remember { mutableStateOf("") }
    var selectedFilter by remember { mutableStateOf(initialFilter) }
    var selectedProfessor by remember { mutableStateOf<String?>(null) }
    var memberToDelete by remember { mutableStateOf<Member?>(null) }

    val t = remember(appLanguage, memberDesignation, selectedFilter, isProfessor) {
        val plural = when (memberDesignation) {
            "Alumno" -> if (appLanguage == "Español") "Alumnos" else "Students"
            "Socio" -> if (appLanguage == "Español") "Socios" else "Partners"
            "Miembro" -> if (appLanguage == "Español") "Miembros" else "Members"
            "Cliente" -> if (appLanguage == "Español") "Clientes" else "Clients"
            else -> "${memberDesignation}s"
        }

        val displayTitle = if (isProfessor) {
            if (appLanguage == "Español") "Mis $plural" else "My $plural"
        } else {
            val prefix = if (onAddMemberClick != null) {
                if (appLanguage == "Español") "Gestión de" else "Manage"
            } else {
                if (appLanguage == "Español") "Lista de" else "List of"
            }
            "$prefix $memberDesignation"
        }

        mapOf(
            "display_title" to displayTitle,
            "total" to "TOTAL",
            "active" to "ACTIVOS",
            "debtors" to "DEUDORES",
            "dropouts" to "DESERTORES",
            "search" to "Buscar $plural...",
            "profs" to "Profesores",
            "no_profs" to "Sin profesores registrados",
            "no_results" to "Sin resultados",
            "none_reg" to "Sin $plural registrados",
            "cancel" to "CANCELAR",
            "delete_confirm" to "¿Eliminar $memberDesignation?",
            "delete_msg" to "¿Estás seguro de que quieres eliminar a este $memberDesignation?",
            "delete" to "Eliminar"
        )
    }

    val baseMembers = remember(members, isProfessor, isAdmin, userName, linkedProfId, professors) {
        if (isProfessor && !isAdmin) {
            val effectiveProfessorName = if (linkedProfId != null) {
                professors.find { it.id == linkedProfId }?.fullName ?: userName
            } else {
                userName
            }
            members.filter { it.assignedTrainer.equals(effectiveProfessorName, ignoreCase = true) }
        } else {
            members
        }
    }

    val filteredMembers = baseMembers.filter {
        val fullName = "${it.firstName} ${it.lastName}"
        val matchesSearch = fullName.contains(searchQuery, ignoreCase = true) ||
                it.email.contains(searchQuery, ignoreCase = true)
        val matchesFilter = when (selectedFilter) {
            "ALL" -> true
            "DEUDOR" -> it.membershipStatus == "DEUDOR" || it.membershipStatus == "VENCIDO"
            else -> it.membershipStatus == selectedFilter
        }
        val matchesProfessor = if (selectedProfessor == null) true else it.assignedTrainer == selectedProfessor
        matchesSearch && matchesFilter && matchesProfessor
    }

    val stats = remember(baseMembers) {
        mapOf(
            "total" to baseMembers.size,
            "active" to baseMembers.count { it.membershipStatus == "ACTIVO" || it.membershipStatus == "ACTIVE" },
            "debtor" to baseMembers.count { it.membershipStatus == "DEUDOR" || it.membershipStatus == "VENCIDO" },
            "dropout" to baseMembers.count { it.membershipStatus == "DESERTOR" || it.membershipStatus == "DROPOUT" }
        )
    }

    Scaffold(
        containerColor = Color.Transparent,
        topBar = {
            TopAppBar(
                title = {
                    Text(
                        text = t["display_title"] ?: "",
                        color = TextWhite,
                        fontWeight = FontWeight.Black,
                        fontSize = 22.sp,
                        modifier = Modifier.padding(start = 12.dp)
                    )
                },
                colors = TopAppBarDefaults.topAppBarColors(containerColor = Color.Transparent),
                navigationIcon = {
                    IconButton(onClick = onBack) {
                        Icon(Icons.AutoMirrored.Filled.ArrowBack, contentDescription = "Back", tint = accentColor)
                    }
                }
            )
        },
        bottomBar = {
            AdminBottomNavigation(
                currentRoute = "members",
                onHomeClick = onHomeClick,
                onStoreClick = onStoreClick,
                onMembersClick = { },
                onProfessorsClick = onProfessorsClick,
                onSettingsClick = onSettingsClick,
                accentColor = accentColor
            )
        },
        floatingActionButton = {
            if (onAddMemberClick != null && isAdmin) {
                FloatingActionButton(
                    onClick = onAddMemberClick,
                    containerColor = accentColor,
                    contentColor = Color(0xFF0C1221),
                    shape = CircleShape,
                    modifier = Modifier.padding(bottom = 80.dp)
                ) {
                    Icon(Icons.Default.PersonAdd, contentDescription = "Agregar")
                }
            }
        }
    ) { padding ->
        LazyColumn(
            modifier = Modifier.fillMaxSize().padding(padding),
            contentPadding = PaddingValues(bottom = 100.dp)
        ) {
            item {
                Row(
                    modifier = Modifier.fillMaxWidth().padding(horizontal = 20.dp, vertical = 12.dp),
                    horizontalArrangement = Arrangement.spacedBy(10.dp)
                ) {
                    StatBoxItem(
                        label = t["total"] ?: "TOTAL",
                        value = stats["total"].toString(),
                        icon = Icons.Default.Groups,
                        color = accentColor,
                        shape = containerShape,
                        isSelected = selectedFilter == "ALL",
                        onClick = { selectedFilter = "ALL" },
                        modifier = Modifier.weight(1f).height(105.dp)
                    )
                    StatBoxItem(
                        label = t["active"] ?: "ACTIVOS",
                        value = stats["active"].toString(),
                        icon = Icons.Default.Person,
                        color = Color(0xFF4CAF50),
                        shape = containerShape,
                        isSelected = selectedFilter == "ACTIVO",
                        onClick = { selectedFilter = "ACTIVO" },
                        modifier = Modifier.weight(1f).height(105.dp)
                    )
                    if (isAdmin) {
                        StatBoxItem(
                            label = t["debtors"] ?: "DEUDORES",
                            value = stats["debtor"].toString(),
                            icon = Icons.Default.Warning,
                            color = Color(0xFFF44336),
                            shape = containerShape,
                            isSelected = selectedFilter == "DEUDOR",
                            onClick = { selectedFilter = "DEUDOR" },
                            modifier = Modifier.weight(1f).height(105.dp)
                        )
                        StatBoxItem(
                            label = t["dropouts"] ?: "DESERTORES",
                            value = stats["dropout"].toString(),
                            icon = Icons.Default.PersonOff,
                            color = Color(0xFFFF9800),
                            shape = containerShape,
                            isSelected = selectedFilter == "DESERTOR",
                            onClick = { selectedFilter = "DESERTOR" },
                            modifier = Modifier.weight(1f).height(105.dp)
                        )
                    }
                }
            }

            item {
                OutlinedTextField(
                    value = searchQuery,
                    onValueChange = { searchQuery = it },
                    modifier = Modifier.fillMaxWidth().padding(horizontal = 20.dp),
                    placeholder = { Text(t["search"] ?: "", color = TextGray, fontSize = 14.sp) },
                    leadingIcon = { Icon(Icons.Default.Search, null, tint = accentColor) },
                    shape = containerShape,
                    colors = OutlinedTextFieldDefaults.colors(
                        focusedContainerColor = Color(0xFF00222E),
                        unfocusedContainerColor = Color(0xFF00222E),
                        focusedBorderColor = accentColor,
                        unfocusedBorderColor = Color.White.copy(alpha = 0.1f),
                        focusedTextColor = TextWhite,
                        unfocusedTextColor = TextWhite
                    )
                )

                if (isAdmin) {
                    Spacer(Modifier.height(16.dp))
                    Text(
                        text = t["profs"] ?: "Profesores",
                        color = TextWhite,
                        fontSize = 14.sp,
                        fontWeight = FontWeight.Bold,
                        modifier = Modifier.padding(horizontal = 24.dp)
                    )
                    Spacer(Modifier.height(8.dp))
                    if (professors.isEmpty()) {
                        Text(
                            text = t["no_profs"] ?: "",
                            color = TextGray,
                            fontSize = 12.sp,
                            modifier = Modifier.padding(horizontal = 24.dp)
                        )
                    } else {
                        LazyRow(
                            modifier = Modifier.fillMaxWidth(),
                            contentPadding = PaddingValues(horizontal = 20.dp),
                            horizontalArrangement = Arrangement.spacedBy(12.dp)
                        ) {
                            items(professors) { prof ->
                                val isSelected = selectedProfessor == prof.fullName
                                Column(
                                    horizontalAlignment = Alignment.CenterHorizontally,
                                    modifier = Modifier.width(74.dp)
                                ) {
                                    Box(
                                        modifier = Modifier
                                            .size(60.dp)
                                            .clip(RoundedCornerShape(14.dp))
                                            .background(Color(0xFF00222E))
                                            .border(
                                                width = if (isSelected) 3.dp else 1.dp,
                                                color = if (isSelected) accentColor else Color.White.copy(alpha = 0.1f),
                                                shape = RoundedCornerShape(14.dp)
                                            )
                                            .clickable { selectedProfessor = if (isSelected) null else prof.fullName },
                                        contentAlignment = Alignment.Center
                                    ) {
                                        Text(text = "🏋️", fontSize = 28.sp)
                                    }
                                    Text(
                                        text = prof.firstName,
                                        color = if (isSelected) TextWhite else TextGray,
                                        fontSize = 11.sp,
                                        fontWeight = if (isSelected) FontWeight.Bold else FontWeight.Normal,
                                        textAlign = TextAlign.Center,
                                        maxLines = 1,
                                        modifier = Modifier.padding(top = 4.dp)
                                    )
                                }
                            }
                        }
                    }
                }
                Spacer(Modifier.height(16.dp))
            }

            items(filteredMembers) { member ->
                val identifier = if (member.email.isNotBlank()) member.email else member.fullName
                MemberSharedRow(
                    member = member,
                    shape = containerShape,
                    accentColor = accentColor,
                    onClick = { onMemberClick(member.email) },
                    onDelete = { memberToDelete = member },
                    onChat = { onChatClick(identifier) },
                    isAdmin = isAdmin
                )
            }

            if (filteredMembers.isEmpty() && members.isNotEmpty()) {
                item {
                    Text(
                        text = if (searchQuery.isNotEmpty()) t["no_results"] ?: "" else t["none_reg"] ?: "",
                        color = TextGray,
                        modifier = Modifier.fillMaxWidth().padding(32.dp),
                        textAlign = TextAlign.Center
                    )
                }
            }
        }
    }

    if (memberToDelete != null) {
        AlertDialog(
            onDismissRequest = { memberToDelete = null },
            title = { Text(t["delete_confirm"] ?: "", color = TextWhite) },
            text = { Text(t["delete_msg"] ?: "", color = TextGray) },
            containerColor = Color(0xFF081C24),
            confirmButton = {
                TextButton(onClick = {
                    memberToDelete?.let { m ->
                        coroutineScope.launch {
                            dataStoreManager.removeMember(m.email)
                            memberToDelete = null
                        }
                    }
                }) { Text(t["delete"] ?: "Eliminar", color = Color.Red) }
            },
            dismissButton = {
                TextButton(onClick = { memberToDelete = null }) { Text(t["cancel"] ?: "CANCELAR", color = TextGray) }
            }
        )
    }
}

@Composable
fun StatBoxItem(
    label: String,
    value: String,
    icon: ImageVector,
    color: Color,
    shape: Shape,
    isSelected: Boolean,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    val bg = if (isSelected) color.copy(alpha = 0.15f) else Color.White.copy(alpha = 0.03f)
    val borderCol = if (isSelected) color else Color.White.copy(alpha = 0.05f)
    Box(
        modifier = modifier
            .clip(shape)
            .background(bg)
            .border(1.dp, borderCol, shape)
            .clickable { onClick() }
            .padding(8.dp),
        contentAlignment = Alignment.Center
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center
        ) {
            Icon(icon, null, tint = color, modifier = Modifier.size(28.dp))
            Spacer(Modifier.height(4.dp))
            Text(value, color = TextWhite, fontSize = 18.sp, fontWeight = FontWeight.Black)
            Text(label, color = TextGray, fontSize = 9.sp, fontWeight = FontWeight.Bold)
        }
    }
}

@Composable
fun MemberSharedRow(
    member: Member,
    shape: Shape,
    accentColor: Color,
    onClick: () -> Unit,
    onDelete: () -> Unit,
    onChat: () -> Unit,
    isAdmin: Boolean = true
) {
    val statusColor = when (member.membershipStatus.uppercase()) {
        "ACTIVO", "ACTIVE" -> Color(0xFF4CAF50)
        "EXPIRED", "DEBTOR", "DEUDOR", "VENCIDO" -> Color(0xFFF44336)
        "DROPOUT", "DESERTOR" -> Color(0xFFFF9800)
        else -> TextGray
    }

    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 20.dp, vertical = 6.dp)
            .border(1.dp, Color.White.copy(alpha = 0.05f), shape)
            .clickable { onClick() },
        colors = CardDefaults.cardColors(containerColor = Color.White.copy(alpha = 0.03f)),
        shape = shape
    ) {
        Row(
            modifier = Modifier.padding(horizontal = 16.dp, vertical = 10.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Box(
                modifier = Modifier
                    .size(44.dp)
                    .clip(CircleShape)
                    .background(statusColor.copy(alpha = 0.1f)),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    member.firstName.take(1).uppercase(),
                    color = statusColor,
                    fontWeight = FontWeight.Black,
                    fontSize = 18.sp
                )
            }

            Spacer(Modifier.width(16.dp))

            Column(modifier = Modifier.weight(1f)) {
                Text(
                    member.fullName,
                    color = TextWhite,
                    fontSize = 16.sp,
                    fontWeight = FontWeight.SemiBold
                )

                Text(
                    member.membershipStatus,
                    color = statusColor,
                    fontSize = 12.sp,
                    fontWeight = FontWeight.Medium
                )
            }

            Row(verticalAlignment = Alignment.CenterVertically) {
                IconButton(onClick = onChat, modifier = Modifier.size(36.dp)) {
                    Icon(Icons.Default.Chat, contentDescription = "Chat", tint = accentColor, modifier = Modifier.size(20.dp))
                }
                if (isAdmin) {
                    IconButton(onClick = onDelete, modifier = Modifier.size(36.dp)) {
                        Icon(Icons.Default.Delete, contentDescription = "Eliminar", tint = Color.Red, modifier = Modifier.size(20.dp))
                    }
                }
            }
        }
    }
}
