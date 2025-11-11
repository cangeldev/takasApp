import { View, FlatList, Text, ImageSourcePropType, ListRenderItem } from 'react-native'
import React, { useCallback } from 'react'
import getStyles from './productListSection.style'
import { productList } from 'utils/helper'
import { ProductCard } from './components/productCard/productCard'
import { useTranslation } from 'react-i18next'

/**
 * ProductListSection: Uygulamanın ana sayfasında (HomeScreen) veya kategori sayfalarında, kullanıcılara çift sütunlu (numColumns={2}) bir ızgara düzeninde ürünleri listelemek ve görüntülemek için kullanılan ana bölümdür.
 *
 * Başlık metni ("ourPicksForYou") çeviri (i18n) desteklidir.
 * Ürün verilerini 'productList' dizisinden alır ve her bir ürünü göstermek için 'ProductCard' bileşenini kullanır.
 * Liste, dikey kaydırma özelliği devre dışı bırakılmış (scrollEnabled={false}) bir FlatList içinde sunulur, bu da listenin üst bileşen tarafından yönetilen ScrollView içinde yer almasını sağlar.
 * Bu bölüm, kullanıcının uygulama içindeki ana ürün akışını oluşturur.
 */

type Product = {
    id: number
    description: string
    image: ImageSourcePropType
    price: number
    oldPrice: number
    likes: number
    swap?: boolean

}
export const ProductListSection = () => {

    const styles = getStyles()
    const { t } = useTranslation()

    const renderItem: ListRenderItem<Product> = useCallback(
        ({ item }) => (
            <ProductCard
                image={item.image}
                price={item.price}
                oldPrice={item.oldPrice}
                likes={item.likes}
                title={item.description}
                swap={item.swap}
            />
        ), []
    )

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{t("ourPicksForYou")}</Text>
            <FlatList
                data={productList}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
                scrollEnabled={false} />
        </View>
    )
}
