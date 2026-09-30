package com.zexo.gymcopilot

import com.zexo.gymcopilot.model.*
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow

class DataStoreManager {

    private val _appLanguage = MutableStateFlow("Español")
    fun getAppLanguage(): Flow<String> = _appLanguage.asStateFlow()
    suspend fun setAppLanguage(lang: String) { _appLanguage.value = lang }

    private val _appCurrency = MutableStateFlow("Peso Argentino")
    fun getAppCurrency(): Flow<String> = _appCurrency.asStateFlow()
    suspend fun setAppCurrency(curr: String) { _appCurrency.value = curr }

    private val _memberDesignation = MutableStateFlow("Alumno")
    fun getMemberDesignation(): Flow<String> = _memberDesignation.asStateFlow()
    suspend fun setMemberDesignation(des: String) { _memberDesignation.value = des }

    private val _userRole = MutableStateFlow<String?>("admin")
    fun getUserRole(): Flow<String?> = _userRole.asStateFlow()
    suspend fun setUserRole(role: String) { _userRole.value = role }

    private val _userName = MutableStateFlow("Admin")
    fun getUserName(): Flow<String> = _userName.asStateFlow()
    suspend fun setUserName(name: String) { _userName.value = name }

    private val _userEmail = MutableStateFlow("admin@gymcopilot.com")
    fun getUserEmail(): Flow<String> = _userEmail.asStateFlow()
    suspend fun setUserEmail(email: String) { _userEmail.value = email }

    private val _userPhone = MutableStateFlow("")
    fun getUserPhone(): Flow<String> = _userPhone.asStateFlow()
    suspend fun setUserPhone(phone: String) { _userPhone.value = phone }

    private val _userWeight = MutableStateFlow("")
    fun getUserWeight(): Flow<String> = _userWeight.asStateFlow()
    suspend fun setUserWeight(weight: String) { _userWeight.value = weight }

    private val _userHeight = MutableStateFlow("")
    fun getUserHeight(): Flow<String> = _userHeight.asStateFlow()
    suspend fun setUserHeight(height: String) { _userHeight.value = height }

    private val _userAddress = MutableStateFlow("")
    fun getUserAddress(): Flow<String> = _userAddress.asStateFlow()
    suspend fun setUserAddress(address: String) { _userAddress.value = address }

    private val _userPhotoUri = MutableStateFlow<String?>(null)
    fun getUserPhotoUri(): Flow<String?> = _userPhotoUri.asStateFlow()
    suspend fun setUserPhotoUri(uri: String) { _userPhotoUri.value = uri }

    private val _gymName = MutableStateFlow("Tu Gimnasio")
    fun getGymName(): Flow<String> = _gymName.asStateFlow()
    suspend fun setGymName(name: String) { _gymName.value = name }

    private val _gymLogoUri = MutableStateFlow<String?>(null)
    fun getGymLogoUri(): Flow<String?> = _gymLogoUri.asStateFlow()
    suspend fun setGymLogoUri(uri: String) { _gymLogoUri.value = uri }

    private val _gymNameFont = MutableStateFlow("Default")
    fun getGymNameFont(): Flow<String> = _gymNameFont.asStateFlow()
    suspend fun setGymNameFont(font: String) { _gymNameFont.value = font }

    private val _showLogoBorder = MutableStateFlow(true)
    fun getShowLogoBorder(): Flow<Boolean> = _showLogoBorder.asStateFlow()
    suspend fun setShowLogoBorder(show: Boolean) { _showLogoBorder.value = show }

    private val _buttonColor = MutableStateFlow<Int?>(null)
    fun getButtonColor(): Flow<Int?> = _buttonColor.asStateFlow()
    suspend fun setButtonColor(color: Int) { _buttonColor.value = color }

    private val _buttonStyle = MutableStateFlow(1)
    fun getButtonStyle(): Flow<Int> = _buttonStyle.asStateFlow()
    suspend fun setButtonStyle(style: Int) { _buttonStyle.value = style }

