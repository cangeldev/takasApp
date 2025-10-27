import React, { useState } from 'react'
import { View, Text, Image, ImageSourcePropType, TouchableWithoutFeedback } from 'react-native'
import { Icon } from 'components/commonComponents'
import getStyles from './productCard.style'
import images from 'assets/index'
import { useTranslation } from 'react-i18next'
import { useAppNavigation } from 'hooks/useAppNavigation'

interface ProductCardProps {
    image: ImageSourcePropType
    title: string
    price: number
    oldPrice: number
    likes: number
    swap?: boolean
}

/**
 * ProductCard: Uygulama genelindeki ürün listelemelerinde (ProductListSection, arama sonuçları vb.) kullanılan, tek bir ürünü kompakt bir şekilde temsil eden etkileşimli kart bileşenidir.
 *
 * Kullanıcı bu karta dokunduğunda (TouchableWithoutFeedback), 'ProductDetailsCard' ekranına navigasyon sağlar.
 *
 * Ürünün temel bilgileri şunlardır:
 * 1. Görsel (Image), Başlık (title), Fiyat (price), İndirimli Fiyat (oldPrice) bilgileri.
 * 2. Takas/Kargo Durumu: 'swap' prop'una bağlı olarak takas (images.home.swap) veya kargo (images.home.cargo) durumunu belirten bir rozet (badgeIcon) gösterir.
 * 3. Favori/Beğeni: Ürünü favorilere ekleme/kaldırma işlevini (toggleFavorite) ve güncel beğeni sayısını (currentLikes) gösterir.
 * 4. Fiyat Gösterimi (renderPrice): Fiyat '0' ise "Sadece Takas Teklifleri" ('onlyTradeOffers') metnini, aksi halde mevcut ve varsa eski fiyatı (oldPrice) gösterir.
 */
export const ProductCard: React.FC<ProductCardProps> = ({
    image, title, price, oldPrice, likes, swap
}) => {
    const { t } = useTranslation()
    const navigation = useAppNavigation()
    const styles = getStyles()
    const [isFavorite, setIsFavorite] = useState(false)
    const [currentLikes, setCurrentLikes] = useState(likes)

    const toggleFavorite = () => {
        setIsFavorite(prev => {
            setCurrentLikes(prevLikes => prevLikes + (prev ? -1 : 1))
            return !prev
        })
    }

    const renderPrice = () =>
        price === 0 ? (
            <Text style={styles.newPrice}>{t('onlyTradeOffers')}</Text>
        ) : (
            <View style={styles.priceView}>
                {oldPrice !== 0 && <Text style={styles.oldPrice}>{oldPrice} TL</Text>}
                <Text style={styles.newPrice}>{price} TL</Text>
            </View>
        )

    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("ProductDetailsCard")}>
            <View style={styles.container}>
                <View style={styles.imageWrapper}>
                    <Image source={image} style={styles.productImage} resizeMode="cover" />
                    <View style={styles.likeWrapper}>
                        <Icon
                            onPress={toggleFavorite}
                            name={isFavorite ? 'heart' : 'heart-outline'}
                            type="Ionicons"
                            style={isFavorite ? styles.favoriteIconSelected : styles.favoriteIcon}
                        />
                        <Text style={styles.likeCount}>{currentLikes}</Text>
                    </View>
                    <Image source={swap ? images.home.swap : images.home.cargo} style={styles.badgeIcon} />
                </View>
                <Text numberOfLines={1} style={styles.productTitle}>{title}</Text>
                <View style={styles.priceContainer}>{renderPrice()}</View>
            </View>
        </TouchableWithoutFeedback>
    )
}
