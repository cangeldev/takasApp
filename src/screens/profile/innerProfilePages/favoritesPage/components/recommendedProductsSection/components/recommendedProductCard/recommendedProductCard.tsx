import { View, Text, Image } from 'react-native'
import React, { FC, useState } from 'react'
import getStyles from './recommendedProductCard.style'
import { useTranslation } from 'react-i18next'
import { Icon } from 'components/commonComponents'
import { ImageSourcePropType } from 'react-native'

interface IRecommenedProductCardProps {
    image: ImageSourcePropType
    price: string
    description: string
}

/*
  Bu bileşen, kullanıcının daha önce incelediği veya favorilerine ekleyebileceği ürünleri göstermek için kullanılan bir kart yapısıdır.
  Her kart, ürünün görseli, fiyatı, açıklaması ve "Teklif Yap" metni ile birlikte bir kalp simgesi (favori butonu) içerir.
  Kullanıcı, ürünü favorilerine eklemek için kalp simgesine tıklayabilir; simge, favori durumu değiştikçe güncellenir.
  `isFavorite` durumu, kullanıcının ürünü favorilerine ekleyip eklemediğini takip eder.
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