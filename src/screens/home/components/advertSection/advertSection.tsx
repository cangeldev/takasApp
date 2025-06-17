import { Image } from 'react-native'
import React from 'react'
import images from 'assets/index'
import getStyles from './advertSection.style'

// AdvertSection, uygulama içide reklam göstermek veya bilgi paylaşımı yapmak için kullanılan bileşenidir.  
export const AdvertSection = () => {

    const styles = getStyles()
    return (
        <Image source={images.home.advert} style={styles.advertImage} />
    )
}
