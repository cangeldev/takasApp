import { View, Text, FlatList } from 'react-native'
import React from 'react'
import getStyles from './similarProductsSection.style'
import images from 'assets/index'
import { useTranslation } from 'react-i18next'
import { SimilarProductCard } from './components'

const products = [
    {
        id: '1',
        price: 2500,
        title: 'Kamp Feneri',
        location: 'Merkez, Düzce',
        image: images.other.gradient,
    },
    {
        id: '2',
        price: 1500,
        title: 'Şişme Yatak',
        location: 'Kadıköy, İstanbul',
        image: images.other.gradient,
    },
    {
        id: '3',
        price: 3200,
        title: 'Kamp Çadırı',
        location: 'Beşiktaş, İstanbul',
        image: images.other.gradient,
    },
]

/*
  SimilarProductsSection, ProductDetailsCard içindeki gösterilen ürüne benzer ürünleri listelemek için kullanılan bileşendir.
*/
export const SimilarProductsSection = () => {
    const styles = getStyles()
    const { t } = useTranslation()

    return (
        <View>
            <Text style={styles.sectionTitleText}>{t("similarProducts")}</Text>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <SimilarProductCard image={item.image} title={item.title} location={item.location} price={item.price} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.list}
            />
        </View>
    )
}
