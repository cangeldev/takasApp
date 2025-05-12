import React from 'react'
import { FavoriteProductsSection } from './components'

/*
  Bu bileşen, kullanıcının favori ürünlerini görüntüleyebileceği bir sayfa sunar.
  Sayfa, başlık olarak "Favorilerim" içerir ve kullanıcıya favori ürünlerini göstermek için `FavoriteProductsSection` bileşenini içerir.
  Favori ürünler, kullanıcı tarafından daha önce seçilen ürünlerden oluşur.
*/
export const FavoritesPage = () => {
    return (
        <>
            <FavoriteProductsSection />
        </>
    )
}