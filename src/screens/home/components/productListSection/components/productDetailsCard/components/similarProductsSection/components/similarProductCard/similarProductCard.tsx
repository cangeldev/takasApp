import { View, Text, TouchableOpacity, Image, ImageSourcePropType } from 'react-native'
import React, { FC, useState } from 'react'
import { Icon } from 'components/commonComponents'
import getStyles from './similarProductCard.style'

interface ISimilarProductCard {
    title: string
    location: string
    price: number
    image: ImageSourcePropType
}

/*
  SimilarProductCard, SimilarProductsSection içindeki gösterilen ürüne benzer ürünleri listelerken kullanılacak bileşenlerin görüntülenmesi için kullanılan bileşendir.
*/
export const SimilarProductCard: FC<ISimilarProductCard> = ({ title, location, price, image }) => {
    const styles = getStyles()
    const [isFavorite, setIsFavorite] = useState<boolean>(false)
    const toggleFavorite = () => setIsFavorite(prev => !prev)
    return (
        <TouchableOpacity style={styles.card}>
            <Image source={image} style={styles.image} />
            <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteIconContainer}>
                <Icon
                    name={isFavorite ? 'heart' : 'heart-outline'}
                    type="Ionicons"
                    style={isFavorite ? styles.favoriteIconActive : styles.favoriteIcon}
                />
            </TouchableOpacity>
            <View style={styles.cardContent}>
                <Text style={styles.price}>{price} TL</Text>
                <Text numberOfLines={1} style={styles.title}>
                    {title}
                </Text>
                <Text numberOfLines={1} style={styles.location}>{location}</Text>
            </View>
        </TouchableOpacity>
    )
}
