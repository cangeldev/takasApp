import { View, Text, Image, TouchableOpacity, FlatList, Alert } from 'react-native'
import React, { useState } from 'react'
import { CustomHeader, Divider, Icon } from 'components/commonComponents'
import getStyles from './favoritesPage.style'
import { useTranslation } from 'react-i18next'
import { touch } from 'assets/index'
import { FavoriteProductCard, RecommenedProductCard } from 'components/profileScreenComponents/innerProfileScreenComponents/favoritesPageComponents'
import { recommenedList } from 'utils/helper'
import { RadioButton } from 'react-native-paper'
import { Menu, MenuOptions, MenuOption, MenuTrigger, } from 'react-native-popup-menu'
import { renderers } from 'react-native-popup-menu'

const sortOptions = [
    "Önerilen",
    "En Düşük Fiyat",
    "En Yüksek Fiyat",
    "En Yeniler",
    "Çok Favorilenenler",
    "Mesafeye Göre",
    "Yayınlanma Tarihi",
]

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
    const { SlideInMenu } = renderers
    const [selectedOption, setSelectedOption] = useState<string | null>(null)

    const renderSortOptions = () =>
        sortOptions.map((option, index) => (
            <MenuOption key={index} onSelect={() => setSelectedOption(option)}>
                <View style={styles.themeItem}>
                    <RadioButton
                        value={option}
                        status={selectedOption === option ? 'checked' : 'unchecked'}
                        color={selectedOption === option ? 'red' : '#858585'}
                    />
                    <Text style={styles.sortOptionText}>{option}</Text>
                </View>
            </MenuOption>
        ))

    return (
        <View style={styles.filterSortContainer}>
            <Menu renderer={SlideInMenu}   >
                <MenuTrigger >
                    <View style={styles.filterSortButton}>
                        <Icon name="sort" type="FontAwesome6" style={styles.filterIcon} />
                        <Text style={styles.filterText}> {t("sortBy")} </Text>
                    </View>
                </MenuTrigger>
                <MenuOptions optionsContainerStyle={styles.menuOptionsContainer}>
                    <Text style={styles.titleText} >{t("sortBy")}</Text>
                    <Icon name="close-a" type="Fontisto" style={styles.closeIcon} />
                    {renderSortOptions()}
                </MenuOptions>
            </Menu>
            <Text style={styles.separator}>|</Text>
            <Menu renderer={SlideInMenu} >
                <MenuTrigger >
                    <View style={styles.filterSortButton}>
                        <Icon name="filter" type="FontAwesome" style={styles.filterIcon} />
                        <Text style={styles.filterText}> {t("filter")}</Text>
                    </View>
                </MenuTrigger>
                <MenuOptions>
                    <MenuOption onSelect={() => Alert.alert(`Save`)} text='Save' />
                    <MenuOption onSelect={() => Alert.alert(`Delete`)} >
                        <Text style={{ color: 'red' }}>Delete</Text>
                    </MenuOption>
                    <MenuOption onSelect={() => Alert.alert(`Not called`)} disabled={true} text='Disabled' />
                </MenuOptions>
            </Menu>
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

const renderFavoriteProductItem = ({ item }: any) => (
    <FavoriteProductCard description={item.description} image={item.image} price={item.price} address="Düzce, Merkez" />
)
const FavoriteProductsSection = () => {

    const styles = getStyles()
    const { t } = useTranslation()

    return (
        <View>
            <Text style={styles.bannerText}>
                <Icon name="dingding" type="AntDesign" style={styles.bannerIcon} />{" "}
                {t("yourFavoriteProductsForYou")}
            </Text>
            <FlatList
                data={recommenedList}
                renderItem={renderFavoriteProductItem}
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

const renderRecommenedProductItem = ({ item }: any) => (
    <RecommenedProductCard description={item.description} image={item.image} price={item.price} />
)
const RecommendedProductsSection = () => {

    const styles = getStyles()
    const { t } = useTranslation()

    return (
        <View>
            <Text style={styles.recommendedTitle}>{t("productsYouMayLike")}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={recommenedList}
                renderItem={renderRecommenedProductItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}
