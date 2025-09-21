import { View } from 'react-native'
import React, { FC } from 'react'
import { Icon } from 'components/commonComponents'
import getStyles from './headerSection.style'
import { useNavigation } from '@react-navigation/native'

interface IHeaderSection {
    toggleFavorite: () => void
    isFavorite: boolean
}

/*
  HeaderSection, Bu bileşen ProductDetailsCard yapısındaki header bölümündeki butonlar ve işlevleri için kullanılan bileşendir.
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
