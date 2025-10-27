import React from 'react'
import { FavoriteProductsSection } from './components'

/**
 * FavoritesPage: Kullanıcının favorilerine eklediği ürünlerin toplu olarak listelendiği ana sayfadır.
 *
 * Temel olarak, favori olarak işaretlenmiş tüm ürünleri görüntülemek ve yönetmek için tasarlanmıştır.
 * Bu sayfadaki ana içerik ve mantık FavoriteProductsSection bileşeni içinde yer alır.
 * Kullanıcının ilgilendiği ürünlere kolayca erişmesini sağlar.
 */
export const FavoritesPage = () => {
    return (
        <>
            <FavoriteProductsSection />
        </>
    )
}