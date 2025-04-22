import { View, Text, Image } from 'react-native'
import React, { FC, useState } from 'react'
import getStyles from './recommendedProductCard.style'

import { useTranslation } from 'react-i18next'
import { Icon } from 'components/commonComponents'


interface IRecommenedProductCardProps {
    image: any
    price: string
    description: string
}

export const RecommenedProductCard: FC<IRecommenedProductCardProps> = ({ image, price, description }) => {
    const styles = getStyles()
    const { t } = useTranslation()
    const [isFavorite, setIsFavorite] = useState(false)

    const handlePress = () => {
        setIsFavorite(!isFavorite)
    }

    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <Text style={styles.price}>{price} TL</Text>
            <Text style={styles.description} numberOfLines={1}>{description}</Text>
            <Text style={styles.tradeText}>
                {t('swap')}
            </Text>
            <Icon
                onPress={handlePress}
                name={isFavorite ? 'heart' : 'heart-outline'}
                type='Ionicons'
                style={isFavorite ? styles.heartIconSelected : styles.heartIcon}
            />
        </View>
    )
}