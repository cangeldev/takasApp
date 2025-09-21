import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import getStyles from './sellerInfoSection.style'
import images from 'assets/index'
import { useTranslation } from 'react-i18next'

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
            <TouchableOpacity style={styles.followButton}>
                <Text style={styles.followButtonText}>{t("follow")}</Text>
            </TouchableOpacity>
        </View>
    )
}
