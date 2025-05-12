import { View, Text, Switch } from 'react-native'
import React, { FC } from 'react'
import getStyles from './notificationSettingsCard.style'
import { Icon } from 'components/commonComponents'
import { useTranslation } from 'react-i18next'

interface INotificationSettingsCardProps {
    icon: string,
    label: string
}

/*
  NotificationSettingsCard, bu card yapısı kullanıcının  bildirim ayarlarını görmesi ve istediği ayarları açıp kapatması için tasarlanan yapıdır.
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