    private val _backgroundColor = MutableStateFlow<Int?>(null)
    fun getBackgroundColor(): Flow<Int?> = _backgroundColor.asStateFlow()
    suspend fun setBackgroundColor(color: Int) { _backgroundColor.value = color }

    private val _broadcastMessage = MutableStateFlow("Hoy abrimos a las 8:00 AM")
    fun getBroadcastMessage(): Flow<String> = _broadcastMessage.asStateFlow()
    suspend fun setBroadcastMessage(msg: String) { _broadcastMessage.value = msg }

    private val _gymIsOpen = MutableStateFlow(true)
    fun getGymIsOpen(): Flow<Boolean> = _gymIsOpen.asStateFlow()
    suspend fun setGymIsOpen(open: Boolean) { _gymIsOpen.value = open }

    private val _assistantEnabled = MutableStateFlow(false)
    fun getAssistantEnabled(): Flow<Boolean> = _assistantEnabled.asStateFlow()
    suspend fun setAssistantEnabled(enabled: Boolean) { _assistantEnabled.value = enabled }

    private val _gymApiUrl = MutableStateFlow("")
    fun getGymApiUrl(): Flow<String> = _gymApiUrl.asStateFlow()
    suspend fun setGymApiUrl(url: String) { _gymApiUrl.value = url }

    private val _googleAccessToken = MutableStateFlow("")
    fun getGoogleAccessToken(): Flow<String> = _googleAccessToken.asStateFlow()
    suspend fun setGoogleAccessToken(token: String) { _googleAccessToken.value = token }

    private val _authToken = MutableStateFlow<String?>("session_active")
    fun getAuthToken(): Flow<String?> = _authToken.asStateFlow()
    suspend fun setAuthToken(token: String) { _authToken.value = token }

    private val _welcomeDismissed = MutableStateFlow(true)
    fun getWelcomeDismissed(): Flow<Boolean> = _welcomeDismissed.asStateFlow()
    suspend fun setWelcomeDismissed(d: Boolean) { _welcomeDismissed.value = d }

    private val _cloudHelpDismissed = MutableStateFlow(true)
    fun getCloudHelpDismissed(): Flow<Boolean> = _cloudHelpDismissed.asStateFlow()
    suspend fun setCloudHelpDismissed(d: Boolean) { _cloudHelpDismissed.value = d }

    private val _step2HelpDismissed = MutableStateFlow(true)
    fun getStep2HelpDismissed(): Flow<Boolean> = _step2HelpDismissed.asStateFlow()
    suspend fun setStep2HelpDismissed(d: Boolean) { _step2HelpDismissed.value = d }

    private val _delayHelpDismissed = MutableStateFlow(true)
    fun getDelayHelpDismissed(): Flow<Boolean> = _delayHelpDismissed.asStateFlow()
    suspend fun setDelayHelpDismissed(d: Boolean) { _delayHelpDismissed.value = d }

    private val _readyDismissed = MutableStateFlow(true)
    fun getReadyDismissed(): Flow<Boolean> = _readyDismissed.asStateFlow()
    suspend fun setReadyDismissed(d: Boolean) { _readyDismissed.value = d }

    private val _dashboardTourStep1Dismissed = MutableStateFlow(true)
    fun getDashboardTourStep1Dismissed(): Flow<Boolean> = _dashboardTourStep1Dismissed.asStateFlow()
    suspend fun setDashboardTourStep1Dismissed(d: Boolean) { _dashboardTourStep1Dismissed.value = d }

    private val _dashboardTourStep1CentralDismissed = MutableStateFlow(true)
    fun getDashboardTourStep1CentralDismissed(): Flow<Boolean> = _dashboardTourStep1CentralDismissed.asStateFlow()
    suspend fun setDashboardTourStep1CentralDismissed(d: Boolean) { _dashboardTourStep1CentralDismissed.value = d }

    private val _dashboardTourBroadcastDismissed = MutableStateFlow(true)
    fun getDashboardTourBroadcastDismissed(): Flow<Boolean> = _dashboardTourBroadcastDismissed.asStateFlow()
    suspend fun setDashboardTourBroadcastDismissed(d: Boolean) { _dashboardTourBroadcastDismissed.value = d }

