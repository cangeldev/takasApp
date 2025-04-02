import { View, Text, Switch } from 'react-native'
import React, { FC } from 'react'
import getStyles from './style'
import { Icon } from 'components/index'

interface INotificationSettingsCard {
    icon: string,
    label: string
}
/*
  NotificationSettingsCard, bu card yapısı kullanıcının  bildirim ayarlarını görmesi ve istediği ayarları açıp kapatması için tasarlanan yapıdır.
*/

//iconları renkleri boyutu switch rengi diğer ayarlara tekrar bak !!
export const NotificationSettingsCard: FC<INotificationSettingsCard> = ({ icon, label }) => {
    const styles = getStyles()
    return (
        <View style={styles.settingRow}>
            <Icon name={icon} type="Ionicons" style={styles.icon} />
            <Text style={styles.settingText}>{label}</Text>
            <Switch />
        </View>
    )
}