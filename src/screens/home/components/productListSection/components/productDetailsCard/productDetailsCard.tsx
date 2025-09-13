import { View, Text } from 'react-native'
import React, { useState } from 'react'
import getStyles from './productDetailsCard.style'
import { Icon, SearchBar } from 'components/commonComponents'
import { useNavigation } from '@react-navigation/native'

/*
  ProductDetailsCard, Bu kart yapısı ürünlerin görüntülenmesi ve detay bilgilere ulaşılabilmesi için kullanılan bileşendir.  
  Bu ekran, kullanıcıya ürünlerin resimlerini, fiyatını, ürün bilgisini gibi bilgileri gösteririrken istediğimiz ürünün detayına ulaşmamıza olanak tanır.   
*/
export const ProductDetailsCard = () => {

    const styles = getStyles()
    const navigation = useNavigation()
    const [isFavorite, setIsFavorite] = useState(false)

    const toggleFavorite = () => {
        setIsFavorite(prev => {
            return !prev
        })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon name='arrow-back' type='Ionicons' style={styles.headerIcon} onPress={() => navigation.goBack()} />
                <View style={styles.searchBarContainer}>
                    <SearchBar />
                </View>
                <Icon name='share' type='Entypo' style={styles.headerIcon} />
                <Icon
                    onPress={toggleFavorite}
                    name={isFavorite ? 'heart' : 'heart-outline'}
                    type="Ionicons"
                    style={isFavorite ? styles.favoriteIconSelected : styles.favoriteIcon}
                />
            </View>
        </View>
    )
}