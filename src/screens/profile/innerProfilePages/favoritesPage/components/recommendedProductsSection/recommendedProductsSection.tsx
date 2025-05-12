import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { recommenedList } from 'utils/helper'
import getStyles from './recommendedProductsSection.style'
import { RecommenedProductCard } from './components/recommendedProductCard/recommendedProductCard'

const renderRecommenedProductItem = ({ item }: any) => (
    <RecommenedProductCard
        description={item.description}
        image={item.image}
        price={item.price}
    />
)

/*
  Bu bileşen, kullanıcıya önerilen ürünlerin bir listesini sunar.
  Ürünler, `recommenedList` adlı veri kaynağından alınır ve her ürün bir kart olarak gösterilir.
  Ürünler yatay bir kaydırılabilir liste (`FlatList`) içinde sıralanır. Her bir ürün, `RecommenedProductCard` bileşeniyle görselleştirilir.
  Başlık olarak "Sizi Beğenebileceğiniz Ürünler" metni görüntülenir ve kullanıcı, önerilen ürünleri kaydırarak keşfedebilir.
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
