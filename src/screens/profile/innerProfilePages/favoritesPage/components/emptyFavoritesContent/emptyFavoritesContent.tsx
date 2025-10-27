import React from 'react'
import { Divider } from 'components/commonComponents'
import NoFavoriteInfoSection from '../noFavoriteInfoSection/noFavoriteInfoSection'
import RecommendedProductsSection from '../recommendedProductsSection/recommendedProductsSection'

/**
 * EmptyFavoritesContent: Kullanıcının favori listesi boş olduğunda, FavoriteProductsSection bileşeninin içinde (ListEmptyComponent olarak) gösterilen özel içerik alanıdır.
 *
 * Kullanıcıya durumunu bildiren (NoFavoriteInfoSection) bir mesaj sunar ve hemen ardından favorilere ürün eklemesini teşvik etmek amacıyla RecommendedProductsSection bileşeni ile önerilen ürünleri görüntüler.
 * Bu, kullanıcı etkileşimini artırmayı ve uygulama içinde gezinmeye devam etmeyi sağlamayı amaçlar.
 */
export const EmptyFavoritesContent = () => {

    return (
        <>
            <NoFavoriteInfoSection onPress={() => null} />
            <Divider />
            <RecommendedProductsSection />
        </>
    )
}
export default EmptyFavoritesContent
