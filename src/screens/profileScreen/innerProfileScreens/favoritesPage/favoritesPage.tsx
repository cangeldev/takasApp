import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { CustomHeader } from 'components/commonComponents'
import getStyles from './favoritesPage.style'
import { useTranslation } from 'react-i18next'
import { touch } from 'assets/index'

export const FavoritesPage = () => {

    const styles = getStyles()

    return (
        <View style={styles.container} >
            <CustomHeader headerTitle='Deneme' />
            <NoFavoriteInfoSection onPress={() => null} />
           
        </View>
    )
}


const NoFavoriteInfoSection = ({ onPress }: { onPress: () => void }) => {

    const styles = getStyles()
    const { t } = useTranslation()

    return (
        <View style={styles.infoView}>
            <Image source={touch} style={styles.infoImage} />
            <Text style={styles.infoText}>{t("favoriteTheProductsYouLike")}</Text>
            <Text style={styles.infoTextTwo}>{t("getNotifiedWhenTradeOptionsChange")}</Text>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text style={styles.buttonText}>{t("explore")}</Text>
            </TouchableOpacity>
        </View>
    )
}
