import React from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'components/commonComponents'
import getStyles from './headerBar.style'

/**
 * HeaderBar: Profil Ekranı (ProfileScreen) ve diğer üst düzey ekranların en üstünde yer alan, uygulamanın başlığını ve temel hızlı erişim aksiyonlarını (Ayarlar ve Bildirimler) içeren standartlaştırılmış başlık bileşenidir.
 *
 * 1. Uygulama Başlığı: Sol tarafta "Takasla" metni gösterilir.
 * 2. Hızlı Erişim İkonları: Sağ tarafta kullanıcıyı Ayarlar ('setting' - AntDesign) ve Bildirimler ('bell' - Fontisto) ekranlarına yönlendirecek iki adet ikonik buton bulunur.
 * Bu bileşen, kullanıcının bu temel işlevlere kolayca ulaşmasını sağlar.
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
