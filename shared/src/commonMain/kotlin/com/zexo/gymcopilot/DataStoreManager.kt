package com.zexo.gymcopilot

import com.zexo.gymcopilot.model.*
import kotlinx.coroutines.flow.Flow
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.asStateFlow

typealias Member = com.zexo.gymcopilot.model.Member
typealias Professor = com.zexo.gymcopilot.model.Professor
typealias Exercise = com.zexo.gymcopilot.model.Exercise
typealias Routine = com.zexo.gymcopilot.model.Routine
typealias ScheduleEntry = com.zexo.gymcopilot.model.ScheduleEntry
typealias ChatMessage = com.zexo.gymcopilot.model.ChatMessage
typealias PaymentRecord = com.zexo.gymcopilot.model.PaymentRecord
typealias Product = com.zexo.gymcopilot.model.Product
typealias SubscriptionPlan = com.zexo.gymcopilot.model.SubscriptionPlan

class DataStoreManager(context: Any? = null) {

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

    private val _linkedProfessorId = MutableStateFlow<String?>(null)
    fun getLinkedProfessorId(): Flow<String?> = _linkedProfessorId.asStateFlow()
    suspend fun setLinkedProfessorId(id: String) { _linkedProfessorId.value = id }

    private val _linkedMemberEmail = MutableStateFlow<String?>(null)
    fun getLinkedMemberEmail(): Flow<String?> = _linkedMemberEmail.asStateFlow()
    suspend fun setLinkedMemberEmail(email: String) { _linkedMemberEmail.value = email }

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

    private val _gymPhone = MutableStateFlow("")
    fun getGymPhone(): Flow<String> = _gymPhone.asStateFlow()
    suspend fun setGymPhone(phone: String) { _gymPhone.value = phone }

    private val _gymAddress = MutableStateFlow("")
    fun getGymAddress(): Flow<String> = _gymAddress.asStateFlow()
    suspend fun setGymAddress(addr: String) { _gymAddress.value = addr }

    private val _gymCity = MutableStateFlow("")
    fun getGymCity(): Flow<String> = _gymCity.asStateFlow()
    suspend fun setGymCity(city: String) { _gymCity.value = city }

    private val _gymPostalCode = MutableStateFlow("")
    fun getGymPostalCode(): Flow<String> = _gymPostalCode.asStateFlow()
    suspend fun setGymPostalCode(code: String) { _gymPostalCode.value = code }

    private val _gymCountry = MutableStateFlow("")
    fun getGymCountry(): Flow<String> = _gymCountry.asStateFlow()
    suspend fun setGymCountry(country: String) { _gymCountry.value = country }

    private val _gymBackgroundUri = MutableStateFlow<String?>(null)
    fun getGymBackgroundUri(): Flow<String?> = _gymBackgroundUri.asStateFlow()
    suspend fun setGymBackgroundUri(uri: String) { _gymBackgroundUri.value = uri }
    suspend fun clearGymBackgroundUri() { _gymBackgroundUri.value = null }

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
    suspend fun resetBackgroundColor() { _backgroundColor.value = null }

    private val _broadcastMessage = MutableStateFlow("Hoy abrimos a las 8:00 AM")
    fun getBroadcastMessage(): Flow<String> = _broadcastMessage.asStateFlow()
    suspend fun setBroadcastMessage(msg: String) { _broadcastMessage.value = msg }

    private val _gymIsOpen = MutableStateFlow(true)
    fun getGymIsOpen(): Flow<Boolean> = _gymIsOpen.asStateFlow()
    suspend fun setGymIsOpen(open: Boolean) { _gymIsOpen.value = open }

    private val _classInSessionManual = MutableStateFlow(false)
    fun getClassInSessionManual(): Flow<Boolean> = _classInSessionManual.asStateFlow()
    suspend fun setClassInSessionManual(inSession: Boolean) { _classInSessionManual.value = inSession }

    private val _assistantEnabled = MutableStateFlow(false)
    fun getAssistantEnabled(): Flow<Boolean> = _assistantEnabled.asStateFlow()
    suspend fun setAssistantEnabled(enabled: Boolean) { _assistantEnabled.value = enabled }

    private val _settingsTourSkinDismissed = MutableStateFlow(true)
    fun getSettingsTourSkinDismissed(): Flow<Boolean> = _settingsTourSkinDismissed.asStateFlow()
    suspend fun setSettingsTourSkinDismissed(d: Boolean) { _settingsTourSkinDismissed.value = d }

    private val _appearanceTourDismissed = MutableStateFlow(true)
    fun getAppearanceTourDismissed(): Flow<Boolean> = _appearanceTourDismissed.asStateFlow()
    suspend fun setAppearanceTourDismissed(d: Boolean) { _appearanceTourDismissed.value = d }

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

    private val _gymApiUrl = MutableStateFlow("")
    fun getGymApiUrl(): Flow<String> = _gymApiUrl.asStateFlow()
    suspend fun setGymApiUrl(url: String) { _gymApiUrl.value = url }

