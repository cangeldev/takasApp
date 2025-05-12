import { View, Text, Image, ImageSourcePropType } from 'react-native'
import React, { FC, useState } from 'react'
import getStyles from './favoriteProductCard.style'
import { Icon } from 'components/commonComponents'

interface IFavoriteProductCardProps {
    image: ImageSourcePropType
    price: string
    description: string
    address: string
}

/*
  FavoriteProductCard, kullanıcı favorilerine eklediği ürünlerin listelenmesi için kullanılan kart yapısıdır. 
  kullanıcıların favorilediği ürünleri görebilmesini, güncelleyebilmesini takip edebilmesi ve diğer seçenekleri için gerekli tüm özellikleri içerir.
*/
export const FavoriteProductCard: FC<IFavoriteProductCardProps> = ({ image, price, description, address }) => {
    const styles = getStyles()
    const [isFavorite, setIsFavorite] = useState(true)

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite)
    }

    return (
        <View style={styles.cardContainer}>
            <Image source={image} style={styles.productImage} />
            <View style={styles.infoContainer}>
                <View style={styles.headerRow}>
                    <Text numberOfLines={1} style={styles.priceText}>{price} TL</Text>
                    <Icon
                        onPress={toggleFavorite}
                        name={isFavorite ? 'heart' : 'heart-outline'}
                        type='Ionicons'
                        style={isFavorite ? styles.favoriteIconSelected : styles.favoriteIcon}
                    />
                </View>
                <Text numberOfLines={3} style={styles.descriptionText}>{description}</Text>
                <Text numberOfLines={1} style={styles.addressText}>{address}</Text>
            </View>
        </View>
    )
}