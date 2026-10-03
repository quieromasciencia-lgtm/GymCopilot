package com.zexo.gymcopilot.ui

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.*
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.zexo.gymcopilot.DataStoreManager
import com.zexo.gymcopilot.ui.screens.*
import com.zexo.gymcopilot.ui.theme.*
import kotlinx.coroutines.delay

enum class AppScreenState {
    SPLASH,
    LOGIN,
    ADMIN_DASHBOARD,
    MEMBER_DASHBOARD,
    PROFESSOR_DASHBOARD,
    MEMBERS,
    STORE,
    PUBLIC_STORE,
    ROUTINES
}

@Composable
fun SharedGymCopilotApp(
    initialRole: String = "admin",
    gymName: String = "Tu Gimnasio"
) {
    val dataStoreManager = remember { DataStoreManager() }
    var screenState by remember { mutableStateOf(AppScreenState.SPLASH) }
    var currentRole by remember { mutableStateOf(initialRole.lowercase()) }
    var selectedCategoryId by remember { mutableStateOf("EQUIPMENT") }

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
                    LoginScreen(
                        onRoleSelected = { selectedRole ->
                            currentRole = selectedRole
                            screenState = when (selectedRole) {
                                "admin" -> AppScreenState.ADMIN_DASHBOARD
                                "professor", "profesor" -> AppScreenState.PROFESSOR_DASHBOARD
                                else -> AppScreenState.MEMBER_DASHBOARD
                            }
                        },
                        dataStoreManager = dataStoreManager
                    )
                }
                AppScreenState.ADMIN_DASHBOARD -> {
                    AdminDashboardScreen(
                        onAppSettingsClick = { screenState = AppScreenState.LOGIN },
                        onStoreClick = { screenState = AppScreenState.STORE },
                        onMembersClick = { screenState = AppScreenState.MEMBERS },
                        onProfessorsClick = { screenState = AppScreenState.MEMBERS },
                        onScheduleClick = { screenState = AppScreenState.ROUTINES },
                        dataStoreManager = dataStoreManager
                    )
                }
                AppScreenState.PROFESSOR_DASHBOARD -> {
                    ProfessorDashboardScreen(
                        onHomeClick = { screenState = AppScreenState.PROFESSOR_DASHBOARD },
                        onStoreClick = { screenState = AppScreenState.PUBLIC_STORE },
                        onMembersClick = { screenState = AppScreenState.MEMBERS },
                        onRoutinesClick = { screenState = AppScreenState.ROUTINES },
                        onProfileClick = { screenState = AppScreenState.LOGIN },
                        dataStoreManager = dataStoreManager
                    )
                }
                AppScreenState.MEMBER_DASHBOARD -> {
                    MemberDashboardScreen(
                        onHomeClick = { screenState = AppScreenState.MEMBER_DASHBOARD },
                        onStoreClick = { screenState = AppScreenState.PUBLIC_STORE },
                        onRoutinesClick = { screenState = AppScreenState.ROUTINES },
                        onProfileClick = { screenState = AppScreenState.LOGIN },
                        dataStoreManager = dataStoreManager
                    )
                }
                AppScreenState.MEMBERS -> {
                    MembersScreen(
                        onBack = {
                            screenState = when (currentRole) {
                                "admin" -> AppScreenState.ADMIN_DASHBOARD
                                "professor", "profesor" -> AppScreenState.PROFESSOR_DASHBOARD
                                else -> AppScreenState.MEMBER_DASHBOARD
                            }
                        },
                        onHomeClick = {
                            screenState = when (currentRole) {
                                "admin" -> AppScreenState.ADMIN_DASHBOARD
                                "professor", "profesor" -> AppScreenState.PROFESSOR_DASHBOARD
                                else -> AppScreenState.MEMBER_DASHBOARD
                            }
                        },
                        onStoreClick = { screenState = AppScreenState.STORE },
                        onSettingsClick = { screenState = AppScreenState.LOGIN },
                        isAdmin = currentRole == "admin",
                        isProfessor = currentRole == "professor" || currentRole == "profesor",
                        dataStoreManager = dataStoreManager
                    )
                }
                AppScreenState.STORE -> {
                    StoreScreen(
                        onBack = { screenState = AppScreenState.ADMIN_DASHBOARD },
                        onHomeClick = { screenState = AppScreenState.ADMIN_DASHBOARD },
                        onStoreClick = { screenState = AppScreenState.STORE },
                        onMembersClick = { screenState = AppScreenState.MEMBERS },
                        onViewPublicStoreClick = { screenState = AppScreenState.PUBLIC_STORE },
                        onCategoryClick = { catId ->
                            selectedCategoryId = catId
                            screenState = AppScreenState.PUBLIC_STORE
                        },
                        dataStoreManager = dataStoreManager
                    )
                }
                AppScreenState.PUBLIC_STORE -> {
                    PublicStoreScreen(
                        onBack = {
                            screenState = when (currentRole) {
                                "admin" -> AppScreenState.STORE
                                "professor", "profesor" -> AppScreenState.PROFESSOR_DASHBOARD
                                else -> AppScreenState.MEMBER_DASHBOARD
                            }
                        },
                        onHomeClick = {
                            screenState = when (currentRole) {
                                "admin" -> AppScreenState.ADMIN_DASHBOARD
                                "professor", "profesor" -> AppScreenState.PROFESSOR_DASHBOARD
                                else -> AppScreenState.MEMBER_DASHBOARD
                            }
                        },
                        onStoreClick = {
                            screenState = if (currentRole == "admin") AppScreenState.STORE else AppScreenState.PUBLIC_STORE
                        },
                        onCategoryClick = { catId -> selectedCategoryId = catId },
                        isMember = currentRole == "member",
                        isProfessor = currentRole == "professor" || currentRole == "profesor",
                        dataStoreManager = dataStoreManager
                    )
                }
                AppScreenState.ROUTINES -> {
                    RoutineDashboardScreen(
                        onBack = {
                            screenState = when (currentRole) {
                                "admin" -> AppScreenState.ADMIN_DASHBOARD
                                "professor", "profesor" -> AppScreenState.PROFESSOR_DASHBOARD
                                else -> AppScreenState.MEMBER_DASHBOARD
                            }
                        },
                        onHomeClick = {
                            screenState = when (currentRole) {
                                "admin" -> AppScreenState.ADMIN_DASHBOARD
                                "professor", "profesor" -> AppScreenState.PROFESSOR_DASHBOARD
                                else -> AppScreenState.MEMBER_DASHBOARD
                            }
                        },
                        onStoreClick = { screenState = AppScreenState.PUBLIC_STORE },
                        dataStoreManager = dataStoreManager
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
        delay(2000)
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
                shape = androidx.compose.foundation.shape.RoundedCornerShape(24.dp)
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
