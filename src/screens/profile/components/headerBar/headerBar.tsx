import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'components/commonComponents'
import getStyles from './headerBar.style'

/*
  `HeaderBar`, uygulamanın üst kısmında yer alan, genellikle başlık ve bazı ikonik butonları içeren bir bileşendir. 
  Bu bileşen, kullanıcıya uygulamanın başlığını ve bazı hızlı erişim ikonlarını (örneğin, ayarlar ve bildirimler) sunar.
*/
export const HeaderBar = () => {
    const styles = getStyles()

    return (
        <View style={styles.container}>
            <Text style={styles.appTitleText}>Takasla</Text>
            <Icon name='setting' type='AntDesign' style={styles.iconButton} />
            <Icon name='bell' type='Fontisto' style={styles.iconButton} />
        </View>
    )
} 
