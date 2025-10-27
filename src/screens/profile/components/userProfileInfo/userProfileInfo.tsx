import React from 'react'
import { View, Text } from 'react-native'
import { Icon, ProfileImage } from 'components/commonComponents'
import { useTranslation } from 'react-i18next'
import getStyles from './userProfileInfo.style'
import { ProfileStatsCard } from './components/profileStatsCard/profileStatsCard'

/**
 * UserProfileInfo: Profil Ekranının (ProfileScreen) üst kısmında yer alan ve kullanıcının temel kimlik bilgilerini ve uygulama içi istatistik özetini gösteren ana bileşendir.
 *
 * Bileşen içeriği:
 * 1. Profil Görseli: Kullanıcının profil fotoğrafını (ProfileImage) ve fotoğrafı güncelleme/değiştirme işlevini temsil eden bir kamera ikonu (camera-plus-outline) içerir.
 * 2. Kullanıcı Adı: Kullanıcının adını/kullanıcı adını ("Can GEL") gösterir.
 * 3. Profil İstatistikleri (statsCardContainer): Dört adet ProfileStatsCard alt bileşeni kullanarak kullanıcının önemli uygulama içi istatistiklerini (takas sayısı, takipçi, takip edilen, favori sayısı) listeler. Başlıklar çeviri (i18n) desteklidir.
 * Bu bölüm, kullanıcının profilini ilk bakışta görmesini ve istatistiklerini takip etmesini sağlar.
 */
export const UserProfileInfo = () => {
    const styles = getStyles()
    const { t } = useTranslation()

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.profileImageWrapper}>
                    <ProfileImage />
                    <Icon name="camera-plus-outline" type="MaterialCommunityIcons" style={styles.cameraOverlayIcon} />
                </View>
                <Text style={styles.userNameText}>Can GEL</Text>
            </View>
            <View style={styles.statsCardContainer}>
                <ProfileStatsCard count="0" title={t('exchange')} />
                <ProfileStatsCard count="0" title={t('followers')} />
                <ProfileStatsCard count="0" title={t('following')} />
                <ProfileStatsCard count="0" title={t('favorite')} />
            </View>
        </View>
    )
}