import { View } from 'react-native'
import React, { FC } from 'react'
import { Icon } from 'components/commonComponents'
import getStyles from './headerSection.style'
import { useNavigation } from '@react-navigation/native'

interface IHeaderSection {
    toggleFavorite: () => void
    isFavorite: boolean
}

/**
 * HeaderSection: Ürün Detay sayfasının (ProductDetailsCard) üst kısmında yer alan, navigasyon ve temel aksiyon butonlarını içeren bileşendir.
 *
 * Temel olarak, önceki ekrana geri dönme (back), ürünü paylaşma (share) ve ürünü favorilere ekleme/çıkarma (heart/heart-outline) işlevlerini sunar.
 * isFavorite prop'una göre favori ikonunun durumunu dinamik olarak yönetir ve toggleFavorite aksiyonunu tetikler.
 */
export const HeaderSection: FC<IHeaderSection> = ({ isFavorite, toggleFavorite }) => {

    const navigation = useNavigation()
    const styles = getStyles()

    return (
        <View style={styles.header}>
            <Icon
                name="arrow-back"
                type="Ionicons"
                style={styles.backIcon}
                onPress={() => navigation.goBack()}
            />
            <Icon name="share" type="Entypo" style={styles.shareIcon} />
            <Icon
                onPress={toggleFavorite}
                name={isFavorite ? 'heart' : 'heart-outline'}
                type="Ionicons"
                style={isFavorite ? styles.favoriteIconActive : styles.favoriteIcon}
            />
        </View>
    )
}