    private val _gymScriptId = MutableStateFlow("")
    fun getGymScriptId(): Flow<String> = _gymScriptId.asStateFlow()
    suspend fun setGymScriptId(id: String) { _gymScriptId.value = id }

    private val _googleAccessToken = MutableStateFlow("")
    fun getGoogleAccessToken(): Flow<String> = _googleAccessToken.asStateFlow()
    suspend fun setGoogleAccessToken(token: String) { _googleAccessToken.value = token }

    private val _authToken = MutableStateFlow<String?>("session_active")
    fun getAuthToken(): Flow<String?> = _authToken.asStateFlow()
    suspend fun setAuthToken(token: String) { _authToken.value = token }

    private val _appLockExpirationTime = MutableStateFlow(0L)
    fun getAppLockExpirationTime(): Flow<Long> = _appLockExpirationTime.asStateFlow()
    suspend fun setAppLockExpirationTime(t: Long) { _appLockExpirationTime.value = t }

    private val _gymWifiSsid = MutableStateFlow("")
    fun getGymWifiSsid(): Flow<String> = _gymWifiSsid.asStateFlow()
    suspend fun setGymWifiSsid(ssid: String) { _gymWifiSsid.value = ssid }

    private val _gymWifiSsid2 = MutableStateFlow("")
    fun getGymWifiSsid2(): Flow<String> = _gymWifiSsid2.asStateFlow()
    suspend fun setGymWifiSsid2(ssid: String) { _gymWifiSsid2.value = ssid }

    private val _gymWifiSsid3 = MutableStateFlow("")
    fun getGymWifiSsid3(): Flow<String> = _gymWifiSsid3.asStateFlow()
    suspend fun setGymWifiSsid3(ssid: String) { _gymWifiSsid3.value = ssid }

    private val _lastWifiCheckinDate = MutableStateFlow("")
    fun getLastWifiCheckinDate(): Flow<String> = _lastWifiCheckinDate.asStateFlow()
    suspend fun setLastWifiCheckinDate(date: String) { _lastWifiCheckinDate.value = date }

    private val _shortcutCreated = MutableStateFlow(false)
    fun isShortcutCreated(): Flow<Boolean> = _shortcutCreated.asStateFlow()
    suspend fun setShortcutCreated(c: Boolean) { _shortcutCreated.value = c }

    private val _storeCategories = MutableStateFlow<Set<String>>(
        setOf("EQUIPMENT", "CLOTHING", "NUTRITION", "WELLNESS", "DIGITAL", "TECH")
    )
    fun getStoreCategories(): Flow<Set<String>> = _storeCategories.asStateFlow()
    suspend fun setStoreCategories(cats: Set<String>) { _storeCategories.value = cats }

    private val _customCategoryIds = MutableStateFlow<Set<String>>(emptySet())
    fun getCustomCategoryIds(): Flow<Set<String>> = _customCategoryIds.asStateFlow()
    suspend fun setCustomCategoryIds(ids: Set<String>) { _customCategoryIds.value = ids }

    private val _lastSelectedCategory = MutableStateFlow<String?>("EQUIPMENT")
    fun getLastSelectedCategory(): Flow<String?> = _lastSelectedCategory.asStateFlow()
    suspend fun setLastSelectedCategory(id: String) { _lastSelectedCategory.value = id }

    private val _preferredContactMethod = MutableStateFlow("whatsapp")
    fun getPreferredContactMethod(): Flow<String> = _preferredContactMethod.asStateFlow()
    suspend fun setPreferredContactMethod(m: String) { _preferredContactMethod.value = m }

    private val _contactPhone = MutableStateFlow("")
    fun getContactPhone(): Flow<String> = _contactPhone.asStateFlow()
    suspend fun setContactPhone(phone: String) { _contactPhone.value = phone }

    private val _storeAnnouncement = MutableStateFlow("🔥 ¡Ofertas relámpago esta semana en la tienda!")
    fun getStoreAnnouncement(): Flow<String> = _storeAnnouncement.asStateFlow()
    suspend fun setStoreAnnouncement(msg: String) { _storeAnnouncement.value = msg }

    private val _cartItems = MutableStateFlow<List<Product>>(emptyList())
    fun getCartItems(): Flow<List<Product>> = _cartItems.asStateFlow()
    suspend fun addToCart(p: Product) { _cartItems.value = _cartItems.value + p }
    suspend fun removeFromCart(id: String) { _cartItems.value = _cartItems.value.filter { it.id != id } }
    suspend fun clearCart() { _cartItems.value = emptyList() }

    private val _lastReadTimestamps = MutableStateFlow<Map<String, Long>>(emptyMap())
    fun getLastReadTimestamp(key: String): Flow<Long> = MutableStateFlow(_lastReadTimestamps.value[key] ?: 0L).asStateFlow()
    suspend fun setLastReadTimestamp(key: String, ts: Long) {
        _lastReadTimestamps.value = _lastReadTimestamps.value + (key to ts)
    }

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

