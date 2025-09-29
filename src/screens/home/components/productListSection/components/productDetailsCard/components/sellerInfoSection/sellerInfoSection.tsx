import { View, Text, Image } from 'react-native'
import React from 'react'
import getStyles from './sellerInfoSection.style'
import images from 'assets/index'
import { useTranslation } from 'react-i18next'
import { CustomButton } from 'components/commonComponents'

/*
  SellerInfoSection, ProductDetailsCard yapısında satıcı bilgilerini
  göstermek için kullanılan bileşendir.
*/
export const SellerInfoSection = () => {
    const styles = getStyles()
    const { t } = useTranslation()

    return (
        <View style={styles.sellerCardContainer}>
            <Image
                source={images.profile.defaultProfileImage}
                style={styles.sellerAvatar}
            />
            <View style={styles.sellerInfoWrapper}>
                <Text style={styles.sellerNameText}>cangel81</Text>
                <Text style={styles.sellerMetaText}>⭐ 4.6 · 23 {t("evaluation")}</Text>
            </View>
            <CustomButton title="follow" variant="primary" style={styles.followButton} textStyle={styles.followButtonText} />
        </View>
    )
}
