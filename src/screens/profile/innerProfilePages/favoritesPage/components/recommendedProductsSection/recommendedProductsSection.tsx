import React, { useCallback } from 'react'
import { FlatList, ImageSourcePropType, ListRenderItem, Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { recommenedList } from 'utils/helper'
import getStyles from './recommendedProductsSection.style'
import { RecommenedProductCard } from './components/recommendedProductCard/recommendedProductCard'

type Product = {
    id: number
    description: string
    image: ImageSourcePropType
    price: number
}
const renderRecommenedProductItem: ListRenderItem<Product> = useCallback(
    ({ item }) => (
        <RecommenedProductCard
            description={item.description}
            image={item.image}
            price={item.price}
        />
    ), []
)
/**
 * RecommendedProductsSection: Kullanıcıya, ilgisini çekebilecek ürünlerin yatay olarak kaydırılabilir (horizontal FlatList) bir listesini sunan bölümdür.
 *
 * Başlık metni (productsYouMayLike) çeviri (i18n) desteklidir.
 * Ürün verilerini `recommenedList` adlı kaynaktan alır.
 * Her bir ürünü görselleştirmek için `RecommenedProductCard` bileşenini kullanır.
 * Bu bölüm, favori listesi boşken (EmptyFavoritesContent) veya ana sayfa gibi keşfetme alanlarında kullanıcı etkileşimini artırmayı amaçlar.
 */
export const RecommendedProductsSection = () => {
    const styles = getStyles()
    const { t } = useTranslation()

    return (
        <View>
            <Text style={styles.recommendedTitle}>{t('productsYouMayLike')}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={recommenedList}
                renderItem={renderRecommenedProductItem}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}
export default RecommendedProductsSection
