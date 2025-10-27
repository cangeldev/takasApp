import { Image } from 'react-native'
import React from 'react'
import images from 'assets/index'
import getStyles from './advertSection.style'

/**
 * AdvertSection: Ana ekranda (HomeScreen) veya diğer ilgili sayfalarda, kullanıcılara duyuru, promosyon, kampanya veya önemli bir bilgilendirme mesajını görsel olarak iletmek için kullanılan basit bir görsel bileşendir.
 *
 * İçerik, sabit bir görsel (Image - images.home.advert) aracılığıyla sunulur. Bu bileşen, sadece görselin render edilmesinden sorumludur ve dinamik veri (örneğin, kaydırılabilir reklamlar) veya etkileşim (örneğin, tıklanabilir bağlantı) ek işlevleri için genişletilebilir.
 */
export const AdvertSection = () => {

    const styles = getStyles()
    return (
        <Image source={images.home.advert} style={styles.advertImage} />
    )
}
