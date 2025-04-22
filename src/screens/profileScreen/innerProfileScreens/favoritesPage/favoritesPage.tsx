import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { CustomHeader } from 'components/commonComponents'
import getStyles from './favoritesPage.style'
import { useTranslation } from 'react-i18next'
import { touch } from 'assets/index'
import { RecommenedProductCard } from 'components/profileScreenComponents/innerProfileScreenComponents/favoritesPageComponents'
import { recommenedList } from 'utils/helper'
import { Divider } from 'react-native-paper'

export const FavoritesPage = () => {

    const styles = getStyles()

    return (
        <View style={styles.container} >
            <CustomHeader headerTitle='myFavorites' />
            <NoFavoriteInfoSection onPress={() => null} />
            <Divider />
            <RecommendedProductsSection />
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

const RecommendedProductsSection = () => {

    const styles = getStyles()
    const { t } = useTranslation()
    const renderItem = ({ item }: any) => <RecommenedProductCard description={item.description} image={item.image} price={item.price} />

    return (
        <View>
            <Text style={styles.title}>{t("productsYouMayLike")}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={recommenedList}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}