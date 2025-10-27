import React from 'react'
import { View, FlatList } from 'react-native'
import { notificationSettingsOptions } from 'utils/helper'
import getStyles from './notificationSettingsPage.style'
import { NotificationSettingsCard } from './components/notificationSettingsCard/notificationSettingsCard'

/**
 * NotificationSettingsPage: Kullanıcının uygulama içi bildirim tercihlerini yönettiği ayarlar ekranıdır.
 *
 * Çeşitli bildirim tiplerinin (kampanyalar, hatırlatıcılar, mesajlar vb.) listelendiği bir FlatList kullanır.
 * Kullanıcı, her bir bildirim ayarını NotificationSettingsCard bileşeni aracılığıyla kolayca açıp kapatabilir
 * ve böylece hangi bildirimleri almak istediğini kişiselleştirebilir.
 */
export const NotificationSettingsPage = () => {

    const renderItem = ({ item }: any) => <NotificationSettingsCard icon={item.icon} label={item.label} />
    const styles = getStyles()

    return (
        <View style={styles.container}>
            <FlatList
                data={notificationSettingsOptions}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
            />
        </View>
    )
}
export default NotificationSettingsPage
