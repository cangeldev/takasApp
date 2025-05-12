import React from 'react'
import { Divider } from 'components/commonComponents'
import NoFavoriteInfoSection from '../noFavoriteInfoSection/noFavoriteInfoSection'
import RecommendedProductsSection from '../recommendedProductsSection/recommendedProductsSection'

/*
  `EmptyFavoritesContent` bileşeni, kullanıcı favorilerine hiçbir ürün eklemediğinde gösterilen içeriktir.
  Bu bileşen, kullanıcıya favorilere ürün eklemeyi teşvik etmek amacıyla önerilen ürünleri gösterir.
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
