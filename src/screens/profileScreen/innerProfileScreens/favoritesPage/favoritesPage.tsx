import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { CustomHeader, Divider, Icon } from 'components/commonComponents'
import getStyles from './favoritesPage.style'
import { useTranslation } from 'react-i18next'
import { touch } from 'assets/index'
import { FavoriteProductCard, RecommenedProductCard } from 'components/profileScreenComponents/innerProfileScreenComponents/favoritesPageComponents'
import { recommenedList } from 'utils/helper'

export const FavoritesPage = () => {
    const styles = getStyles()

    return (
        <View style={styles.container}>
            <CustomHeader headerTitle="myFavorites" />
            <FavoriteProductsSection />
        </View>
    )
}

const FavoritesFilterSortHeader = () => {
    const styles = getStyles()
    const { t } = useTranslation()
    return (
        <View style={styles.filterSortContainer}>
            <TouchableOpacity style={styles.filterSortButton}>
                <Icon name="sort" type="FontAwesome6" style={styles.filterIcon} />
                <Text style={styles.filterText}> {t("sortBy")} </Text>
            </TouchableOpacity>
            <Text style={styles.separator}>|</Text>
            <TouchableOpacity style={styles.filterSortButton}>
                <Icon name="filter" type="FontAwesome" style={styles.filterIcon} />
                <Text style={styles.filterText}> {t("filter")}</Text>
            </TouchableOpacity>
        </View>
    )
}

const EmptyFavoritesContent = () => {
    return (
        <View >
            <NoFavoriteInfoSection onPress={() => null} />
            <Divider />
            <RecommendedProductsSection />
        </View>
    )
}

const FavoriteProductsSection = () => {
    
    const styles = getStyles()
    const { t } = useTranslation()

    const renderItem = ({ item }: any) => (
        <FavoriteProductCard description={item.description} image={item.image} price={item.price} address="Düzce, Merkez" />
    )

    return (
        <View>
            <Text style={styles.bannerText}>
                <Icon name="dingding" type="AntDesign" style={styles.bannerIcon} />{" "}
                {t("yourFavoriteProductsForYou")}
            </Text>
            <FlatList
                data={recommenedList}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                ListHeaderComponent={<FavoritesFilterSortHeader />}
                ListEmptyComponent={<EmptyFavoritesContent />}
                ItemSeparatorComponent={() => (
                    <View style={styles.itemSeparator} />
                )}
            />
        </View>
    )
}

const NoFavoriteInfoSection = ({ onPress }: { onPress: () => void }) => {
    const styles = getStyles()
    const { t } = useTranslation()

    return (
        <View style={styles.noFavoriteContainer}>
            <Image source={touch} style={styles.noFavoriteImage} />
            <Text style={styles.noFavoriteText}>{t("favoriteTheProductsYouLike")}</Text>
            <Text style={styles.noFavoriteSubText}>
                {t("getNotifiedWhenTradeOptionsChange")}
            </Text>
            <TouchableOpacity onPress={onPress} style={styles.exploreButton}>
                <Text style={styles.exploreButtonText}>{t("explore")}</Text>
            </TouchableOpacity>
        </View>
    )
}

const RecommendedProductsSection = () => {

    const styles = getStyles()
    const { t } = useTranslation()

    const renderItem = ({ item }: any) => (
        <RecommenedProductCard description={item.description} image={item.image} price={item.price} />
    )

    return (
        <View>
            <Text style={styles.recommendedTitle}>{t("productsYouMayLike")}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={recommenedList}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}
