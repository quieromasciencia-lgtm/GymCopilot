package com.zexo.gymcopilot.ui

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import kotlinx.coroutines.delay

enum class AppScreenState {
    SPLASH,
    ROLE_SELECTOR,
    MAIN_APP
}

@Composable
fun SharedGymCopilotApp(
    initialRole: String = "admin",
    gymName: String = "GymCopilot"
) {
    var screenState by remember { mutableStateOf(AppScreenState.SPLASH) }
    var currentRole by remember { mutableStateOf(initialRole.lowercase()) }

    GymCopilotTheme {
        Surface(
            modifier = Modifier.fillMaxSize(),
            color = MaterialTheme.colorScheme.background
        ) {
            when (screenState) {
                AppScreenState.SPLASH -> {
                    SplashScreenView(
                        gymName = gymName,
                        onTimeout = { screenState = AppScreenState.ROLE_SELECTOR }
                    )
                }
                AppScreenState.ROLE_SELECTOR -> {
                    RoleSelectorView(
                        onSelectRole = { selectedRole ->
                            currentRole = selectedRole
                            screenState = AppScreenState.MAIN_APP
                        }
                    )
                }
                AppScreenState.MAIN_APP -> {
                    MainAppView(
                        gymName = gymName,
                        userRole = currentRole,
                        onChangeRole = { screenState = AppScreenState.ROLE_SELECTOR }
                    )
                }
            }
        }
    }
}

@Composable
fun SplashScreenView(
    gymName: String,
    onTimeout: () -> Unit
) {
    LaunchedEffect(Unit) {
        delay(2200)
        onTimeout()
    }

    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(DarkBackgroundColor),
        contentAlignment = Alignment.Center
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.Center,
            modifier = Modifier.padding(32.dp)
        ) {
            Surface(
                color = PrimaryTurquoise.copy(alpha = 0.15f),
                shape = RoundedCornerShape(24.dp)
            ) {
                Text(
                    text = "🏋️‍♂️",
                    fontSize = 54.sp,
                    modifier = Modifier.padding(24.dp)
                )
            }

            Spacer(modifier = Modifier.height(24.dp))

            Text(
                text = gymName.ifBlank { "GymCopilot" },
                fontSize = 32.sp,
                fontWeight = FontWeight.Bold,
                color = PrimaryTurquoise
            )

            Spacer(modifier = Modifier.height(8.dp))

            Text(
                text = "GESTIÓN DE GIMNASIOS Y ASISTENCIA",
                fontSize = 12.sp,
                fontWeight = FontWeight.SemiBold,
                color = TextGray,
                letterSpacing = 2.sp
            )

            Spacer(modifier = Modifier.height(36.dp))

            LinearProgressIndicator(
                modifier = Modifier
                    .width(160.dp)
                    .height(4.dp),
                color = PrimaryTurquoise,
                trackColor = SurfaceColor
            )
        }
    }
}

@Composable
fun RoleSelectorView(
    onSelectRole: (String) -> Unit
) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .background(DarkBackgroundColor)
            .padding(24.dp),
        contentAlignment = Alignment.Center
    ) {
        Column(
            horizontalAlignment = Alignment.CenterHorizontally,
            modifier = Modifier.fillMaxWidth()
        ) {
            Text(
                text = "Bienvenido a GymCopilot",
                fontSize = 24.sp,
                fontWeight = FontWeight.Bold,
                color = TextWhite
            )

            Text(
                text = "Selecciona un perfil para ingresar a la app",
                fontSize = 14.sp,
                color = TextGray,
                modifier = Modifier.padding(top = 6.dp, bottom = 28.dp)
            )

            RoleCard(
                title = "Administrador",
                description = "Métricas, gestión de miembros, horarios y caja",
                icon = "👑",
                accent = PrimaryTurquoise,
                onClick = { onSelectRole("admin") }
            )

            RoleCard(
                title = "Profesor / Entrenador",
                description = "Control de clases, asistencias y rutinas de alumnos",
                icon = "🏋️",
                accent = AccentOrange,
                onClick = { onSelectRole("profesor") }
            )

            RoleCard(
                title = "Alumno / Miembro",
                description = "Mi rutina del día, pase de acceso y horarios",
                icon = "👤",
                accent = Color(0xFF4CAF50),
                onClick = { onSelectRole("alumno") }
            )

            RoleCard(
                title = "Tienda y Productos",
                description = "Catálogo de suplementos, indumentaria y planes",
                icon = "🛒",
                accent = Color(0xFFE91E63),
                onClick = { onSelectRole("tienda") }
            )
        }
    }
}

