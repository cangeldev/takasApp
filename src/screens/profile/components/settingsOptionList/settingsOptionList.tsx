import React from 'react'
import { FlatList, View } from 'react-native'
import getStyles from './settingsOptionList.style'
import { ProfileSettingsOptionsList } from 'utils/helper'
import { ProfileSettingOptionCard } from './components/profileSettingOptionCard/profileSettingOptionCard'

/*
  `SettingsOptionList`, kullanıcının profil ayarlarıyla ilgili seçeneklerin gösterildiği bir bileşendir. 
  Bu ekran, kullanıcıya çeşitli ayar seçeneklerini sunar ve her seçeneğe tıklandığında ilgili ayar sayfasına yönlendirilir. 
  Profil ayarları, kullanıcı hesabıyla ilgili özelleştirmeleri yapabilmesini sağlar. 
  Ayar seçenekleri bir liste olarak görüntülenir ve her biri bir `ProfileSettingOptionCard` bileşeniyle temsil edilir.
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
