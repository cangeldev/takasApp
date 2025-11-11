import { View, Text, Image } from 'react-native'
import React, { FC, useState } from 'react'
import getStyles from './recommendedProductCard.style'
import { useTranslation } from 'react-i18next'
import { Icon } from 'components/commonComponents'
import { ImageSourcePropType } from 'react-native'

interface IRecommenedProductCardProps {
    image: ImageSourcePropType
    price: number
    description: string
}

/**
 * RecommenedProductCard: Önerilen Ürünler Bölümü (RecommendedProductsSection) içinde kullanılan, tek bir ürünü kompakt bir kart formatında gösteren bileşendir.
 *
 * Ürünün görselini (image), fiyatını (price), kısa açıklamasını (description) ve kullanıcıya "Teklif Yap" (makeOffer) metnini görüntüler.
 * Kart, kullanıcının ürünü favorilere ekleyip kaldırmasını sağlayan etkileşimli bir kalp simgesi (Icon) içerir.
 * isFavorite state'i ile favori durumu takip edilir ve ikonun görünümü dinamik olarak güncellenir (heart/heart-outline).
 */
export const RecommenedProductCard: FC<IRecommenedProductCardProps> = ({ image, price, description }) => {
    const styles = getStyles()
    const { t } = useTranslation()
    const [isFavorite, setIsFavorite] = useState(false)

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite)
    }

    return (
        <View style={styles.cardContainer}>
            <Image source={image} style={styles.productImage} />
            <Text style={styles.priceText}>{price} TL</Text>
            <Text style={styles.descriptionText} numberOfLines={1}>{description}</Text>
            <Text style={styles.offerText}>
                {t('makeOffer')}
            </Text>
            <Icon
                onPress={toggleFavorite}
                name={isFavorite ? 'heart' : 'heart-outline'}
                type='Ionicons'
                style={isFavorite ? styles.favoriteIconSelected : styles.favoriteIcon}
            />
        </View>
    )
}