@Composable
fun RoleCard(
    title: String,
    description: String,
    icon: String,
    accent: Color,
    onClick: () -> Unit
) {
    Card(
        colors = CardDefaults.cardColors(containerColor = SurfaceColor),
        shape = RoundedCornerShape(16.dp),
        modifier = Modifier
            .fillMaxWidth()
            .padding(vertical = 6.dp)
            .clickable { onClick() }
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(18.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Box(
                modifier = Modifier
                    .size(48.dp)
                    .background(accent.copy(alpha = 0.15f), shape = RoundedCornerShape(12.dp)),
                contentAlignment = Alignment.Center
            ) {
                Text(text = icon, fontSize = 24.sp)
            }

            Spacer(modifier = Modifier.width(16.dp))

            Column(modifier = Modifier.weight(1f)) {
                Text(
                    text = title,
                    fontSize = 16.sp,
                    fontWeight = FontWeight.Bold,
                    color = TextWhite
                )
                Text(
                    text = description,
                    fontSize = 12.sp,
                    color = TextGray
                )
            }
        }
    }
}

@Composable
fun MainAppView(
    gymName: String,
    userRole: String,
    onChangeRole: () -> Unit
) {
    var selectedTab by remember { mutableStateOf(0) }

    Scaffold(
        topBar = {
            GymHeader(
                gymName = gymName,
                userRole = userRole,
                onRoleClick = onChangeRole
            )
        },
        bottomBar = {
            RoleNavigationBar(
                userRole = userRole,
                selectedTab = selectedTab,
                onTabSelected = { selectedTab = it }
            )
        },
        containerColor = DarkBackgroundColor
    ) { innerPadding ->
        Box(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding)
                .padding(horizontal = 16.dp)
        ) {
            when (userRole) {
                "admin" -> AdminView(tab = selectedTab)
                "profesor" -> ProfessorView(tab = selectedTab)
                "alumno" -> MemberView(tab = selectedTab)
                else -> StoreView(tab = selectedTab)
            }
        }
    }
}

@Composable
fun RoleNavigationBar(
    userRole: String,
    selectedTab: Int,
    onTabSelected: (Int) -> Unit
) {
    val items = when (userRole) {
        "admin" -> listOf("Resumen", "Miembros", "Horarios", "Ajustes")
        "profesor" -> listOf("Mis Clases", "Asistencias", "Rutinas")
        "alumno" -> listOf("Mi Rutina", "Clases", "Membresía")
        else -> listOf("Productos", "Planes")
    }

    NavigationBar(
        containerColor = SurfaceColor,
        contentColor = TextWhite
    ) {
        items.forEachIndexed { index, label ->
            NavigationBarItem(
                selected = selectedTab == index,
                onClick = { onTabSelected(index) },
                icon = {
                    Text(
                        text = when (label) {
                            "Resumen", "Mi Rutina" -> "📊"
                            "Miembros", "Asistencias" -> "👥"
                            "Horarios", "Mis Clases", "Clases" -> "📅"
                            "Rutinas" -> "🏋️"
                            "Membresía", "Planes" -> "💳"
                            "Productos" -> "🛒"
                            else -> "⚙️"
                        },
                        fontSize = 18.sp
                    )
                },
                label = {
                    Text(
                        text = label,
                        fontSize = 11.sp,
                        fontWeight = if (selectedTab == index) FontWeight.Bold else FontWeight.Normal
                    )
                },
                colors = NavigationBarItemDefaults.colors(
                    selectedIconColor = PrimaryTurquoise,
                    selectedTextColor = PrimaryTurquoise,
                    indicatorColor = PrimaryTurquoise.copy(alpha = 0.15f),
                    unselectedIconColor = TextGray,
                    unselectedTextColor = TextGray
                )
            )
        }
    }
}