    private val _dashboardTourPlansDismissed = MutableStateFlow(true)
    fun getDashboardTourPlansDismissed(): Flow<Boolean> = _dashboardTourPlansDismissed.asStateFlow()
    suspend fun setDashboardTourPlansDismissed(d: Boolean) { _dashboardTourPlansDismissed.value = d }

    private val _dashboardTourIncomeDismissed = MutableStateFlow(true)
    fun getDashboardTourIncomeDismissed(): Flow<Boolean> = _dashboardTourIncomeDismissed.asStateFlow()
    suspend fun setDashboardTourIncomeDismissed(d: Boolean) { _dashboardTourIncomeDismissed.value = d }

    private val _dashboardTourMetricsDismissed = MutableStateFlow(true)
    fun getDashboardTourMetricsDismissed(): Flow<Boolean> = _dashboardTourMetricsDismissed.asStateFlow()
    suspend fun setDashboardTourMetricsDismissed(d: Boolean) { _dashboardTourMetricsDismissed.value = d }

    private val _dashboardTourScheduleDismissed = MutableStateFlow(true)
    fun getDashboardTourScheduleDismissed(): Flow<Boolean> = _dashboardTourScheduleDismissed.asStateFlow()
    suspend fun setDashboardTourScheduleDismissed(d: Boolean) { _dashboardTourScheduleDismissed.value = d }

    private val _dashboardTourQrDismissed = MutableStateFlow(true)
    fun getDashboardTourQrDismissed(): Flow<Boolean> = _dashboardTourQrDismissed.asStateFlow()
    suspend fun setDashboardTourQrDismissed(d: Boolean) { _dashboardTourQrDismissed.value = d }

    private val _dashboardTourProfessorsDismissed = MutableStateFlow(true)
    fun getDashboardTourProfessorsDismissed(): Flow<Boolean> = _dashboardTourProfessorsDismissed.asStateFlow()
    suspend fun setDashboardTourProfessorsDismissed(d: Boolean) { _dashboardTourProfessorsDismissed.value = d }

    private val _dashboardTourMembersNavDismissed = MutableStateFlow(true)
    fun getDashboardTourMembersNavDismissed(): Flow<Boolean> = _dashboardTourMembersNavDismissed.asStateFlow()
    suspend fun setDashboardTourMembersNavDismissed(d: Boolean) { _dashboardTourMembersNavDismissed.value = d }

    private val _dashboardTourStoreNavDismissed = MutableStateFlow(true)
    fun getDashboardTourStoreNavDismissed(): Flow<Boolean> = _dashboardTourStoreNavDismissed.asStateFlow()
    suspend fun setDashboardTourStoreNavDismissed(d: Boolean) { _dashboardTourStoreNavDismissed.value = d }

    private val _shortcutCreated = MutableStateFlow(false)
    fun isShortcutCreated(): Flow<Boolean> = _shortcutCreated.asStateFlow()
    suspend fun setShortcutCreated(c: Boolean) { _shortcutCreated.value = c }

    private val _lastShortcutName = MutableStateFlow("")
    fun getLastShortcutName(): Flow<String> = _lastShortcutName.asStateFlow()
    suspend fun setLastShortcutName(n: String) { _lastShortcutName.value = n }

    private val _lastShortcutLogoUri = MutableStateFlow("")
    fun getLastShortcutLogoUri(): Flow<String> = _lastShortcutLogoUri.asStateFlow()
    suspend fun setLastShortcutLogoUri(u: String) { _lastShortcutLogoUri.value = u }

    private val _appLockExpirationTime = MutableStateFlow(0L)
    fun getAppLockExpirationTime(): Flow<Long> = _appLockExpirationTime.asStateFlow()
    suspend fun setAppLockExpirationTime(t: Long) { _appLockExpirationTime.value = t }

    private val _categoryNameMap = MutableStateFlow<Map<String, String>>(emptyMap())
    fun getCategoryName(id: String): Flow<String?> = MutableStateFlow(_categoryNameMap.value[id]).asStateFlow()
    suspend fun setCategoryName(id: String, name: String) {
        _categoryNameMap.value = _categoryNameMap.value + (id to name)
    }

