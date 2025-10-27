import { View } from 'react-native'
import React from 'react'
import getStyles from './advertisementBanner.style'

/**
 * AdvertisementBanner: Profil Ekranı (ProfileScreen) ve diğer benzer ekranlarda, uygulamaya özel duyuruları, promosyonları veya dış kaynaklı reklamları göstermek için tasarlanmış basit bir yer tutucu (placeholder) bileşendir.
 *
 * Şu an için yalnızca görsel bir alan (styles.advert) sunmaktadır ve ileride dinamik reklam içeriği (örneğin, bir Image veya Slider) ile doldurulması amaçlanmıştır.
 * Kullanıcıya ana içerik akışının dışında ek bilgiler veya fırsatlar sunmak için kullanılır.
 */
export const AdvertisementBanner = () => {
    const styles = getStyles()

    return (
        <View style={styles.container}>
            <View style={styles.advert} />
        </View>
    )
}
export default AdvertisementBanner