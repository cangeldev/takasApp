import React from 'react'
import { View, Text, FlatList, Appearance, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'components/index'
import { getThemeOptionsList, languages, } from 'utils/helper'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from 'features/reduxToolkit/themeSlice'
import { RootState } from 'features/reduxToolkit/store'
import { useTranslation } from 'react-i18next'
import getStyles from './style'
import { LanguageItem, ThemeItem } from 'components/languageAndThemeItems'
import { setLanguage } from 'features/reduxToolkit/languageSlice'
import i18n from 'utils/i18next'

/*
  ApplicationLanguageAndThemePage, kullanıcının istediği temayı kullanması için seçim yapabildiği veya istediği dil seçeceğini seçebildiği sayfadır. 
  Bu ekran, kullanıcıya tema bilgilerini ve dil bilgilerini gösterirken, aynı zamanda istedikleri dil seç ve temayı seçip uygulama üzerinde kullanmalarına olanak tanır.
*/

export const ApplicationLanguageAndThemePage = () => {

    const themeOptionsList = getThemeOptionsList()
    const selectedTheme = useSelector((state: RootState) => state.themes.ThemeInfo.theme)
    const selectedLanguage = useSelector((state: RootState) => state.languages.LanguageInfo.language)
    const { t } = useTranslation()
    const dispatch = useDispatch()

    const systemTheme = Appearance.getColorScheme() || "light"

    const handleThemeChange = async (theme: string) => {
        try {
            const newTheme = theme === "default" ? systemTheme : theme
            dispatch(setTheme(newTheme))
            await AsyncStorage.setItem("theme", newTheme)
        } catch (error) {
            console.error("Tema kaydetme hatası:", error)
        }
    }

    const handleLanguageChange = async (language: string) => {
        try {
            i18n.changeLanguage(language)
            dispatch(setLanguage(language))
            await AsyncStorage.setItem("language", language)
        } catch (error) {
            console.error("Dil kaydetme hatası:", error)
        }
    }

    const styles = getStyles()

    return (
        <ScrollView style={styles.container}>
            <HeaderSection styles={styles} t={t} />
            <ThemeSection selectedTheme={selectedTheme} onThemeChange={handleThemeChange} styles={styles} t={t} themeOptionsList={themeOptionsList} />
            <LanguageSection selectedLanguage={selectedLanguage} onLanguageChange={handleLanguageChange} styles={styles} t={t} />
        </ScrollView>
    )
}

const HeaderSection = ({ styles, t }: { styles: any, t: any }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.header}>
            <Icon onPress={navigation.goBack} name="chevron-back-sharp" type="Ionicons" style={styles.backIcon} />
            <Text style={styles.headerTitle}>{t('languageAndThemeSettings')}</Text>
        </View>
    )
}

const ThemeSection = ({ selectedTheme, onThemeChange, styles, t, themeOptionsList }: { selectedTheme: string, onThemeChange: (theme: string) => void, styles: any, t: any, themeOptionsList: any }) => (
    <>
        <Text style={styles.sectionTitle}>{t('themeSelection')}</Text>
        <FlatList
            scrollEnabled={false}
            data={themeOptionsList}
            keyExtractor={(item) => item.theme}
            renderItem={({ item }) => (
                <ThemeItem item={item} selectedTheme={selectedTheme} onPress={onThemeChange} />
            )}
        />
    </>
)

const LanguageSection = ({ selectedLanguage, onLanguageChange, styles, t }: { selectedLanguage: string, onLanguageChange: (language: string) => void, styles: any, t: any }) => (
    <>
        <Text style={styles.sectionTitle}>{t('languageSelection')}</Text>
        <FlatList
            scrollEnabled={false}
            data={languages}
            keyExtractor={(item) => item.code}
            renderItem={({ item }) => (
                <LanguageItem item={item} selectedLanguage={selectedLanguage} onPress={onLanguageChange} />
            )}
        />
    </>
)

export default ApplicationLanguageAndThemePage
