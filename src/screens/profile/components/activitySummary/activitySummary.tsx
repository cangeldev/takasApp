import React from 'react'
import { View } from 'react-native'
import { useTranslation } from 'react-i18next'
import images from 'assets/index'
import getStyles from './activitySummary.style'
import { ProfileActivitySummaryCard } from './components/profileActivitySummaryCard/profileActivitySummaryCard'

/**
 * ActivitySummary: Profil Ekranında (ProfileScreen) yer alan, kullanıcının uygulama içindeki takas ve etkileşim aktivitelerinin (alınan, bekleyen, verilen takaslar gibi) sayısal özetini sunan yatay bileşen grubudur.
 *
 * Üç adet ProfileActivitySummaryCard alt bileşenini içerir:
 * 1. "received" (Alınan Takaslar)
 * 2. "pendingExchanges" (Bekleyen Takaslar)
 * 3. "gave" (Verilen Takaslar)
 *
 * Her kart, çeviri destekli bir başlık (title) ve ilgili aktiviteyi temsil eden bir görsel (image) ile birlikte görüntülenir. Kartlar dikey bölücülerle (cardDivider) ayrılmıştır. Bu bölüm, kullanıcının uygulama performansını hızlıca gözden geçirmesini sağlar.
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
