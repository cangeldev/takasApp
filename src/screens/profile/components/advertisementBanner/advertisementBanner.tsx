import { View } from 'react-native'
import React from 'react'
import getStyles from './advertisementBanner.style'

/*
  `AdvertisementBanner`, kullanıcıya bir reklam alanı sunmak amacıyla kullanılan basit bir bileşendir.
  Bu bileşen genellikle uygulama içinde, özellikle ana içerikten sonra veya ekranın alt kısmında 
  reklamlar veya promosyonel içerikler göstermek için kullanılır. 
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