    private val _categoryUriMap = MutableStateFlow<Map<String, String>>(emptyMap())
    fun getCategoryUri(id: String): Flow<String?> = MutableStateFlow(_categoryUriMap.value[id]).asStateFlow()
    suspend fun setCategoryUri(id: String, uri: String) {
        _categoryUriMap.value = _categoryUriMap.value + (id to uri)
    }

    suspend fun resetCategory(id: String) {
        _categoryNameMap.value = _categoryNameMap.value - id
        _categoryColorMap.value = _categoryColorMap.value - id
        _categoryUriMap.value = _categoryUriMap.value - id
    }

    private val _chatCacheMap = MutableStateFlow<Map<String, List<ChatMessage>>>(emptyMap())
    fun getChatCache(chatKey: String): Flow<List<ChatMessage>> = MutableStateFlow(_chatCacheMap.value[chatKey] ?: emptyList()).asStateFlow()
    suspend fun saveChatCache(chatKey: String, messages: List<ChatMessage>) {
        _chatCacheMap.value = _chatCacheMap.value + (chatKey to messages.filter { !it.isPending })
    }
    suspend fun clearChatCache(chatKey: String) {
        _chatCacheMap.value = _chatCacheMap.value - chatKey
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
    suspend fun saveMembers(members: List<Member>) { _members.value = members }

    private val _professors = MutableStateFlow<List<Professor>>(
        listOf(
            Professor("1", "Gabriel", "Fernández", "gabriel@gymcopilot.com", specialty = "Musculación & Personalizado"),
            Professor("2", "Laura", "Benítez", "laura@gymcopilot.com", specialty = "Yoga & Mobility"),
            Professor("3", "Roberto", "Carlos", "roberto@gymcopilot.com", specialty = "Crossfit & Funcional")
        )
    )
    fun getProfessors(): Flow<List<Professor>> = _professors.asStateFlow()
    suspend fun updateProfessor(prof: Professor) {
        _professors.value = _professors.value.map { if (it.id == prof.id) prof else it }
    }
    suspend fun removeProfessor(id: String) { _professors.value = _professors.value.filter { it.id != id } }
    suspend fun saveProfessors(profs: List<Professor>) { _professors.value = profs }

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
    suspend fun addProduct(product: Product) { _products.value = _products.value + product }
    suspend fun updateProduct(product: Product) { _products.value = _products.value.map { if (it.id == product.id) product else it } }
    suspend fun deleteProduct(id: String) { _products.value = _products.value.filter { it.id != id } }
    suspend fun saveAllProducts(products: List<Product>) { _products.value = products }

    private val _routines = MutableStateFlow<List<Routine>>(
        listOf(
            Routine("1", "Rutina A - Hipertrofia Pecho & Tríceps", "Enfoque en fuerza e hipertrofia", category = "Hipertrofia", status = "Activa"),
            Routine("2", "Rutina B - Piernas & Glúteos", "Fuerza de tren inferior", category = "Fuerza", status = "Activa")
        )
    )
    fun getRoutines(): Flow<List<Routine>> = _routines.asStateFlow()
    suspend fun addRoutine(routine: Routine) { _routines.value = _routines.value + routine }
    suspend fun updateRoutine(routine: Routine) {
        _routines.value = _routines.value.map { if (it.id == routine.id) routine else it }
    }
    suspend fun deleteRoutine(id: String) { _routines.value = _routines.value.filter { it.id != id } }
    suspend fun saveRoutines(routines: List<Routine>) { _routines.value = routines }

    private val _subscriptionPlans = MutableStateFlow<List<SubscriptionPlan>>(
        listOf(
            SubscriptionPlan("1", "Pase Libre Gold", 35000.0, 30, "Acceso ilimitado a todas las instalaciones"),
            SubscriptionPlan("2", "Musculación 3x", 25000.0, 30, "Acceso 3 veces por semana")
        )
    )
    fun getSubscriptionPlans(): Flow<List<SubscriptionPlan>> = _subscriptionPlans.asStateFlow()
    suspend fun saveSubscriptionPlans(plans: List<SubscriptionPlan>) { _subscriptionPlans.value = plans }

    private val _paymentRecords = MutableStateFlow<List<PaymentRecord>>(emptyList())
    fun getPaymentRecords(): Flow<List<PaymentRecord>> = _paymentRecords.asStateFlow()
    suspend fun addPaymentRecord(record: PaymentRecord) { _paymentRecords.value = _paymentRecords.value + record }

    private val _professorSchedules = MutableStateFlow<Map<String, List<ScheduleEntry>>>(emptyMap())
    fun getProfessorSchedules(): Flow<Map<String, List<ScheduleEntry>>> = _professorSchedules.asStateFlow()
    suspend fun saveProfessorSchedule(professorId: String, schedules: List<ScheduleEntry>) {
        _professorSchedules.value = _professorSchedules.value + (professorId to schedules)
    }
    suspend fun saveAllSchedules(schedules: Map<String, List<ScheduleEntry>>) {
        _professorSchedules.value = schedules
    }
}
