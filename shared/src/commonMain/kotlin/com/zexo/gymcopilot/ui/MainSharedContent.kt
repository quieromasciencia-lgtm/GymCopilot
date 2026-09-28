package com.zexo.gymcopilot.ui

import androidx.compose.foundation.background
import androidx.compose.foundation.basicMarquee
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import kotlinx.coroutines.delay

enum class AppScreenState {
    SPLASH,
    LOGIN,
    MAIN_APP
}

@Composable
fun SharedGymCopilotApp(
    initialRole: String = "admin",
    gymName: String = "Tu Gimnasio"
) {
    var screenState by remember { mutableStateOf(AppScreenState.SPLASH) }
    var currentRole by remember { mutableStateOf(initialRole.lowercase()) }

    GymCopilotTheme {
        Box(
            modifier = Modifier
                .fillMaxSize()
                .background(GymBackgroundGradient)
        ) {
            when (screenState) {
                AppScreenState.SPLASH -> {
                    SplashScreenView(
                        gymName = gymName,
                        onTimeout = { screenState = AppScreenState.LOGIN }
                    )
                }
                AppScreenState.LOGIN -> {
                    LoginScreenView(
                        gymName = gymName,
                        onRoleSelected = { selectedRole ->
                            currentRole = selectedRole
                            screenState = AppScreenState.MAIN_APP
                        }
                    )
                }
                AppScreenState.MAIN_APP -> {
                    MainAppView(
                        gymName = gymName,
                        userRole = currentRole,
                        onChangeRole = { screenState = AppScreenState.LOGIN }
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
            .background(DarkBackground),
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

        Column(
            modifier = Modifier
                .align(Alignment.BottomCenter)
                .padding(bottom = 40.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Text(
                text = "🇦🇷 Las Malvinas son Argentinas",
                color = TextWhite.copy(alpha = 0.7f),
                fontSize = 14.sp,
                fontWeight = FontWeight.Medium
            )
        }
    }
}

@Composable
fun LoginScreenView(
    gymName: String,
    onRoleSelected: (String) -> Unit
) {
    Box(
        modifier = Modifier
            .fillMaxSize()
            .padding(24.dp),
        contentAlignment = Alignment.Center
    ) {
        LazyColumn(
            modifier = Modifier.fillMaxWidth(),
            horizontalAlignment = Alignment.CenterHorizontally,
            verticalArrangement = Arrangement.spacedBy(16.dp),
            contentPadding = PaddingValues(vertical = 40.dp)
        ) {
            item {
                Surface(
                    color = PrimaryTurquoise.copy(alpha = 0.15f),
                    shape = RoundedCornerShape(24.dp)
                ) {
                    Text(
                        text = "🦁",
                        fontSize = 64.sp,
                        modifier = Modifier.padding(20.dp)
                    )
                }

                Spacer(modifier = Modifier.height(24.dp))

                Text(
                    text = "Bienvenido a",
                    color = TextGray,
                    fontSize = 18.sp,
                    textAlign = TextAlign.Center
                )

                Text(
                    text = gymName.ifBlank { "Tu Gimnasio" },
                    color = PrimaryTurquoise,
                    fontSize = 32.sp,
                    fontWeight = FontWeight.Black,
                    textAlign = TextAlign.Center
                )

                Spacer(modifier = Modifier.height(16.dp))

                Text(
                    text = "Selecciona tu rol para continuar",
                    color = TextWhite,
                    fontSize = 16.sp,
                    textAlign = TextAlign.Center
                )

                Spacer(modifier = Modifier.height(12.dp))
            }

            item {
                RoleCard(
                    title = "Administrador",
                    description = "Gestiona tu gimnasio, socios y planes",
                    iconEmoji = "🛡️",
                    accentColor = PrimaryTurquoise,
                    onClick = { onRoleSelected("admin") }
                )
            }

            item {
                RoleCard(
                    title = "Profesor",
                    description = "Acceso al panel de entrenamiento",
                    iconEmoji = "💻",
                    accentColor = PrimaryTurquoise,
                    onClick = { onRoleSelected("profesor") }
                )
            }

            item {
                RoleCard(
                    title = "Socio del Gimnasio",
                    description = "Sigue tu progreso y tabla",
                    iconEmoji = "👤",
                    accentColor = PrimaryTurquoise,
                    onClick = { onRoleSelected("member") }
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
            Column {
                HeaderBar(
                    gymName = gymName,
                    userRole = userRole,
                    onRoleClick = onChangeRole
                )
                BroadcastMessageDisplay("📢 ¡Recordatorio! Este viernes clase especial de Spinning a las 19:00 hs.")
            }
        },
        bottomBar = {
            RoleNavigationBar(
                userRole = userRole,
                selectedTab = selectedTab,
                onTabSelected = { selectedTab = it }
            )
        },
        containerColor = Color.Transparent
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
                else -> MemberView(tab = selectedTab)
            }
        }
    }
}

@Composable
fun HeaderBar(
    gymName: String,
    userRole: String,
    onRoleClick: () -> Unit
) {
    Surface(
        color = Color(0xFF00151C),
        tonalElevation = 8.dp,
        modifier = Modifier.fillMaxWidth()
    ) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 20.dp, vertical = 14.dp),
            horizontalArrangement = Arrangement.SpaceBetween,
            verticalAlignment = Alignment.CenterVertically
        ) {
            Column {
                Text(
                    text = gymName.ifBlank { "Tu Gimnasio" },
                    fontSize = 20.sp,
                    fontWeight = FontWeight.Bold,
                    color = PrimaryTurquoise
                )
                Text(
                    text = "SISTEMA GYMCOPILOT",
                    fontSize = 10.sp,
                    fontWeight = FontWeight.Medium,
                    color = TextGray
                )
            }

            Surface(
                color = PrimaryTurquoise.copy(alpha = 0.15f),
                shape = RoundedCornerShape(20.dp),
                modifier = Modifier.clickable { onRoleClick() }
            ) {
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    modifier = Modifier.padding(horizontal = 12.dp, vertical = 6.dp)
                ) {
                    Box(
                        modifier = Modifier
                            .size(8.dp)
                            .clip(CircleShape)
                            .background(PrimaryTurquoise)
                    )
                    Spacer(modifier = Modifier.width(6.dp))
                    Text(
                        text = when (userRole) {
                            "admin" -> "ADMIN"
                            "profesor" -> "PROFESOR"
                            else -> "SOCIO"
                        },
                        fontSize = 11.sp,
                        fontWeight = FontWeight.Bold,
                        color = PrimaryTurquoise
                    )
                }
            }
        }
    }
}

@Composable
fun BroadcastMessageDisplay(message: String) {
    if (message.isNotBlank()) {
        Box(
            modifier = Modifier
                .fillMaxWidth()
                .background(Color.White.copy(alpha = 0.05f))
                .background(
                    brush = Brush.horizontalGradient(
                        0.0f to Color(0xFF8A2BE2).copy(alpha = 0.3f),
                        0.3f to Color.Transparent,
                        0.7f to Color.Transparent,
                        1.0f to Color.Red.copy(alpha = 0.3f)
                    )
                )
                .padding(vertical = 10.dp, horizontal = 20.dp),
            contentAlignment = Alignment.Center
        ) {
            Text(
                text = message,
                color = TextWhite,
                fontSize = 14.sp,
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

@Composable
fun RoleNavigationBar(
    userRole: String,
    selectedTab: Int,
    onTabSelected: (Int) -> Unit
) {
    val items = when (userRole) {
        "admin" -> listOf("Home", "Store", "Clientes", "Profesores", "Config")
        "profesor" -> listOf("Home", "Tienda", "Horarios", "Alumnos", "Rutinas", "Chat")
        else -> listOf("Home", "Tienda", "Clases", "Rutinas", "Chat")
    }

    NavigationBar(
        modifier = Modifier.height(56.dp),
        containerColor = Color(0xFF00151C),
        contentColor = TextWhite,
        windowInsets = WindowInsets(0, 0, 0, 0)
    ) {
        items.forEachIndexed { index, label ->
            val isSelected = selectedTab == index

            Box(
                modifier = Modifier
                    .weight(1f)
                    .fillMaxHeight()
                    .padding(horizontal = 2.dp, vertical = 4.dp)
                    .clip(RoundedCornerShape(6.dp))
                    .clickable { onTabSelected(index) },
                contentAlignment = Alignment.Center
            ) {
                Column(
                    horizontalAlignment = Alignment.CenterHorizontally,
                    verticalArrangement = Arrangement.Center
                ) {
                    Text(
                        text = when (label) {
                            "Home" -> "📊"
                            "Store", "Tienda" -> "🛒"
                            "Clientes", "Alumnos" -> "👥"
                            "Profesores" -> "👨‍🏫"
                            "Horarios", "Clases" -> "📅"
                            "Rutinas" -> "🏋️"
                            "Chat" -> "💬"
                            else -> "⚙️"
                        },
                        fontSize = 18.sp
                    )
                    Text(
                        text = label,
                        fontSize = 8.sp,
                        color = if (isSelected) PrimaryTurquoise else TextGray,
                        maxLines = 1
                    )
                }
            }
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
                        text = "Panel del Administrador",
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
                            title = "Socios Activos",
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
                        text = "Lista de Socios y Asistencia",
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
        1 -> StoreView(tab = 0)
        2 -> {
            LazyColumn(modifier = Modifier.fillMaxSize().padding(top = 16.dp)) {
                item {
                    Text(text = "Clientes / Socios del Gimnasio", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = TextWhite)
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
        3 -> {
            LazyColumn(modifier = Modifier.fillMaxSize().padding(top = 16.dp)) {
                item {
                    Text(text = "Profesores / Entrenadores", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = TextWhite)
                    Spacer(modifier = Modifier.height(12.dp))
                }
                item {
                    MemberCard("Prof. Gabriel Fernández", "Musculación & Personalizado", "ACTIVO", "Hoy 07:00 AM", true)
                    MemberCard("Prof. Laura Benítez", "Yoga & Mobility", "ACTIVO", "Hoy 09:30 AM", true)
                    MemberCard("Prof. Roberto Carlos", "Crossfit & Funcional", "ACTIVO", "Ayer 17:00 PM", true)
                }
            }
        }
        else -> {
            Column(modifier = Modifier.fillMaxSize().padding(top = 16.dp)) {
                Text(text = "Configuración del Gimnasio", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = TextWhite)
                Spacer(modifier = Modifier.height(16.dp))
                Card(
                    colors = CardDefaults.cardColors(containerColor = SurfaceColor),
                    shape = RoundedCornerShape(12.dp),
                    modifier = Modifier.fillMaxWidth().padding(vertical = 6.dp)
                ) {
                    Column(modifier = Modifier.padding(16.dp)) {
                        Text(text = "🌐 Red Wi-Fi para Asistencia Automática", fontWeight = FontWeight.Bold, color = PrimaryTurquoise)
                        Text(text = "SSID: GymCopilot_VIP_5G", color = TextWhite, fontSize = 14.sp)
                    }
                }
                Card(
                    colors = CardDefaults.cardColors(containerColor = SurfaceColor),
                    shape = RoundedCornerShape(12.dp),
                    modifier = Modifier.fillMaxWidth().padding(vertical = 6.dp)
                ) {
                    Column(modifier = Modifier.padding(16.dp)) {
                        Text(text = "☁️ Sincronización Google Sheets Ktor API", fontWeight = FontWeight.Bold, color = PrimaryTurquoise)
                        Text(text = "Estado: Conectado y Sincronizado", color = TextWhite, fontSize = 14.sp)
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
                    Text(text = "Panel de Entrenamiento - Profesor", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = TextWhite)
                    Spacer(modifier = Modifier.height(12.dp))
                }
                item {
                    ClassScheduleCard("Musculación Guiada", "Usted", "09:00 - 11:00", "18 Alumnos")
                    ClassScheduleCard("Crossfit Avanzado", "Usted", "17:00 - 18:30", "14 Alumnos")
                }
            }
        }
        1 -> StoreView(tab = 0)
        2 -> {
            LazyColumn(modifier = Modifier.fillMaxSize().padding(top = 16.dp)) {
                item {
                    Text(text = "Horarios de Clases", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = TextWhite)
                    Spacer(modifier = Modifier.height(12.dp))
                }
                item {
                    ClassScheduleCard("Crossfit Intensivo", "Prof. Roberto", "08:00 - 09:00", "15/15 Cupos")
                    ClassScheduleCard("Yoga & Mobility", "Prof. Laura", "10:00 - 11:00", "8/12 Cupos")
                    ClassScheduleCard("Spinning Power", "Prof. Marcos", "18:00 - 19:00", "20/20 Cupos")
                }
            }
        }
        3 -> {
            LazyColumn(modifier = Modifier.fillMaxSize().padding(top = 16.dp)) {
                item {
                    Text(text = "Mis Alumnos Asignados", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = TextWhite)
                    Spacer(modifier = Modifier.height(12.dp))
                }
                item {
                    MemberCard("Juan Carlos Pérez", "Clase 09:00", "PRESENTE", "Hoy 08:55 AM", true)
                    MemberCard("María Florencia Gómez", "Clase 09:00", "PRESENTE", "Hoy 09:02 AM", true)
                    MemberCard("Lucas Martínez", "Clase 09:00", "AUSENTE", "Sin registro", false)
                }
            }
        }
        4 -> {
            LazyColumn(modifier = Modifier.fillMaxSize().padding(top = 16.dp)) {
                item {
                    Text(text = "Gestión de Rutinas", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = TextWhite)
                    Spacer(modifier = Modifier.height(12.dp))
                }
                item {
                    RoutineCard("Sentadilla Libre con Barra", "4", "10", "90 seg", false) {}
                    RoutineCard("Press de Banca Plano", "4", "12", "90 seg", false) {}
                    RoutineCard("Remo con Barra T", "3", "12", "60 seg", false) {}
                }
            }
        }
        else -> {
            Column(modifier = Modifier.fillMaxSize().padding(top = 16.dp)) {
                Text(text = "Chat de Soporte y Alumnos", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = TextWhite)
                Spacer(modifier = Modifier.height(16.dp))
                Card(
                    colors = CardDefaults.cardColors(containerColor = SurfaceColor),
                    shape = RoundedCornerShape(12.dp),
                    modifier = Modifier.fillMaxWidth().padding(vertical = 6.dp)
                ) {
                    Column(modifier = Modifier.padding(16.dp)) {
                        Text(text = "💬 Chat con Alumnos", fontWeight = FontWeight.Bold, color = PrimaryTurquoise)
                        Text(text = "Sin mensajes pendientes", color = TextGray, fontSize = 14.sp)
                    }
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
        1 -> StoreView(tab = 0)
        2 -> {
            LazyColumn(modifier = Modifier.fillMaxSize().padding(top = 16.dp)) {
                item {
                    Text(text = "Horarios y Reserva de Clases", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = TextWhite)
                    Spacer(modifier = Modifier.height(12.dp))
                }
                item {
                    ClassScheduleCard("Crossfit Intensivo", "Prof. Roberto", "08:00 - 09:00", "15/15 Cupos")
                    ClassScheduleCard("Yoga & Mobility", "Prof. Laura", "10:00 - 11:00", "8/12 Cupos")
                    ClassScheduleCard("Spinning Power", "Prof. Marcos", "18:00 - 19:00", "20/20 Cupos")
                }
            }
        }
        3 -> {
            LazyColumn(modifier = Modifier.fillMaxSize().padding(top = 16.dp)) {
                item {
                    Text(text = "Mis Rutinas Guardadas", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = TextWhite)
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
        else -> {
            Column(modifier = Modifier.fillMaxSize().padding(top = 16.dp)) {
                Text(text = "Chat y Asistencia", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = TextWhite)
                Spacer(modifier = Modifier.height(16.dp))
                Card(
                    colors = CardDefaults.cardColors(containerColor = SurfaceColor),
                    shape = RoundedCornerShape(12.dp),
                    modifier = Modifier.fillMaxWidth().padding(vertical = 6.dp)
                ) {
                    Column(modifier = Modifier.padding(16.dp)) {
                        Text(text = "💬 Chat con el Gimnasio", fontWeight = FontWeight.Bold, color = PrimaryTurquoise)
                        Text(text = "Conectado", color = TextGray, fontSize = 14.sp)
                    }
                }
            }
        }
    }
}

@Composable
fun StoreView(tab: Int) {
    LazyColumn(modifier = Modifier.fillMaxSize().padding(top = 16.dp)) {
        item {
            Text(text = "Tienda & Productos del Gimnasio", fontSize = 20.sp, fontWeight = FontWeight.Bold, color = TextWhite)
            Spacer(modifier = Modifier.height(12.dp))
        }
        item {
            ProductCard("Whey Protein Isolate 1kg", "Suplementación", "$45.000")
            ProductCard("Creatina Monohidratada 300g", "Suplementación", "$38.000")
            ProductCard("Shaker Térmico GymCopilot", "Accesorios", "$12.500")
            ProductCard("Remera OverSize GymCopilot", "Indumentaria", "$22.000")
            ProductCard("Plan Pase Libre Mensual", "Membresía", "$35.000 / mes")
            ProductCard("Plan Trimestral Promocional", "Membresía", "$90.000 total")
        }
    }
}
