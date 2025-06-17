import { View, FlatList, Text } from 'react-native'
import React from 'react'
import getStyles from './productListSection.style'
import { productList } from 'utils/helper'
import { ProductCard } from './components/productCard/productCard'
import { useTranslation } from 'react-i18next'

//ProductListSection, ürünlerin görüntülenmesi ve listelenmesi için kullanılan bileşenidir.  
export const ProductListSection = () => {

    const styles = getStyles()
    const { t } = useTranslation()
    const renderItem = ({ item }: any) =>
        <ProductCard
            image={item.image}
            price={item.price}
            oldPrice={item.oldPrice}
            likes={item.likes}
            title={item.description}
            swap={item.swap}
        />

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {t("ourPicksForYou")}
            </Text>
            <FlatList numColumns={2} data={productList} renderItem={renderItem} scrollEnabled={false} />
        </View>
    )
}