@Composable
fun AdminView(tab: Int) {
    when (tab) {
        0 -> {
            LazyColumn(modifier = Modifier.fillMaxSize().padding(top = 16.dp)) {
                item {
                    Text(
                        text = "Panel de Administración",
                        fontSize = 20.sp,
                        fontWeight = FontWeight.Bold,
                        color = TextWhite,
                        modifier = Modifier.padding(bottom = 16.dp)
                    )
                }

                item {
                    Row(
                        horizontalArrangement = Arrangement.spacedBy(12.dp),
                        modifier = Modifier.fillMaxWidth()
                    ) {
                        StatCard(
                            title = "Miembros Activos",
                            value = "142",
                            subtitle = "+12 este mes",
                            accentColor = PrimaryTurquoise,
                            modifier = Modifier.weight(1f)
                        )
                        StatCard(
                            title = "Asistencia Hoy",
                            value = "38",
                            subtitle = "85% concurrencia",
                            accentColor = AccentOrange,
                            modifier = Modifier.weight(1f)
                        )
                    }
                }

                item {
                    Spacer(modifier = Modifier.height(20.dp))
                    Text(
                        text = "Miembros Recientes",
                        fontSize = 16.sp,
                        fontWeight = FontWeight.Bold,
                        color = TextWhite,
                        modifier = Modifier.padding(bottom = 8.dp)
                    )
                }

                item {
                    MemberCard("Juan Carlos Pérez", "Pase Libre Gold", "ACTIVO", "Hoy 08:30 AM", true)
                    MemberCard("María Florencia Gómez", "Musculación 3x", "ACTIVO", "Hoy 10:15 AM", true)
                    MemberCard("Carlos Alberto López", "Pase Libre", "VENCIDO", "Hace 3 días", false)
                    MemberCard("Ana Laura Torres", "Crossfit VIP", "ACTIVO", "Ayer 18:00 PM", true)
                }
            }
        }
        1 -> {
            LazyColumn(modifier = Modifier.fillMaxSize().padding(top = 16.dp)) {
                item {
                    Text(text = "Gestión de Miembros", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = TextWhite)
                    Spacer(modifier = Modifier.height(12.dp))
                }
                item {
                    MemberCard("Juan Carlos Pérez", "Pase Libre Gold", "ACTIVO", "Hoy 08:30 AM", true)
                    MemberCard("María Florencia Gómez", "Musculación 3x", "ACTIVO", "Hoy 10:15 AM", true)
                    MemberCard("Carlos Alberto López", "Pase Libre", "VENCIDO", "Hace 3 días", false)
                    MemberCard("Ana Laura Torres", "Crossfit VIP", "ACTIVO", "Ayer 18:00 PM", true)
                    MemberCard("Lucas Martínez", "Pase Mensual", "ACTIVO", "Hoy 07:00 AM", true)
                    MemberCard("Sofia Benítez", "Musculación 2x", "VENCIDO", "Hace 5 días", false)
                }
            }
        }
        2 -> {
            LazyColumn(modifier = Modifier.fillMaxSize().padding(top = 16.dp)) {
                item {
                    Text(text = "Horarios y Clases de Hoy", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = TextWhite)
                    Spacer(modifier = Modifier.height(12.dp))
                }
                item {
                    ClassScheduleCard("Crossfit Intensivo", "Prof. Roberto", "08:00 - 09:00", "15/15 Cupos")
                    ClassScheduleCard("Yoga & Mobility", "Prof. Laura", "10:00 - 11:00", "8/12 Cupos")
                    ClassScheduleCard("Spinning Power", "Prof. Marcos", "18:00 - 19:00", "20/20 Cupos")
                    ClassScheduleCard("Musculación Guiada", "Prof. Gabriel", "19:00 - 20:30", "12/25 Cupos")
                }
            }
        }
        else -> {
            Column(modifier = Modifier.fillMaxSize().padding(top = 16.dp)) {
                Text(text = "Configuración del Sistema", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = TextWhite)
                Spacer(modifier = Modifier.height(16.dp))
                Card(
                    colors = CardDefaults.cardColors(containerColor = SurfaceColor),
                    shape = RoundedCornerShape(12.dp),
                    modifier = Modifier.fillMaxWidth().padding(vertical = 6.dp)
                ) {
                    Column(modifier = Modifier.padding(16.dp)) {
                        Text(text = "🌐 Red Wi-Fi de Asistencia", fontWeight = FontWeight.Bold, color = PrimaryTurquoise)
                        Text(text = "SSID: GymCopilot_VIP_5G", color = TextWhite, fontSize = 14.sp)
                    }
                }
                Card(
                    colors = CardDefaults.cardColors(containerColor = SurfaceColor),
                    shape = RoundedCornerShape(12.dp),
                    modifier = Modifier.fillMaxWidth().padding(vertical = 6.dp)
                ) {
                    Column(modifier = Modifier.padding(16.dp)) {
                        Text(text = "☁️ Estado de Sincronización", fontWeight = FontWeight.Bold, color = PrimaryTurquoise)
                        Text(text = "Google Sheets Ktor API: Conectado", color = TextWhite, fontSize = 14.sp)
                    }
                }
            }
        }
    }
}

