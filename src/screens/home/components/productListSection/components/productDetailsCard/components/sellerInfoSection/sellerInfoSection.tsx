import { View, Text, Image } from 'react-native'
import React from 'react'
import getStyles from './sellerInfoSection.style'
import images from 'assets/index'
import { useTranslation } from 'react-i18next'
import { CustomButton } from 'components/commonComponents'

/**
 * SellerInfoSection: Ürün Detay sayfasında (ProductDetailsCard) ürünün satıcısına ait temel bilgileri ve aksiyonları gösteren bölümdür.
 *
 * Satıcının profil fotoğrafı (sellerAvatar), kullanıcı adı (sellerNameText), değerlendirme puanı ve yorum sayısı (sellerMetaText) gibi detayları içerir.
 * Ayrıca, kullanıcıya satıcıyı doğrudan takip etme (follow) aksiyonunu gerçekleştirebileceği bir buton sunar.
 * Bu bileşen, alıcıların satıcı hakkında güvenilir bilgi edinmesini sağlar.
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
