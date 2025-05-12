import React, { useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import { recommenedList } from 'utils/helper'
import getStyles from './favoriteProductsSection.style'
import FavoritesFilterSortHeader from '../favoritesFilterSortHeader/favoritesFilterSortHeader'
import EmptyFavoritesContent from '../emptyFavoritesContent/emptyFavoritesContent'
import { FavoriteProductCard } from './components/favoriteProductCard/favoriteProductCard'

const renderFavoriteProductItem = ({ item }: any) => (
  <FavoriteProductCard
    description={item.description}
    image={item.image}
    price={item.price}
    address="Düzce, Merkez"
  />
)

// `FavoriteProductsSection` bileşeni, kullanıcının favori ürünlerini listelemek için kullanılan bir bölümdür.
//   Bu bölümde kullanıcı, favori ürünlerini sıralayabilir ve görüntüleyebilir.
export const FavoriteProductsSection = () => {
  const styles = getStyles()
  const { t } = useTranslation()
  const [selectedSort, setSelectedSort] = useState<string>(t('recommended'))
  const [sortedList, setSortedList] = useState(recommenedList)

  const handleSortChange = (option: string) => {
    let sortedData = [...recommenedList]
    switch (t(option)) {
      case t('lowestPrice'):
        sortedData.sort((a, b) => a.price - b.price)
        break
      case t('highestPrice'):
        sortedData.sort((a, b) => b.price - a.price)
        break
      default:
        sortedData = recommenedList
    }

    setSelectedSort(option)
    setSortedList(sortedData)
  }

  return (
    <>
      <Text style={styles.bannerText}>
        {t('yourFavoriteProductsForYou')}
      </Text>
      <FlatList
        data={sortedList}
        renderItem={renderFavoriteProductItem}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={
          <FavoritesFilterSortHeader
            selectedOption={selectedSort}
            onOptionSelect={handleSortChange}
          />
        }
        ListEmptyComponent={<EmptyFavoritesContent />}
        ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      />
    </>
  )
}
export default FavoriteProductsSection
