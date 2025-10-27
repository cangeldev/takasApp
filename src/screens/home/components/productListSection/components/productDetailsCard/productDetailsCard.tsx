import React, { FC, useState } from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { FooterSection, HeaderSection, ImageSection, MapsSection, ProductInfoSection, QuestionSection, SellerInfoSection, SimilarProductsSection } from './components'
import getStyles from './productDetailsCard.style'

/**
 * ProductDetailsCard: Tek bir ürünün tüm detaylarını gösteren ana bileşendir.
 *
 * Ürün görselleri, başlık bilgileri, ürün açıklaması, satıcı bilgileri,
 * Soru & Cevap bölümü, harita konumu ve benzer ürünler gibi tüm alt bölümleri bir araya getirir.
 * Ayrıca favorileme (isFavorite) durumunu ve alt kısımda yer alan sabit aksiyon (Footer) çubuğunu yönetir.
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