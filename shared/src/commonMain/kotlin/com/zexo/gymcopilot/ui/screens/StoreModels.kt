package com.zexo.gymcopilot.ui.screens

import androidx.compose.animation.core.*
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.RectangleShape
import androidx.compose.ui.layout.onSizeChanged
import androidx.compose.ui.platform.LocalDensity
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.zexo.gymcopilot.DataStoreManager
import com.zexo.gymcopilot.model.Product

typealias Product = com.zexo.gymcopilot.model.Product

enum class GymCategory(val id: String, val bgColor: Color, val defaultIconRes: Int = 0) {
    EQUIPMENT("EQUIPMENT", Color(0xFFFF5252)),
    CLOTHING("CLOTHING", Color(0xFF7C4DFF)),
    NUTRITION("NUTRITION", Color(0xFFFFD700)),
    WELLNESS("WELLNESS", Color(0xFF69F0AE)),
    DIGITAL("DIGITAL", Color(0xFF2196F3)),
    TECH("TECH", Color(0xFF40E0D0)),
    HEALTHY_FOOD("HEALTHY_FOOD", Color(0xFFFF8A65)),
    EXTRAS("EXTRAS", Color(0xFF9575CD))
}

fun getCategoryTranslation(cat: GymCategory, lang: String): String {
    return when (lang) {
        "Español" -> when (cat) {
            GymCategory.EQUIPMENT -> "Equipamiento y accesorios"
            GymCategory.CLOTHING -> "Indumentaria deportiva"
            GymCategory.NUTRITION -> "Nutrición y suplementos"
            GymCategory.WELLNESS -> "Servicios de bienestar"
            GymCategory.DIGITAL -> "Membresías"
            GymCategory.TECH -> "Tecnología"
            GymCategory.HEALTHY_FOOD -> "Alimentación saludable"
            GymCategory.EXTRAS -> "Experiencia e extras"
        }
        else -> when (cat) {
            GymCategory.EQUIPMENT -> "Equipment & Accessories"
            GymCategory.CLOTHING -> "Sports Clothing"
            GymCategory.NUTRITION -> "Nutrition & Supplements"
            GymCategory.WELLNESS -> "Wellness Services"
            GymCategory.DIGITAL -> "Memberships"
            GymCategory.TECH -> "Technology"
            GymCategory.HEALTHY_FOOD -> "Healthy Food"
            GymCategory.EXTRAS -> "Experience & Extras"
        }
    }
}

data class CurrencyInfo(val name: String, val symbol: String, val flag: String)

object CurrencyData {
    val currencies = listOf(
        CurrencyInfo("Peso Argentino", "$", "🇦🇷"),
        CurrencyInfo("Dólar Estadounidense", "USD $", "🇺🇸"),
        CurrencyInfo("Euro", "€", "🇪🇺"),
        CurrencyInfo("Real Brasileño", "R$", "🇧🇷"),
        CurrencyInfo("Peso Mexicano", "$", "🇲🇽"),
        CurrencyInfo("Peso Chileno", "$", "🇨🇱"),
        CurrencyInfo("Peso Colombiano", "$", "🇨🇴"),
        CurrencyInfo("Sol Peruano", "S/", "🇵🇪"),
        CurrencyInfo("Peso Uruguayo", "$", "🇺🇾"),
        CurrencyInfo("Guaraní Paraguayo", "₲", "🇵🇾"),
        CurrencyInfo("Boliviano", "Bs", "🇧🇴"),
        CurrencyInfo("Peso Dominicano", "RD$", "🇩🇴"),
        CurrencyInfo("Dólar Canadiense", "CA$", "🇨🇦"),
        CurrencyInfo("Libra Esterlina", "£", "🇬🇧"),
        CurrencyInfo("Yen Japonés", "¥", "🇯🇵")
    )

    fun getSymbol(nameOrSymbol: String): String {
        return currencies.find { it.name == nameOrSymbol }?.symbol ?: nameOrSymbol
    }
}

@Composable
fun InfiniteCategoryBanner(
    allActiveCategoryIds: List<String>,
    appLanguage: String,
    dataStoreManager: DataStoreManager,
    selectedCategoryId: String? = null,
    onCategoryClick: (String) -> Unit
) {
    if (allActiveCategoryIds.isEmpty()) return

    val itemCount = allActiveCategoryIds.size

    if (itemCount in 1..4) {
        Row(
            modifier = Modifier
                .fillMaxWidth()
                .height(40.dp)
        ) {
            allActiveCategoryIds.forEach { categoryId ->
                CategoryBannerItem(
                    categoryId = categoryId,
                    appLanguage = appLanguage,
                    dataStoreManager = dataStoreManager,
                    isSelected = categoryId == selectedCategoryId,
                    modifier = Modifier.weight(1f),
                    onCategoryClick = onCategoryClick
                )
            }
        }
    } else {
        LazyRow(
            modifier = Modifier
                .fillMaxWidth()
                .height(40.dp)
        ) {
            items(allActiveCategoryIds) { categoryId ->
                CategoryBannerItem(
                    categoryId = categoryId,
                    appLanguage = appLanguage,
                    dataStoreManager = dataStoreManager,
                    isSelected = categoryId == selectedCategoryId,
                    onCategoryClick = onCategoryClick
                )
            }
        }
    }
}

