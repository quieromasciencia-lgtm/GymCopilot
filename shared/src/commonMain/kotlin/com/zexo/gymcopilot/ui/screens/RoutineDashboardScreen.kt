package com.zexo.gymcopilot.ui.screens

import androidx.compose.animation.*
import androidx.compose.animation.core.*
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.itemsIndexed
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.filled.*
import androidx.compose.material.icons.outlined.*
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
import com.zexo.gymcopilot.model.Routine
import com.zexo.gymcopilot.ui.theme.*
import kotlinx.coroutines.launch

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun RoutineDashboardScreen(
    onBack: () -> Unit = {},
    onHomeClick: () -> Unit = {},
    onStoreClick: () -> Unit = {},
    onClassesClick: () -> Unit = {},
    onScheduleClick: () -> Unit = {},
    onRoutinesClick: () -> Unit = {},
    onChatClick: () -> Unit = {},
    onMembersClick: () -> Unit = {},
    onNewRoutineClick: () -> Unit = {},
    onStartRoutine: (String) -> Unit = {},
    onAssignRoutine: (String) -> Unit = {},
    onEditRoutine: (String) -> Unit = {},
    dataStoreManager: DataStoreManager = remember { DataStoreManager() }
) {
    val coroutineScope = rememberCoroutineScope()
    val userRole by dataStoreManager.getUserRole().collectAsState(initial = "")
    val userEmail by dataStoreManager.getUserEmail().collectAsState(initial = "")
    val savedBtnColor by dataStoreManager.getButtonColor().collectAsState(initial = null)
    val accentColor = if (savedBtnColor != null) Color(savedBtnColor!!) else PrimaryTurquoise
    val buttonStyle by dataStoreManager.getButtonStyle().collectAsState(initial = 1)
    val containerShape = getButtonStyleShape(buttonStyle)

    val savedRoutines by dataStoreManager.getRoutines().collectAsState(initial = emptyList())
    var searchQuery by remember { mutableStateOf("") }
    var expandedIndex by remember { mutableIntStateOf(-1) }
    var favoritesFilterActive by remember { mutableStateOf(false) }

    var routineToDelete by remember { mutableStateOf<Routine?>(null) }

    val filteredRoutines = remember(savedRoutines, searchQuery, userRole, userEmail, favoritesFilterActive) {
        val base = if (userRole?.lowercase() == "professor" || userRole?.lowercase() == "admin") {
            savedRoutines.filter { !it.id.contains("::") }
        } else {
            val normalizedEmail = userEmail.lowercase().trim()
            savedRoutines.filter { it.creatorEmail.lowercase().trim() == normalizedEmail || it.assignedMemberEmails.any { e -> e.lowercase().trim() == normalizedEmail } }
        }

        val searched = if (searchQuery.isEmpty()) {
            base
        } else {
            base.filter { it.name.contains(searchQuery, ignoreCase = true) }
        }

        if (favoritesFilterActive) {
            searched.sortedWith(compareByDescending<Routine> { it.isFavorite }.thenByDescending { it.createdAt })
        } else {
            searched.sortedByDescending { it.createdAt }
        }
    }

    val isProfessor = userRole?.lowercase() == "professor" || userRole?.lowercase() == "admin"
    val totalCount = if (isProfessor) savedRoutines.count { !it.id.contains("::") } else filteredRoutines.size
    val completedCount = savedRoutines.count { it.status == "Completada" }
    val assignedCount = if (isProfessor) savedRoutines.count { it.type == "Asignada" && !it.id.contains("::") } else filteredRoutines.count { it.type == "Asignada" }

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(GymBackgroundGradient)
    ) {
        Scaffold(
            containerColor = Color.Transparent,
            topBar = {
                TopAppBar(
                    title = {
                        Text(
                            text = "Rutinas",
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
                    currentRoute = "routines",
                    onHomeClick = onHomeClick,
                    onStoreClick = onStoreClick,
                    onMembersClick = onMembersClick,
                    onProfessorsClick = { },
                    onSettingsClick = { },
                    accentColor = accentColor
                )
            }
        ) { padding ->
            LazyColumn(
                modifier = Modifier
                    .fillMaxSize()
                    .padding(padding),
                contentPadding = PaddingValues(bottom = 100.dp)
            ) {
                item {
                    Row(
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(horizontal = 20.dp, vertical = 12.dp),
                        horizontalArrangement = Arrangement.spacedBy(10.dp)
                    ) {
                        val statModifier = Modifier.weight(1f).height(90.dp)
                        StatBoxShared(label = "Total", value = totalCount.toString(), icon = Icons.Outlined.Description, color = accentColor, shape = containerShape, modifier = statModifier)
                        StatBoxShared(label = "Completadas", value = completedCount.toString(), icon = Icons.Default.CheckCircle, color = Color(0xFF4CAF50), shape = containerShape, modifier = statModifier)
                        StatBoxShared(label = "Asignadas", value = assignedCount.toString(), icon = Icons.Default.Group, color = Color(0xFF2196F3), shape = containerShape, modifier = statModifier)
                    }
                }

                item {
                    OutlinedTextField(
                        value = searchQuery,
                        onValueChange = { searchQuery = it },
                        modifier = Modifier.fillMaxWidth().padding(horizontal = 20.dp),
                        placeholder = { Text("Buscar rutinas...", color = TextGray, fontSize = 14.sp) },
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
                    Spacer(Modifier.height(20.dp))
                }

                item {
                    Text(text = "Acciones rápidas", color = TextWhite, fontSize = 14.sp, fontWeight = FontWeight.Bold, modifier = Modifier.padding(horizontal = 24.dp))
                    Spacer(Modifier.height(10.dp))
                    Row(
                        modifier = Modifier.fillMaxWidth().padding(horizontal = 20.dp),
                        horizontalArrangement = Arrangement.spacedBy(10.dp)
                    ) {
                        QuickActionSharedItem(
                            label = "Nueva Rutina",
                            accentColor = accentColor,
                            shape = containerShape,
                            modifier = Modifier.weight(1f),
                            onClick = onNewRoutineClick,
                            icon = { Icon(imageVector = Icons.Default.AddCircle, contentDescription = null, tint = accentColor, modifier = Modifier.size(30.dp)) }
                        )
                        QuickActionSharedItem(
                            label = "Favoritas",
                            accentColor = accentColor,
                            shape = containerShape,
                            modifier = Modifier.weight(1f),
                            isSelected = favoritesFilterActive,
                            onClick = { favoritesFilterActive = !favoritesFilterActive },
                            icon = {
                                Icon(
                                    imageVector = if (favoritesFilterActive) Icons.Filled.Star else Icons.Outlined.StarOutline,
                                    contentDescription = null,
                                    tint = if (favoritesFilterActive) Color(0xFFFFD700) else accentColor,
                                    modifier = Modifier.size(30.dp)
                                )
                            }
                        )
                    }
                    Spacer(Modifier.height(24.dp))
                }

                item {
                    Text(text = "Mis rutinas", color = TextWhite, fontSize = 14.sp, fontWeight = FontWeight.Bold, modifier = Modifier.padding(horizontal = 24.dp))
                    Spacer(Modifier.height(10.dp))
                }

                if (filteredRoutines.isEmpty()) {
                    item {
                        Box(modifier = Modifier.fillMaxWidth().padding(40.dp), contentAlignment = Alignment.Center) {
                            Text("No se encontraron rutinas", color = TextGray, fontSize = 14.sp)
                        }
                    }
                } else {
                    itemsIndexed(filteredRoutines, key = { _, routine -> routine.id }) { index, routine ->
                        val statusColor = when (routine.status) {
                            "Activa", "Completada" -> Color(0xFF4CAF50)
                            "Asignada" -> Color(0xFF2196F3)
                            else -> TextGray
                        }

                        ExpandableRoutineSharedCard(
                            routine = routine,
                            statusColor = statusColor,
                            isExpanded = expandedIndex == index,
                            accentColor = accentColor,
                            shape = containerShape,
                            onDelete = { routineToDelete = routine },
                            onStart = { onStartRoutine(routine.id) },
                            onEdit = { onEditRoutine(routine.id) },
                            onToggleFavorite = {
                                coroutineScope.launch {
                                    dataStoreManager.updateRoutine(routine.copy(isFavorite = !routine.isFavorite))
                                }
                            },
                            onClick = { expandedIndex = if (expandedIndex == index) -1 else index }
                        )
                    }
                }
            }
        }

        if (routineToDelete != null) {
            AlertDialog(
                onDismissRequest = { routineToDelete = null },
                title = { Text("Eliminar Rutina", color = TextWhite, fontWeight = FontWeight.Bold) },
                text = { Text("¿Estás seguro de que deseas eliminar la rutina \"${routineToDelete?.name}\"?", color = TextWhite) },
                confirmButton = {
                    TextButton(onClick = {
                        coroutineScope.launch {
                            dataStoreManager.deleteRoutine(routineToDelete!!.id)
                            routineToDelete = null
                        }
                    }) {
                        Text("ELIMINAR", color = Color.Red, fontWeight = FontWeight.Bold)
                    }
                },
                dismissButton = {
                    TextButton(onClick = { routineToDelete = null }) {
                        Text("CANCELAR", color = TextGray)
                    }
                },
                containerColor = Color(0xFF00151C),
                shape = containerShape
            )
        }
    }
}

@Composable
fun StatBoxShared(
    label: String,
    value: String,
    icon: ImageVector,
    color: Color,
    shape: Shape,
    modifier: Modifier = Modifier
) {
    Box(
        modifier = modifier
            .clip(shape)
            .background(Color.White.copy(alpha = 0.03f))
            .border(1.dp, Color.White.copy(alpha = 0.05f), shape)
            .padding(8.dp),
        contentAlignment = Alignment.Center
    ) {
        Column(horizontalAlignment = Alignment.CenterHorizontally) {
            Icon(icon, null, tint = color, modifier = Modifier.size(24.dp))
            Spacer(Modifier.height(4.dp))
            Text(value, color = TextWhite, fontSize = 18.sp, fontWeight = FontWeight.Black)
            Text(label, color = TextGray, fontSize = 9.sp, fontWeight = FontWeight.Bold)
        }
    }
}

@Composable
fun QuickActionSharedItem(
    label: String,
    accentColor: Color,
    shape: Shape,
    modifier: Modifier = Modifier,
    isSelected: Boolean = false,
    onClick: () -> Unit = {},
    icon: @Composable () -> Unit
) {
    Column(
        modifier = modifier
            .height(90.dp)
            .clip(shape)
            .background(if (isSelected) accentColor.copy(alpha = 0.1f) else Color(0xFF00222E))
            .border(1.2.dp, if (isSelected) accentColor else accentColor.copy(alpha = 0.2f), shape)
            .clickable { onClick() }
            .padding(vertical = 12.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {
        icon()
        Spacer(Modifier.height(6.dp))
        Text(
            text = label,
            color = if (isSelected) accentColor else TextWhite,
            fontSize = 10.sp,
            fontWeight = FontWeight.Bold,
            textAlign = TextAlign.Center
        )
    }
}

@Composable
fun ExpandableRoutineSharedCard(
    routine: Routine,
    statusColor: Color,
    isExpanded: Boolean,
    accentColor: Color,
    shape: Shape,
    onDelete: () -> Unit,
    onStart: () -> Unit,
    onEdit: () -> Unit,
    onToggleFavorite: () -> Unit,
    onClick: () -> Unit
) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .padding(horizontal = 20.dp, vertical = 6.dp)
            .border(1.dp, if (isExpanded) accentColor.copy(alpha = 0.4f) else Color.White.copy(alpha = 0.05f), shape)
            .clickable { onClick() },
        colors = CardDefaults.cardColors(containerColor = Color.White.copy(alpha = 0.03f)),
        shape = shape
    ) {
        Column(modifier = Modifier.padding(16.dp)) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Surface(
                    modifier = Modifier
                        .size(40.dp)
                        .clickable { onStart() },
                    shape = CircleShape,
                    color = accentColor
                ) {
                    Box(contentAlignment = Alignment.Center) {
                        Icon(Icons.Default.PlayArrow, contentDescription = "Start", tint = Color.Black)
                    }
                }

                Spacer(Modifier.width(16.dp))

                Column(modifier = Modifier.weight(1f)) {
                    Text(routine.name, color = TextWhite, fontSize = 16.sp, fontWeight = FontWeight.SemiBold)
                    Text(routine.status, color = statusColor, fontSize = 12.sp, fontWeight = FontWeight.Medium)
                }

                Row(verticalAlignment = Alignment.CenterVertically) {
                    IconButton(onClick = onToggleFavorite, modifier = Modifier.size(36.dp)) {
                        Icon(if (routine.isFavorite) Icons.Filled.Star else Icons.Outlined.StarOutline, null, tint = if (routine.isFavorite) Color(0xFFFFD700) else accentColor)
                    }
                    IconButton(onClick = onEdit, modifier = Modifier.size(36.dp)) {
                        Icon(Icons.Default.Edit, null, tint = accentColor)
                    }
                    IconButton(onClick = onDelete, modifier = Modifier.size(36.dp)) {
                        Icon(Icons.Default.Delete, null, tint = Color.Red)
                    }
                }
            }

            AnimatedVisibility(visible = isExpanded) {
                Column(modifier = Modifier.padding(top = 12.dp)) {
                    HorizontalDivider(color = Color.White.copy(alpha = 0.1f))
                    Spacer(Modifier.height(8.dp))
                    Text("Ejercicios: ${routine.exercises.size}", color = TextGray, fontSize = 13.sp)
                    Text("Duración: ${routine.duration}", color = TextGray, fontSize = 13.sp)
                    if (routine.description.isNotEmpty()) {
                        Text("Descripción: ${routine.description}", color = TextGray, fontSize = 13.sp)
                    }
                }
            }
        }
    }
}
