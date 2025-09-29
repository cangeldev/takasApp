import { View, Text } from 'react-native'
import React from 'react'
import getStyles from './footerSection.style'
import { CustomButton } from 'components/commonComponents'

/*
  FooterSection, Bu bileşen ProductDetailsCard yapısındaki ürünün fiyat, takas gibi tekliflerin görüntülenebilmesi için kullanılan bileşendir.
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