@Composable
fun CategoryBannerItem(
    categoryId: String,
    appLanguage: String,
    dataStoreManager: DataStoreManager,
    isSelected: Boolean,
    modifier: Modifier = Modifier,
    onCategoryClick: (String) -> Unit
) {
    val customName by dataStoreManager.getCategoryName(categoryId).collectAsState(initial = "")
    val fixedCat = GymCategory.entries.find { it.id == categoryId }

    val displayName = customName?.takeIf { it.isNotEmpty() }
        ?: fixedCat?.let { getCategoryTranslation(it, appLanguage) }
        ?: "Extra"

    val categorySavedColor by dataStoreManager.getCategoryColor(categoryId).collectAsState(initial = null)
    val bgColor = if (categorySavedColor != null) Color(categorySavedColor!!)
    else fixedCat?.bgColor ?: Color(0xFF9575CD)

    val contentColor = Color.Black

    Surface(
        color = bgColor,
        shape = RectangleShape,
        modifier = modifier
            .fillMaxHeight()
            .clickable { onCategoryClick(categoryId) }
    ) {
        Box(
            modifier = Modifier.padding(horizontal = 8.dp),
            contentAlignment = Alignment.Center
        ) {
            Text(
                text = displayName.uppercase(),
                color = if (isSelected) contentColor else contentColor.copy(alpha = 0.8f),
                fontSize = 11.sp,
                fontWeight = if (isSelected) FontWeight.Black else FontWeight.Bold,
                textAlign = TextAlign.Center,
                lineHeight = 12.sp,
                maxLines = 2
            )
        }
    }
}

@Composable
fun ScrollingAnnouncementBanner(
    text: String,
    backgroundColor: Color = Color.Black,
    textColor: Color = Color.White
) {
    if (text.isBlank()) return

    val infiniteTransition = rememberInfiniteTransition(label = "marquee")
    val density = LocalDensity.current
    var containerWidth by remember { mutableStateOf(0) }
    var textWidth by remember { mutableStateOf(0) }

    val duration = (text.length * 300).coerceAtLeast(12000)

    val offset by infiniteTransition.animateFloat(
        initialValue = 1f,
        targetValue = -1f,
        animationSpec = infiniteRepeatable(
            animation = tween(duration, easing = LinearEasing),
            repeatMode = RepeatMode.Restart
        ),
        label = "offset"
    )

    Box(
        modifier = Modifier
            .fillMaxWidth()
            .height(36.dp)
            .background(backgroundColor)
            .onSizeChanged { containerWidth = it.width },
        contentAlignment = Alignment.CenterStart
    ) {
        val xPos = (offset * (textWidth + containerWidth)) / 2 + (containerWidth / 2) - (textWidth / 2)

        Text(
            text = text,
            color = textColor,
            fontSize = 14.sp,
            fontWeight = FontWeight.Bold,
            modifier = Modifier
                .offset(x = with(density) { xPos.toDp() })
                .onSizeChanged { textWidth = it.width },
            maxLines = 1,
            softWrap = false
        )
    }
}

object BannerTranslations {
    private val phrasesMap = mapOf(
        "FEW_AVAILABLE" to mapOf("English" to "Few available!", "Español" to "¡Pocos disponibles!"),
        "LIMITED_EDITION" to mapOf("English" to "Limited edition", "Español" to "Edición limitada"),
        "FLASH_OFFER" to mapOf("English" to "Flash offer", "Español" to "Oferta relámpago"),
        "BUY_1_GET_1" to mapOf("English" to "Buy 1 Get 1", "Español" to "2x1"),
        "DISCOUNT" to mapOf("English" to "Discount", "Español" to "Descuento"),
        "OFFER" to mapOf("English" to "Offer", "Español" to "Oferta")
    )

    fun getPhrasesForLanguage(lang: String): List<String> {
        return phrasesMap.values.map { it[lang] ?: it["English"] ?: "" }
    }

    fun translate(text: String?, targetLang: String): String? {
        if (text == null) return null
        val key = phrasesMap.entries.find { entry ->
            entry.value.values.any { it.equals(text, ignoreCase = true) }
        }?.key ?: return text
        return phrasesMap[key]?.get(targetLang) ?: phrasesMap[key]?.get("English") ?: text
    }
}