@Composable
fun ProfessorView(tab: Int) {
    when (tab) {
        0 -> {
            LazyColumn(modifier = Modifier.fillMaxSize().padding(top = 16.dp)) {
                item {
                    Text(text = "Mis Clases Asignadas", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = TextWhite)
                    Spacer(modifier = Modifier.height(12.dp))
                }
                item {
                    ClassScheduleCard("Musculación Guiada", "Usted", "09:00 - 11:00", "18 Alumnos")
                    ClassScheduleCard("Crossfit Avanzado", "Usted", "17:00 - 18:30", "14 Alumnos")
                }
            }
        }
        1 -> {
            LazyColumn(modifier = Modifier.fillMaxSize().padding(top = 16.dp)) {
                item {
                    Text(text = "Control de Asistencia", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = TextWhite)
                    Spacer(modifier = Modifier.height(12.dp))
                }
                item {
                    MemberCard("Juan Carlos Pérez", "Clase 09:00", "PRESENTE", "Hoy 08:55 AM", true)
                    MemberCard("María Florencia Gómez", "Clase 09:00", "PRESENTE", "Hoy 09:02 AM", true)
                    MemberCard("Lucas Martínez", "Clase 09:00", "AUSENTE", "Sin registro", false)
                }
            }
        }
        else -> {
            LazyColumn(modifier = Modifier.fillMaxSize().padding(top = 16.dp)) {
                item {
                    Text(text = "Asignación de Rutinas", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = TextWhite)
                    Spacer(modifier = Modifier.height(12.dp))
                }
                item {
                    RoutineCard("Sentadilla Libre con Barra", "4", "10", "90 seg", false) {}
                    RoutineCard("Press de Banca Plano", "4", "12", "90 seg", false) {}
                    RoutineCard("Remo con Barra T", "3", "12", "60 seg", false) {}
                }
            }
        }
    }
}

