import React from 'react'
import { View, FlatList } from 'react-native'
import { notificationSettingsOptions } from 'utils/helper'
import { HeaderSection } from 'components/index'
import getStyles from './style'
import { NotificationSettingsCard } from 'components/cards'
import { useTranslation } from 'react-i18next'

/*
  NotificationSettingsPage, bu sayfa kullanıcının bildirim ayarlarının listelendiği ve istediği ayarları açıp kapatması için tasarlanan sayfadır.
*/
export const NotificationSettingsPage = () => {

    const renderItem = ({ item }: any) => <NotificationSettingsCard icon={item.icon} label={item.label} />
    const styles = getStyles()
    const { t } = useTranslation()

    return (
        <View style={styles.container}>
            <HeaderSection headerTitle={t("notificationSettings")} />
            <FlatList
                data={notificationSettingsOptions}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
            />
        </View>
    )
}
export default NotificationSettingsPage
