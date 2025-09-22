import React, { FC, useState } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { FooterSection, HeaderSection, ImageSection, MapsSection, ProductInfoSection, QuestionSection, SellerInfoSection, SimilarProductsSection } from './components'
import getStyles from './productDetailsCard.style'

/*
  ProductDetailsCard, Bu kart yapısı ürünlerin görüntülenmesi ve detay bilgilere ulaşılabilmesi için kullanılan bileşendir.  
  Bu ekran, kullanıcıya ürünlerin resimlerini, fiyatını, ürün bilgisini gibi bilgileri gösteririrken istediğimiz ürünün detayına ulaşmamıza olanak tanır.   
*/
export const ProductDetailsCard: FC = () => {

    const [isFavorite, setIsFavorite] = useState<boolean>(false)
    const toggleFavorite = () => setIsFavorite(prev => !prev)
    const styles = getStyles()
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.contentContainer}>
                <ImageSection />
                <HeaderSection isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
                <ProductInfoSection isFavorite={isFavorite} toggleFavorite={toggleFavorite} />
                <SellerInfoSection />
                <QuestionSection />
                <MapsSection />
                <SimilarProductsSection />
            </ScrollView>
            <FooterSection />
        </SafeAreaView>
    )
}