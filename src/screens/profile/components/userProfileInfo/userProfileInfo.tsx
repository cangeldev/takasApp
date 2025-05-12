import React from 'react'
import { View, Text } from 'react-native'
import { Icon, ProfileImage } from 'components/commonComponents'
import { useTranslation } from 'react-i18next'
import getStyles from './userProfileInfo.style'
import { ProfileStatsCard } from './components/profileStatsCard/profileStatsCard'

/*
  `UserProfileInfo`, kullanıcının profil bilgilerini gösteren bir bileşendir. Profil fotoğrafı, kullanıcı adı ve profil istatistiklerini içerir. 
  Ayrıca kullanıcı profilini güncellemek için bir ikon bulunur.
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