@Composable
fun MemberView(tab: Int) {
    var ex1 by remember { mutableStateOf(true) }
    var ex2 by remember { mutableStateOf(false) }
    var ex3 by remember { mutableStateOf(false) }
    var ex4 by remember { mutableStateOf(false) }

    when (tab) {
        0 -> {
            LazyColumn(modifier = Modifier.fillMaxSize().padding(top = 16.dp)) {
                item {
                    Text(text = "Mi Rutina de Hoy: Hipertrofia Pecho y Tríceps", fontSize = 18.sp, fontWeight = FontWeight.Bold, color = TextWhite)
                    Spacer(modifier = Modifier.height(12.dp))
                }
                item {
                    RoutineCard("Press Inclinado con Mancuernas", "4", "10 - 12", "90 seg", ex1) { ex1 = !ex1 }
                    RoutineCard("Aperturas en Polea Alta", "3", "15", "60 seg", ex2) { ex2 = !ex2 }
                    RoutineCard("Fondos en Paralelas", "4", "10", "90 seg", ex3) { ex3 = !ex3 }
                    RoutineCard("Extensión de Tríceps Polea", "3", "12 - 15", "60 seg", ex4) { ex4 = !ex4 }
                }
            }
        }
        1 -> {
            LazyColumn(modifier = Modifier.fillMaxSize().padding(top = 16.dp)) {
                item {
                    Text(text = "Reservar Clases", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = TextWhite)
                    Spacer(modifier = Modifier.height(12.dp))
                }
                item {
                    ClassScheduleCard("Crossfit Intensivo", "Prof. Roberto", "08:00 - 09:00", "15/15 Cupos")
                    ClassScheduleCard("Yoga & Mobility", "Prof. Laura", "10:00 - 11:00", "8/12 Cupos")
                    ClassScheduleCard("Spinning Power", "Prof. Marcos", "18:00 - 19:00", "20/20 Cupos")
                }
            }
        }
        else -> {
            Column(modifier = Modifier.fillMaxSize().padding(top = 16.dp)) {
                Text(text = "Estado de mi Membresía", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = TextWhite)
                Spacer(modifier = Modifier.height(16.dp))
                StatCard(
                    title = "Plan Actual",
                    value = "Pase Libre VIP",
                    subtitle = "Vence en 18 días (15 de Octubre)",
                    accentColor = PrimaryTurquoise,
                    modifier = Modifier.fillMaxWidth()
                )
            }
        }
    }
}

@Composable
fun StoreView(tab: Int) {
    when (tab) {
        0 -> {
            LazyColumn(modifier = Modifier.fillMaxSize().padding(top = 16.dp)) {
                item {
                    Text(text = "Catálogo de Suplementos e Indumentaria", fontSize = 18.sp, fontWeight = FontWeight.Bold, color = TextWhite)
                    Spacer(modifier = Modifier.height(12.dp))
                }
                item {
                    ProductCard("Whey Protein Isolate 1kg", "Suplementación", "$45.000")
                    ProductCard("Creatina Monohidratada 300g", "Suplementación", "$38.000")
                    ProductCard("Shaker Térmico GymCopilot", "Accesorios", "$12.500")
                    ProductCard("Remera OverSize GymCopilot", "Indumentaria", "$22.000")
                }
            }
        }
        else -> {
            LazyColumn(modifier = Modifier.fillMaxSize().padding(top = 16.dp)) {
                item {
                    Text(text = "Planes de Membresía del Gimnasio", fontSize = 18.sp, fontWeight = FontWeight.Bold, color = TextWhite)
                    Spacer(modifier = Modifier.height(12.dp))
                }
                item {
                    ProductCard("Plan Pase Libre Mensual", "Musculación + Clases", "$35.000 / mes")
                    ProductCard("Plan Trimestral Promocional", "Ahorra 15%", "$90.000 total")
                    ProductCard("Plan Anual VIP Copilot", "Ahorra 30% + Regalo", "$280.000 total")
                }
            }
        }
    }
}