    private val _categoryColorMap = MutableStateFlow<Map<String, Int>>(emptyMap())
    fun getCategoryColor(id: String): Flow<Int?> = MutableStateFlow(_categoryColorMap.value[id]).asStateFlow()
    suspend fun setCategoryColor(id: String, color: Int) {
        _categoryColorMap.value = _categoryColorMap.value + (id to color)
    }

    private val _members = MutableStateFlow<List<Member>>(
        listOf(
            Member("Juan Carlos", "Pérez", "juan.perez@email.com", planType = "Pase Libre Gold", membershipStatus = "ACTIVO", attendanceCount = 12),
            Member("María Florencia", "Gómez", "maria.gomez@email.com", planType = "Musculación 3x", membershipStatus = "ACTIVO", attendanceCount = 8),
            Member("Carlos Alberto", "López", "carlos.lopez@email.com", planType = "Pase Libre", membershipStatus = "DEUDOR", attendanceCount = 3),
            Member("Ana Laura", "Torres", "ana.torres@email.com", planType = "Crossfit VIP", membershipStatus = "ACTIVO", attendanceCount = 15)
        )
    )
    fun getMembers(): Flow<List<Member>> = _members.asStateFlow()
    suspend fun updateMember(member: Member) {
        _members.value = _members.value.map { if (it.email == member.email) member else it }
    }
    suspend fun addMember(member: Member) { _members.value = _members.value + member }
    suspend fun removeMember(email: String) { _members.value = _members.value.filter { it.email != email } }

    private val _professors = MutableStateFlow<List<Professor>>(
        listOf(
            Professor("1", "Gabriel", "Fernández", "gabriel@gymcopilot.com", specialty = "Musculación & Personalizado"),
            Professor("2", "Laura", "Benítez", "laura@gymcopilot.com", specialty = "Yoga & Mobility"),
            Professor("3", "Roberto", "Carlos", "roberto@gymcopilot.com", specialty = "Crossfit & Funcional")
        )
    )
    fun getProfessors(): Flow<List<Professor>> = _professors.asStateFlow()

    private val _products = MutableStateFlow<List<Product>>(
        listOf(
            Product("1", "WHEY PROTEIN ISOLATE 1KG", 55000.0, "NUTRITION", description = "WHEY, la proteína más utilizada por los deportistas de vanguardia", bannerText = "Oferta relámpago"),
            Product("2", "CREATINA MONOHIDRATADA 300G", 38000.0, "NUTRITION", description = "Creatina purificada para aumento de fuerza y resistencia", bannerText = "Stock limitado"),
            Product("3", "BARRA PROTEÍCA ENA", 3000.0, "NUTRITION", description = "Barra rica en proteínas y baja en azúcares", bannerText = "2x1"),
            Product("4", "SHAKER TÉRMICO GYMCOPILOT", 12500.0, "EQUIPMENT", description = "Vaso mezclador térmico reinforced", bannerText = "Unidades contadas"),
            Product("5", "REMERA OVERSIZE GYMCOPILOT", 22000.0, "CLOTHING", description = "Remera de entrenamiento de algodón premium", bannerText = "Edición limitada")
        )
    )
    fun getProducts(): Flow<List<Product>> = _products.asStateFlow()

    private val _routines = MutableStateFlow<List<Routine>>(
        listOf(
            Routine("1", "Rutina A - Hipertrofia Pecho & Tríceps", "Enfoque en fuerza e hipertrofia", category = "Hipertrofia", status = "Activa"),
            Routine("2", "Rutina B - Piernas & Glúteos", "Fuerza de tren inferior", category = "Fuerza", status = "Activa")
        )
    )
    fun getRoutines(): Flow<List<Routine>> = _routines.asStateFlow()

    private val _paymentRecords = MutableStateFlow<List<PaymentRecord>>(emptyList())
    fun getPaymentRecords(): Flow<List<PaymentRecord>> = _paymentRecords.asStateFlow()
}
