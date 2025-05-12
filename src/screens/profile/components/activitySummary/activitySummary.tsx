import React from 'react'
import { View } from 'react-native'
import { useTranslation } from 'react-i18next'
import images from 'assets/index'
import getStyles from './activitySummary.style'
import { ProfileActivitySummaryCard } from './components/profileActivitySummaryCard/profileActivitySummaryCard'

/*
  `ActivitySummary` bileşeni, kullanıcının profil etkinliklerini gösteren bir bileşendir. Bu bileşen, kullanıcının 
  aldığı, verdiği ve bekleyen takas işlemleri gibi etkinliklerini özetleyen kartlar içerir. 
  Kullanıcı, burada geçmiş takasları, bekleyen takasları ve yaptığı diğer aktiviteleri hızlıca görebilir.
*/
export const ActivitySummary = () => {
    const styles = getStyles()
    const { t } = useTranslation()

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <ProfileActivitySummaryCard image={images.other.received} title={t('received')} />
                <View style={styles.cardDivider} />
                <ProfileActivitySummaryCard image={images.other.replacement} title={t('pendingExchanges')} />
                <View style={styles.cardDivider} />
                <ProfileActivitySummaryCard image={images.other.gave} title={t('gave')} />
            </View>
        </View>
    )
}
