import { View, Text, Switch } from 'react-native'
import React, { FC } from 'react'
import getStyles from './notificationSettingsCard.style'
import { Icon } from 'components/commonComponents'
import { useTranslation } from 'react-i18next'

interface INotificationSettingsCardProps {
    icon: string,
    label: string
}

/**
 * NotificationSettingsCard: Ayarlar sayfasında (Settings Page), kullanıcıya belirli bir bildirim türünü (örneğin, "Yeni Mesajlar", "Promosyonlar" vb.) etkinleştirme veya devre dışı bırakma imkanı sunan standartlaştırılmış kart bileşenidir.
 *
 * Bildirim türünü temsil eden bir ikon (icon), çeviri destekli bir başlık metni (label) ve bu ayarın durumunu değiştirmek için bir Switch bileşeni içerir.
 * Kullanıcının bildirim tercihlerini kolayca yönetmesi için tasarlanmıştır.
 */

//iconları renkleri boyutu switch rengi diğer ayarlara tekrar bak !!
export const NotificationSettingsCard: FC<INotificationSettingsCardProps> = ({ icon, label }) => {
    const styles = getStyles()
    const { t } = useTranslation()
    return (
        <View style={styles.settingRow}>
            <Icon name={icon} type="Ionicons" style={styles.icon} />
            <Text style={styles.settingText}>{t(label)}</Text>
            <Switch />
        </View>
    )
}