import React from 'react'
import { FlatList, View } from 'react-native'
import getStyles from './settingsOptionList.style'
import { ProfileSettingsOptionsList } from 'utils/helper'
import { ProfileSettingOptionCard } from './components/profileSettingOptionCard/profileSettingOptionCard'

/**
 * SettingsOptionList: Profil Ekranında (ProfileScreen) yer alan ve kullanıcının hesap ayarlarını yönetebileceği tüm seçenekleri (örneğin, "Kişisel Bilgiler", "Adresler", "Bildirimler", "Güvenlik" vb.) listeleyen ana bileşendir.
 *
 * Ayar seçenekleri verisi `ProfileSettingsOptionsList` yardımcı yapısından alınır.
 * Bu veriler, bir FlatList içinde haritalanarak her bir ayar seçeneği için bir `ProfileSettingOptionCard` bileşeni oluşturulur.
 * Her kart, kullanıcı tıklandığında ilgili ayar sayfasına (navigatePage prop'u ile belirtilen) yönlendirme işlevini içerir.
 * Bu yapı, kullanıcıya hesap özelleştirmesi ve yönetimi için düzenli ve erişilebilir bir arayüz sunar.
 */
export const SettingsOptionList = () => {
    const styles = getStyles()

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <FlatList data={ProfileSettingsOptionsList} renderItem={({ item }) => <ProfileSettingOptionCard
                    key={item.id}
                    iconName={item.iconName}
                    icontype={item.type}
                    title={item.title}
                    navigatePage={item.navigatePage}
                />} />
            </View>
        </View>
    )
}
