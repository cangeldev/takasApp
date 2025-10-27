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

/**
 * FavoriteProductCard: Favori Ürünler Bölümü (FavoriteProductsSection) içinde, kullanıcının favorilere eklediği tek bir ürünü detaylı bir şekilde listelemek için kullanılan kart yapısıdır.
 *
 * Ürünün görselini (image), güncel fiyatını (price), açıklamasını (description) ve bulunduğu konumu (address) gösterir.
 * Kartın sağ üst köşesinde, kullanıcının ürünü favorilerden hızlıca kaldırmasını sağlayan etkileşimli bir kalp simgesi (Icon) bulunur.
 * isFavorite state'i başlangıçta 'true' olarak ayarlanmıştır ve 'toggleFavorite' fonksiyonu ile kullanıcının kaldırma işlemi simge durumunu günceller (heart/heart-outline).
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