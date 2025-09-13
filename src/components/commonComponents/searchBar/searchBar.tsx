import { View, TextInput } from 'react-native'
import React from 'react'
import getStyles from './searchBar.style'
import { Icon } from 'components/commonComponents'
import { useTranslation } from 'react-i18next'

/*
  SearchBar, Bu yapı ürünler arasınd aramalar yapmak ve listelemek için kullanılan bileşendir.  
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