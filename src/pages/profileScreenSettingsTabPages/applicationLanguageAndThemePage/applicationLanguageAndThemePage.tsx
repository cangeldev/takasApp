import React from 'react'
import { Text, FlatList, ScrollView } from 'react-native'
import { HeaderSection } from 'components/index'
import { getThemeOptionsList, languages } from 'utils/helper'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'features/reduxToolkit/store'
import { useTranslation } from 'react-i18next'
import getStyles from './style'
import { LanguageItem, ThemeItem } from 'components/languageAndThemeItems'
import { handleLanguageChange, handleThemeChange } from 'utils/helperFunctions'

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
    const styles = getStyles()

    return (
        <ScrollView style={styles.container}>
            <HeaderSection headerTitle={"languageAndThemeSettings"} />
            <ThemeSection selectedTheme={selectedTheme} onThemeChange={(theme: any) => handleThemeChange(theme, dispatch)} styles={styles} t={t} themeOptionsList={themeOptionsList} />
            <LanguageSection selectedLanguage={selectedLanguage} onLanguageChange={(language: any) => handleLanguageChange(language, dispatch)} styles={styles} t={t} />
        </ScrollView>
    )
}

const ThemeSection = ({ selectedTheme, onThemeChange, styles, t, themeOptionsList }: any) => (
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

const LanguageSection = ({ selectedLanguage, onLanguageChange, styles, t }: any) => (
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