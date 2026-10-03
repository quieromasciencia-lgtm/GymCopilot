package com.zexo.gymcopilot.ui.screens

import androidx.compose.animation.*
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.grid.GridCells
import androidx.compose.foundation.lazy.grid.LazyVerticalGrid
import androidx.compose.foundation.lazy.grid.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.automirrored.filled.ArrowBack
import androidx.compose.material.icons.filled.AddShoppingCart
import androidx.compose.material.icons.filled.Close
import androidx.compose.material.icons.filled.Delete
import androidx.compose.material.icons.filled.Edit
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
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.zexo.gymcopilot.DataStoreManager
import com.zexo.gymcopilot.model.Product
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun CategoryProductsScreen(
    categoryId: String,
    onBack: () -> Unit = {},
    onCartClick: () -> Unit = {},
    onEditProduct: (String) -> Unit = {},
    onCategoryClick: (String) -> Unit = {},
    onHomeClick: () -> Unit = {},
    onStoreClick: () -> Unit = {},
    onMembersClick: () -> Unit = {},
    onProfessorsClick: () -> Unit = {},
    onSettingsClick: () -> Unit = {},
    onScheduleClick: () -> Unit = {},
    onClassesClick: () -> Unit = {},
    onRoutinesClick: () -> Unit = {},
    onChatClick: () -> Unit = {},
    isAdmin: Boolean = true,
    isProfessor: Boolean = false,
    dataStoreManager: DataStoreManager = remember { DataStoreManager() }
) {
    val scope = rememberCoroutineScope()
    val appLanguage by dataStoreManager.getAppLanguage().collectAsState(initial = "Español")
    val appCurrencySelection by dataStoreManager.getAppCurrency().collectAsState(initial = "Peso Argentino")
    val currencySymbol = remember(appCurrencySelection) { CurrencyData.getSymbol(appCurrencySelection) }

    val categoryName by dataStoreManager.getCategoryName(categoryId).collectAsState(initial = null)
    val categoryColorInt by dataStoreManager.getCategoryColor(categoryId).collectAsState(initial = null)
    val cartItems by dataStoreManager.getCartItems().collectAsState(initial = emptyList())

    var isSearchVisible by remember { mutableStateOf(false) }
    var searchQuery by remember { mutableStateOf("") }
    val focusRequester = remember { FocusRequester() }

    LaunchedEffect(isSearchVisible) {
        if (isSearchVisible) {
            delay(300)
            focusRequester.requestFocus()
        }
    }

    val selectedCategoryIds by dataStoreManager.getStoreCategories().collectAsState(initial = emptySet())
    val customCategoryIds by dataStoreManager.getCustomCategoryIds().collectAsState(initial = emptySet())
    val allActiveCategoryIds = remember(selectedCategoryIds, customCategoryIds) {
        val fixed = GymCategory.entries.filter { it.id in selectedCategoryIds }.map { it.id }
        val custom = customCategoryIds.filter { it in selectedCategoryIds }
        fixed + custom
    }

    val fixedCat = GymCategory.entries.find { it.id == categoryId }
    val accentColor = if (categoryColorInt != null) Color(categoryColorInt!!) else fixedCat?.bgColor ?: Color(0xFF9575CD)
    val displayName = if (!categoryName.isNullOrEmpty()) categoryName!! else if (fixedCat != null) getCategoryTranslation(fixedCat, appLanguage) else "Extra"
    val contentColor = if (accentColor.luminance() > 0.5f) Color.Black else Color.White

    var productToDelete by remember { mutableStateOf<Product?>(null) }
    val allProducts by dataStoreManager.getProducts().collectAsState(initial = emptyList())
    val products = remember(allProducts, categoryId, searchQuery) {
        allProducts.filter { it.categoryId == categoryId && it.name.contains(searchQuery, ignoreCase = true) }
    }

    if (productToDelete != null) {
        AlertDialog(
            onDismissRequest = { productToDelete = null },
            title = { Text(if (appLanguage == "Español") "Eliminar Producto" else "Delete Product") },
            text = { Text(if (appLanguage == "Español") "¿Estás seguro de que deseas eliminar ${productToDelete?.name}?" else "Are you sure you want to delete ${productToDelete?.name}?") },
            confirmButton = {
                TextButton(onClick = { scope.launch { dataStoreManager.deleteProduct(productToDelete!!.id); productToDelete = null } }) {
                    Text(if (appLanguage == "Español") "Eliminar" else "Delete", color = Color.Red)
                }
            },
            dismissButton = {
                TextButton(onClick = { productToDelete = null }) { Text(if (appLanguage == "Español") "Cancelar" else "Cancel") }
            }
        )
    }

    Surface(modifier = Modifier.fillMaxSize(), color = Color.White) {
        Scaffold(
            topBar = {
                TopAppBar(
                    title = { Text(text = displayName.uppercase(), color = contentColor, fontSize = 18.sp, fontWeight = FontWeight.Black) },
                    navigationIcon = {
                        IconButton(onClick = onBack) {
                            Icon(Icons.AutoMirrored.Filled.ArrowBack, contentDescription = "Back", tint = contentColor)
                        }
                    },
                    actions = {
                        IconButton(onClick = { isSearchVisible = !isSearchVisible; if (!isSearchVisible) searchQuery = "" }) {
                            Icon(if (isSearchVisible) Icons.Default.Close else Icons.Default.Search, null, tint = contentColor)
                        }
                        BadgedBox(
                            badge = { if (cartItems.isNotEmpty()) Badge(containerColor = Color.Red, contentColor = Color.White) { Text(cartItems.size.toString()) } },
                            modifier = Modifier.padding(end = 8.dp)
                        ) {
                            IconButton(onClick = onCartClick) { Icon(Icons.Default.ShoppingCart, null, tint = contentColor) }
                        }
                    },
                    colors = TopAppBarDefaults.topAppBarColors(containerColor = accentColor)
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
                    accentColor = accentColor
                )
            },
            containerColor = Color.White
        ) { padding ->
            Column(modifier = Modifier.padding(padding)) {
                InfiniteCategoryBanner(
                    allActiveCategoryIds = allActiveCategoryIds.toList(),
                    appLanguage = appLanguage,
                    dataStoreManager = dataStoreManager,
                    selectedCategoryId = categoryId,
                    onCategoryClick = onCategoryClick
                )

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
                        placeholder = { Text(if (appLanguage == "Español") "Buscar producto..." else "Search product...") },
                        leadingIcon = { Icon(Icons.Default.Search, null) },
                        trailingIcon = if (searchQuery.isNotEmpty()) {
                            { IconButton(onClick = { searchQuery = "" }) { Icon(Icons.Default.Close, null) } }
                        } else null,
                        colors = TextFieldDefaults.colors(
                            focusedContainerColor = Color(0xFFF5F5F5),
                            unfocusedContainerColor = Color(0xFFF5F5F5),
                            focusedIndicatorColor = accentColor,
                            unfocusedIndicatorColor = Color.Transparent
                        ),
                        singleLine = true,
                        shape = RoundedCornerShape(12.dp)
                    )
                }

                if (products.isEmpty()) {
                    Box(modifier = Modifier.fillMaxSize(), contentAlignment = Alignment.Center) {
                        Text(text = if (appLanguage == "Español") "No hay productos coincidentes" else "No matching products", color = Color.Gray, fontSize = 16.sp)
                    }
                } else {
                    LazyVerticalGrid(
                        columns = GridCells.Fixed(2),
                        modifier = Modifier.fillMaxSize(),
                        contentPadding = PaddingValues(start = 16.dp, top = 8.dp, end = 16.dp, bottom = 100.dp),
                        horizontalArrangement = Arrangement.spacedBy(16.dp),
                        verticalArrangement = Arrangement.spacedBy(16.dp)
                    ) {
                        items(products) { product ->
                            ProductSharedCardItem(
                                product = product,
                                accentColor = accentColor,
                                currencySymbol = currencySymbol,
                                onAddToCart = { scope.launch { dataStoreManager.addToCart(product) } },
                                onEditProduct = onEditProduct,
                                onDeleteClick = { productToDelete = product },
                                isAdmin = isAdmin
                            )
                        }
                    }
                }
            }
        }
    }
}

