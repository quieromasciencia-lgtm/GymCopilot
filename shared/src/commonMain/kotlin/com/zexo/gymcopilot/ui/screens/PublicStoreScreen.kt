package com.zexo.gymcopilot.ui.screens

import androidx.compose.animation.*
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.filled.Close
import androidx.compose.material.icons.filled.Search
import androidx.compose.material.icons.filled.ShoppingCart
import androidx.compose.material3.*
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.focus.FocusRequester
import androidx.compose.ui.focus.focusRequester
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.luminance
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.zexo.gymcopilot.DataStoreManager
import com.zexo.gymcopilot.model.Product
import com.zexo.gymcopilot.ui.theme.PrimaryTurquoise
import kotlinx.coroutines.delay

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun PublicStoreScreen(
    onBack: () -> Unit = {},
    onCategoryClick: (String) -> Unit = {},
    onCartClick: () -> Unit = {},
    onHomeClick: () -> Unit = {},
    onStoreClick: () -> Unit = {},
    onClassesClick: () -> Unit = {},
    onScheduleClick: () -> Unit = {},
    onRoutinesClick: () -> Unit = {},
    onChatClick: () -> Unit = {},
    onMembersClick: () -> Unit = {},
    onProfessorsClick: () -> Unit = {},
    onSettingsClick: () -> Unit = {},
    isMember: Boolean = false,
    isProfessor: Boolean = false,
    dataStoreManager: DataStoreManager = remember { DataStoreManager() }
) {
    val appLanguage by dataStoreManager.getAppLanguage().collectAsState(initial = "Español")
    val selectedCategoryIds by dataStoreManager.getStoreCategories().collectAsState(initial = emptySet())
    val customCategoryIds by dataStoreManager.getCustomCategoryIds().collectAsState(initial = emptySet())
    val gymName by dataStoreManager.getGymName().collectAsState(initial = "")
    val storeAnnouncement by dataStoreManager.getStoreAnnouncement().collectAsState(initial = "")

    var isSearchVisible by remember { mutableStateOf(false) }
    var searchQuery by remember { mutableStateOf("") }
    val focusRequester = remember { FocusRequester() }

    LaunchedEffect(isSearchVisible) {
        if (isSearchVisible) {
            delay(300)
            focusRequester.requestFocus()
        }
    }

    val savedBtnColor by dataStoreManager.getButtonColor().collectAsState(initial = null)
    val appAccentColor = if (savedBtnColor != null) Color(savedBtnColor!!) else PrimaryTurquoise
    val contentColor = if (appAccentColor.luminance() > 0.5f) Color.Black else Color.White
    val cartItems by dataStoreManager.getCartItems().collectAsState(initial = emptyList())

    val allActiveCategoryIds = remember(selectedCategoryIds, customCategoryIds) {
        val fixed = GymCategory.entries.filter { it.id in selectedCategoryIds }.map { it.id }
        val custom = customCategoryIds.filter { it in selectedCategoryIds }
        (fixed + custom).distinct()
    }

    val t = remember(appLanguage) {
        when (appLanguage) {
            "Español" -> mapOf("store" to "TIENDA", "search" to "Buscar categoría...")
            else -> mapOf("store" to "STORE", "search" to "Search category...")
        }
    }

    Surface(modifier = Modifier.fillMaxSize(), color = Color.White) {
        Scaffold(
            topBar = {
                CenterAlignedTopAppBar(
                    title = {
                        Column(horizontalAlignment = Alignment.CenterHorizontally) {
                            Text(text = t["store"] ?: "STORE", color = contentColor, fontSize = 24.sp, fontWeight = FontWeight.Black)
                            Text(text = gymName.ifBlank { "GymCopilot" }, color = contentColor.copy(alpha = 0.8f), fontSize = 17.sp, fontWeight = FontWeight.ExtraBold, textAlign = TextAlign.Center)
                        }
                    },
                    navigationIcon = {
                        IconButton(onClick = onBack) {
                            Icon(Icons.AutoMirrored.Filled.ArrowBack, contentDescription = "Back", tint = contentColor)
                        }
                    },
                    actions = {
                        IconButton(onClick = {
                            isSearchVisible = !isSearchVisible
                            if (!isSearchVisible) searchQuery = ""
                        }) {
                            Icon(if (isSearchVisible) Icons.Default.Close else Icons.Default.Search, null, tint = contentColor)
                        }
                        BadgedBox(
                            badge = {
                                if (cartItems.isNotEmpty()) {
                                    Badge(containerColor = Color.Red, contentColor = Color.White) {
                                        Text(cartItems.size.toString())
                                    }
                                }
                            },
                            modifier = Modifier.padding(end = 8.dp)
                        ) {
                            IconButton(onClick = onCartClick) {
                                Icon(Icons.Default.ShoppingCart, null, tint = contentColor)
                            }
                        }
                    },
                    colors = TopAppBarDefaults.centerAlignedTopAppBarColors(containerColor = appAccentColor)
                )
            },
            bottomBar = {
                AdminBottomNavigation(
                    currentRoute = "store",
                    onHomeClick = onHomeClick,
                    onStoreClick = onStoreClick,
                    onMembersClick = onMembersClick,
                    onProfessorsClick = onProfessorsClick,
                    onSettingsClick = onSettingsClick,
                    accentColor = appAccentColor
                )
            },
            containerColor = Color.White
        ) { padding ->
            Column(modifier = Modifier.padding(padding)) {
                if (storeAnnouncement.isNotEmpty()) {
                    ScrollingAnnouncementBanner(text = storeAnnouncement, backgroundColor = Color.Black, textColor = Color.White)
                }

                AnimatedVisibility(
                    visible = isSearchVisible,
                    enter = expandVertically(animationSpec = tween(300)) + fadeIn(animationSpec = tween(300)),
                    exit = shrinkVertically(animationSpec = tween(300)) + fadeOut(animationSpec = tween(300))
                ) {
                    TextField(
                        value = searchQuery,
                        onValueChange = { searchQuery = it },
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(horizontal = 16.dp, vertical = 12.dp)
                            .focusRequester(focusRequester),
                        placeholder = { Text(t["search"] ?: "") },
                        leadingIcon = { Icon(Icons.Default.Search, null) },
                        trailingIcon = if (searchQuery.isNotEmpty()) {
                            { IconButton(onClick = { searchQuery = "" }) { Icon(Icons.Default.Close, null) } }
                        } else null,
                        colors = TextFieldDefaults.colors(
                            focusedContainerColor = Color(0xFFF5F5F5),
                            unfocusedContainerColor = Color(0xFFF5F5F5),
                            focusedIndicatorColor = appAccentColor,
                            unfocusedIndicatorColor = Color.Transparent
                        ),
                        singleLine = true,
                        shape = RoundedCornerShape(12.dp)
                    )
                }

                val effectiveCategories = if (allActiveCategoryIds.isEmpty()) {
                    GymCategory.entries.map { it.id }
                } else {
                    allActiveCategoryIds
                }

                val filteredCategories = effectiveCategories.filter { id ->
                    val fixedCat = GymCategory.entries.find { it.id == id }
                    val displayName = if (fixedCat != null) getCategoryTranslation(fixedCat, appLanguage) else "Extra"
                    displayName.contains(searchQuery, ignoreCase = true)
                }

                LazyVerticalGrid(
                    columns = GridCells.Fixed(2),
                    modifier = Modifier.fillMaxSize().padding(horizontal = 16.dp),
                    horizontalArrangement = Arrangement.spacedBy(16.dp),
                    verticalArrangement = Arrangement.spacedBy(16.dp),
                    contentPadding = PaddingValues(top = 12.dp, bottom = 32.dp)
                ) {
                    items(filteredCategories) { categoryId ->
                        val customName by dataStoreManager.getCategoryName(categoryId).collectAsState(initial = null)
                        val fixedCat = GymCategory.entries.find { it.id == categoryId }
                        val accentColor = fixedCat?.bgColor ?: Color(0xFF9575CD)
                        val displayName = if (!customName.isNullOrEmpty()) customName!! else if (fixedCat != null) getCategoryTranslation(fixedCat, appLanguage) else "Extra"

                        PublicCategoryCardShared(
                            displayName = displayName,
                            accentColor = accentColor,
                            onClick = { onCategoryClick(categoryId) }
                        )
                    }
                }
            }
        }
    }
}

@Composable
fun PublicCategoryCardShared(
    displayName: String,
    accentColor: Color,
    onClick: () -> Unit
) {
    Card(
        modifier = Modifier
            .fillMaxWidth()
            .aspectRatio(1f)
            .clip(RoundedCornerShape(16.dp))
            .clickable { onClick() },
        elevation = CardDefaults.cardElevation(defaultElevation = 4.dp),
        colors = CardDefaults.cardColors(containerColor = Color.White)
    ) {
        Column(modifier = Modifier.fillMaxSize()) {
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .weight(1.8f)
                    .background(accentColor),
                contentAlignment = Alignment.Center
            ) {
                Text(text = "📦", fontSize = 48.sp)
            }
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .weight(1f)
                    .background(Color(0xFF1A1A1A))
                    .padding(horizontal = 8.dp),
                contentAlignment = Alignment.Center
            ) {
                Text(
                    text = displayName.uppercase(),
                    color = Color.White,
                    fontSize = 12.sp,
                    fontWeight = FontWeight.Black,
                    textAlign = TextAlign.Center,
                    lineHeight = 14.sp,
                    maxLines = 2
                )
            }
        }
    }
}
