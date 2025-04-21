import React from 'react'
import { View, FlatList } from 'react-native'
import { notificationSettingsOptions } from 'utils/helper'
import getStyles from './notificationSettingsPage.style'
import { useTranslation } from 'react-i18next'
import { CustomHeader } from 'components/commonComponents'
import { NotificationSettingsCard } from 'components/profileScreenComponents/innerProfileScreenComponents/notificationSettingsPageComponents'

/*
  NotificationSettingsPage, bu sayfa kullanıcının bildirim ayarlarının listelendiği ve istediği ayarları açıp kapatması için tasarlanan sayfadır.
*/
export const NotificationSettingsPage = () => {

    const renderItem = ({ item }: any) => <NotificationSettingsCard icon={item.icon} label={item.label} />
    const styles = getStyles()
    const { t } = useTranslation()

    return (
        <View style={styles.container}>
            <CustomHeader headerTitle={t("notificationSettings")} />
            <FlatList
                data={notificationSettingsOptions}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
            />
        </View>
    )
}
export default NotificationSettingsPage
