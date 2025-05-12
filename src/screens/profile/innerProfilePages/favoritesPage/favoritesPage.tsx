import { View } from 'react-native'
import React from 'react'
import { Header } from 'components/commonComponents'
import getStyles from './favoritesPage.style'
import { FavoriteProductsSection } from './components'

/*
  Bu bileşen, kullanıcının favori ürünlerini görüntüleyebileceği bir sayfa sunar.
  Sayfa, başlık olarak "Favorilerim" içerir ve kullanıcıya favori ürünlerini göstermek için `FavoriteProductsSection` bileşenini içerir.
  Favori ürünler, kullanıcı tarafından daha önce seçilen ürünlerden oluşur.
*/
export const FavoritesPage = () => {
    const styles = getStyles()

    return (
        <View style={styles.container}>
            <Header title="myFavorites" />
            <FavoriteProductsSection />
        </View>
    )
}


