import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import getStyles from './footerSection.style'
import { useTranslation } from 'react-i18next'

/*
  FooterSection, Bu bileşen ProductDetailsCard yapısındaki ürünün fiyat, takas gibi tekliflerin görüntülenebilmesi için kullanılan bileşendir.
*/
export const FooterSection = () => {
    const styles = getStyles()
    const { t } = useTranslation()
    return (
        <View style={styles.footerContainer}>
            <View style={styles.priceWrapper}>
                <Text style={styles.oldPriceText}>5.000 TL</Text>
                <Text style={styles.discountedPriceText}>4.970 TL</Text>
            </View>
            <View style={styles.footerButtonsRow}>
                <TouchableOpacity style={styles.offerButton}>
                    <Text style={styles.offerButtonText}>{t("makeOffer")}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.cartButton}>
                    <Text style={styles.cartButtonText}>{t("addToCart")}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
