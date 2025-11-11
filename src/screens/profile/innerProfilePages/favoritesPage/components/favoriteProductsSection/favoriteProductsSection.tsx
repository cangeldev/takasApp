import React, { useState, useMemo, useCallback } from 'react'
import { FlatList, Text, View, ListRenderItem, ImageSourcePropType } from 'react-native'
import { useTranslation } from 'react-i18next'
import { recommenedList } from 'utils/helper'
import getStyles from './favoriteProductsSection.style'
import FavoritesFilterSortHeader from '../favoritesFilterSortHeader/favoritesFilterSortHeader'
import EmptyFavoritesContent from '../emptyFavoritesContent/emptyFavoritesContent'
import { FavoriteProductCard } from './components/favoriteProductCard/favoriteProductCard'
/**
 * FavoriteProductsSection: Kullanıcının favorilerine eklediği ürünleri listeleyen, sıralama ve filtreleme işlevselliği sunan ana bölümdür.
 *
 * Ürün listesini (recommenedList) bir FlatList içinde gösterir; her bir öğe FavoriteProductCard bileşeni ile render edilir.
 * selectedSort state'ini kullanarak seçilen sıralama seçeneğini tutar ve handleSortChange fonksiyonu ile ürünleri fiyata (en düşük/en yüksek) göre sıralar.
 * Liste boş olduğunda EmptyFavoritesContent bileşenini gösterir.
 * ListHeaderComponent olarak kullanılan FavoritesFilterSortHeader, kullanıcıya sıralama seçeneklerini sunar.
 */
type Product = {
  id: number
  description: string
  image: ImageSourcePropType
  price: number
}

export const FavoriteProductsSection = () => {
  const styles = getStyles()
  const { t } = useTranslation()
  const [selectedSort, setSelectedSort] = useState<string>('recommended')
  const emptyComponent = useMemo(() => <EmptyFavoritesContent />, [])

  const handleSortChange = useCallback((option: string) => {
    setSelectedSort(option)
  }, [])

  const sortedList = useMemo(() => {
    const sortedData = [...recommenedList]
    switch (t(selectedSort)) {
      case t('lowestPrice'):
        return sortedData.sort((a, b) => a.price - b.price)
      case t('highestPrice'):
        return sortedData.sort((a, b) => b.price - a.price)
      default:
        return sortedData
    }
  }, [selectedSort])

  const renderFavoriteProductItem: ListRenderItem<Product> = useCallback(
    ({ item }) => (
      <FavoriteProductCard
        description={item.description}
        image={item.image}
        price={item.price}
        address="Düzce, Merkez"
      />
    ),
    []
  )

  const keyExtractor = useCallback((item: Product) => item.id.toString(), [])

  return (
    <View style={styles.container}>
      <Text style={styles.bannerText}>{t('yourFavoriteProductsForYou')}</Text>

      <FlatList<Product>
        data={sortedList}
        renderItem={renderFavoriteProductItem}
        keyExtractor={keyExtractor}
        ListHeaderComponent={
          <FavoritesFilterSortHeader
            selectedOption={t(selectedSort)}
            onOptionSelect={handleSortChange}
          />
        }
        ListEmptyComponent={emptyComponent}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default FavoriteProductsSection
