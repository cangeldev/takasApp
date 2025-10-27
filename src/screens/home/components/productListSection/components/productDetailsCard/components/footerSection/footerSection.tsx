import { View, Text } from 'react-native'
import React from 'react'
import getStyles from './footerSection.style'
import { CustomButton } from 'components/commonComponents'

/**
 * FooterSection: Ürün Detay sayfasının (ProductDetailsCard) alt kısmında sabit olarak duran, ana aksiyonları ve fiyat bilgisini içeren bileşendir.
 *
 * Ürünün güncel ve indirimli fiyatını gösterir (priceWrapper).
 * Kullanıcının ürüne yönelik temel aksiyonları (Teklif Yapma - makeOffer ve Sepete Ekleme - addToCart) için butonları barındırır.
 * Bu bölüm, kullanıcının ürünü satın alma veya takas/teklif sürecini başlatma işlemlerini kolaylaştırır.
 */
export const FooterSection = () => {
    const styles = getStyles()
    return (
        <View style={styles.footerContainer}>
            <View style={styles.priceWrapper}>
                <Text style={styles.oldPriceText}>5.000 TL</Text>
                <Text style={styles.discountedPriceText}>4.970 TL</Text>
            </View>
            <View style={styles.footerButtonsRow}>
                <CustomButton title="makeOffer" variant="secondary" style={styles.offerButton} textStyle={styles.offerButtonText} />
                <CustomButton title="addToCart" variant="primary" style={styles.cartButton} textStyle={styles.cartButtonText} />
            </View>
        </View>
    )
}
