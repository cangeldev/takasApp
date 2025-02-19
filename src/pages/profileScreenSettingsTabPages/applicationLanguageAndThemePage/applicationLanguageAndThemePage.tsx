import React, { useCallback, useState } from 'react'
import { View, Text, FlatList, Appearance, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'components/index'
import { languages, themeOptionsList } from 'utils/helper'
import AsyncStorage from '@react-native-async-storage/async-storage'
import styles from './style'
import { LanguageItem, ThemeItem } from 'components/languageAndThemeItems'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from 'features/reduxToolkit/themeSlice'
import { RootState } from 'features/reduxToolkit/store'

/*
  ApplicationLanguageAndThemePage, kullanıcının istediği temayı kullanması için seçim yapabildiği veya istediği dil seçeceğini seçebildiği sayfadır. 
  Bu ekran, kullanıcıya tema bilgilerini ve dil bilgilerini gösterirken, aynı zamanda istedikleri dil seç ve temayı seçip uygulama üzerinde kullanmalarına olanak tanır.
*/
export const ApplicationLanguageAndThemePage = () => {

    const navigation = useNavigation()
    const selectedTheme = useSelector((state: RootState) => state.themes.ThemeInfo.theme)

    const [selectedLanguage, setSelectedLanguage] = useState("fr")
    const dispatch = useDispatch()
    const handleThemeChange = useCallback(async (theme: string) => {
        try {
            const systemTheme = Appearance.getColorScheme() || "light"
            const newTheme = theme === "default" ? systemTheme : theme
            dispatch(setTheme(newTheme))
            console.log(newTheme)
            await AsyncStorage.setItem("theme", newTheme)
        } catch (error) {
            console.error("Tema kaydetme hatası:", error)
        }
    }, [])

    return (
        <ScrollView style={styles.container}>
            <Text>{selectedTheme}</Text>
            <HeaderSection navigation={navigation} />
            <ThemeSection selectedTheme={selectedTheme} onThemeChange={handleThemeChange} />
            <LanguageSection selectedLanguage={selectedLanguage} onLanguageChange={setSelectedLanguage} />
        </ScrollView>
    )
}

const { t } = useTranslation()
const HeaderSection = ({ navigation }: { navigation: any }) => (
    <View style={styles.header}>
        <Icon onPress={navigation.goBack} name="chevron-back-sharp" type="Ionicons" style={styles.backIcon} />
        <Text style={styles.headerTitle}>
            {t('languageAndThemeSettings')}
        </Text>
    </View>
)

const ThemeSection = ({ selectedTheme, onThemeChange }: { selectedTheme: string, onThemeChange: (theme: string) => void }) => (
    <View>
        <Text style={styles.sectionTitle}>{t('themeSelection')}</Text>
        <FlatList
            scrollEnabled={false}
            data={themeOptionsList}
            keyExtractor={(item) => item.theme}
            renderItem={({ item }) => (
                <ThemeItem item={item} selectedTheme={selectedTheme} onPress={onThemeChange} />
            )}
        />
    </View>
)

const LanguageSection = ({ selectedLanguage, onLanguageChange }: { selectedLanguage: string, onLanguageChange: (language: string) => void }) => (
    <View>
        <Text style={styles.sectionTitle}>{t('languageSelection')}</Text>
        <FlatList
            scrollEnabled={false}
            data={languages}
            keyExtractor={(item) => item.code}
            renderItem={({ item }) => (
                <LanguageItem item={item} selectedLanguage={selectedLanguage} onPress={onLanguageChange} />
            )}
        />
    </View>
)
export default ApplicationLanguageAndThemePage