@Composable
fun ProductSharedCardItem(
    product: Product,
    accentColor: Color,
    currencySymbol: String = "$",
    onAddToCart: () -> Unit = {},
    onEditProduct: (String) -> Unit = {},
    onDeleteClick: () -> Unit = {},
    isAdmin: Boolean = true
) {
    Card(
        modifier = Modifier.fillMaxWidth().wrapContentHeight().clip(RoundedCornerShape(12.dp)),
        elevation = CardDefaults.cardElevation(defaultElevation = 3.dp),
        colors = CardDefaults.cardColors(containerColor = Color(0xFFF8F8F8))
    ) {
        Column {
            Box(
                modifier = Modifier.fillMaxWidth().aspectRatio(1f).background(Color.White).clip(RoundedCornerShape(topStart = 12.dp, topEnd = 12.dp)),
                contentAlignment = Alignment.Center
            ) {
                Text("📦", fontSize = 42.sp)

                if (isAdmin) {
                    Row(modifier = Modifier.align(Alignment.TopEnd).padding(4.dp), horizontalArrangement = Arrangement.spacedBy(4.dp)) {
                        Surface(modifier = Modifier.size(30.dp).clip(CircleShape).clickable { onDeleteClick() }, color = Color.Red.copy(alpha = 0.8f)) {
                            Box(contentAlignment = Alignment.Center) { Icon(Icons.Default.Delete, null, modifier = Modifier.size(16.dp), tint = Color.White) }
                        }
                        Surface(modifier = Modifier.size(30.dp).clip(CircleShape).clickable { onEditProduct(product.id) }, color = Color.White.copy(alpha = 0.9f)) {
                            Box(contentAlignment = Alignment.Center) { Icon(Icons.Default.Edit, null, modifier = Modifier.size(16.dp), tint = Color.Black) }
                        }
                    }
                }
            }
            Column(modifier = Modifier.padding(12.dp)) {
                Text(text = product.name.ifEmpty { "Producto" }, fontSize = 14.sp, fontWeight = FontWeight.Bold, maxLines = 2, overflow = TextOverflow.Ellipsis, minLines = 2, lineHeight = 18.sp, color = Color.Black)
                if (product.description.isNotEmpty()) {
                    Text(text = product.description, fontSize = 11.sp, color = Color.DarkGray, maxLines = 2, overflow = TextOverflow.Ellipsis, lineHeight = 14.sp, modifier = Modifier.padding(top = 2.dp))
                }
                Spacer(modifier = Modifier.height(8.dp))
                Row(modifier = Modifier.fillMaxWidth(), verticalAlignment = Alignment.CenterVertically, horizontalArrangement = Arrangement.SpaceBetween) {
                    Text(text = "$currencySymbol${product.price}", fontSize = 16.sp, fontWeight = FontWeight.Black, color = Color.Black)
                    Surface(modifier = Modifier.size(34.dp).clip(CircleShape).clickable { onAddToCart() }, color = accentColor) {
                        Box(contentAlignment = Alignment.Center) { Icon(imageVector = Icons.Default.AddShoppingCart, contentDescription = null, tint = if (accentColor.luminance() > 0.5f) Color.Black else Color.White, modifier = Modifier.size(20.dp)) }
                    }
                }
            }
        }
    }
}
