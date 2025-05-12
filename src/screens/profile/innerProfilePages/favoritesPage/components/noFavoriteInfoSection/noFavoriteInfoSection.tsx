import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useTranslation } from 'react-i18next'
import images from 'assets/index'
import getStyles from './noFavoriteInfoSection.style'

/*
  Bu bileşen, kullanıcı favorilerine eklenmiş ürün olmadığında gösterilen bir bilgilendirme ekranıdır.
  Kullanıcıya favori ürünlerini eklemeleri için bir mesaj sunar ve ayrıca, ticaret seçenekleri değiştiğinde bildirim alacaklarını belirtir.
  `onPress` fonksiyonu, kullanıcı "Keşfet" butonuna tıkladığında çalıştırılır ve kullanıcının ürünleri keşfetmesine yönlendirilmesini sağlar.
  Ekranda ayrıca bir görsel ve açıklayıcı metinler de bulunur.
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
