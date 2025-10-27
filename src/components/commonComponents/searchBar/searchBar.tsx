import { View, TextInput } from 'react-native'
import React from 'react'
import getStyles from './searchBar.style'
import { Icon } from 'components/commonComponents'
import { useTranslation } from 'react-i18next'

/**
 * SearchBar: Uygulamanın çeşitli ekranlarında (örneğin, Ana Ekran'da) kullanıcıların ürünler, kategoriler veya kullanıcılar arasında arama yapmasını sağlayan standartlaştırılmış arama giriş bileşenidir.
 *
 * Sol tarafta bir arama ikonu ('search') ve kullanıcı girişini sağlayan bir TextInput içerir.
 * Yer tutucu metni (placeholder), çoklu dil desteği (i18n) için 'homeSearchPlaceHolder' çeviri anahtarı ile dinamik olarak belirlenir.
 * Bu bileşen, arama işlevselliğini tetiklemek için birincil arayüz görevi görür.
 */
export const SearchBar = () => {

    const styles = getStyles()
    const { t } = useTranslation()

    return (
        <View style={styles.inputContainer}>
            <Icon name='search' type='Feather' style={styles.searchIcon} />
            <TextInput placeholderTextColor={"#5b5d5f"} placeholder={t("homeSearchPlaceHolder")} />
        </View>
    )
}