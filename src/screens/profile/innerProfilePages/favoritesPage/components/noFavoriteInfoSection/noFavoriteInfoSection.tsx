import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useTranslation } from 'react-i18next'
import images from 'assets/index'
import getStyles from './noFavoriteInfoSection.style'

/**
 * NoFavoriteInfoSection: Kullanıcının favori listesi boş olduğunda (EmptyFavoritesContent bileşeni içinde) gösterilen bilgilendirme ve yönlendirme kartıdır.
 *
 * Kullanıcıyı favori ürünleri eklemeye teşvik eden ana metni (favoriteTheProductsYouLike) ve ek fayda sağlayan alt metni (getNotifiedWhenTradeOptionsChange) gösterir.
 * Bir görsel (Image) ile durumu destekler.
 * Kullanıcının uygulama ana ekranına veya keşfetme sayfasına gitmesini sağlayan etkileşimli bir "Keşfet" butonu (exploreButton) içerir ve bu butona basıldığında 'onPress' fonksiyonu tetiklenir.
 */
export const NoFavoriteInfoSection = ({ onPress }: { onPress: () => void }) => {
    const styles = getStyles()
    const { t } = useTranslation()

    return (
        <View style={styles.noFavoriteContainer}>
            <Image source={images.other.touch} style={styles.noFavoriteImage} />
            <Text style={styles.noFavoriteText}>{t('favoriteTheProductsYouLike')}</Text>
            <Text style={styles.noFavoriteSubText}>
                {t('getNotifiedWhenTradeOptionsChange')}
            </Text>
            <TouchableOpacity onPress={onPress} style={styles.exploreButton}>
                <Text style={styles.exploreButtonText}>{t('explore')}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default NoFavoriteInfoSection
