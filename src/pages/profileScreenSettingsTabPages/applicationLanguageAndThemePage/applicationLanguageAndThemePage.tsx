import React, { useCallback, useState } from 'react'
import { View, Text, FlatList, Appearance, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'components/index'
import { languages, themeOptionsList } from 'utils/helper'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from 'features/reduxToolkit/themeSlice'
import { RootState } from 'features/reduxToolkit/store'
import { t } from 'i18next'
import getStyles from './style'
import { LanguageItem, ThemeItem } from 'components/languageAndThemeItems'

export const ApplicationLanguageAndThemePage = () => {

    const navigation = useNavigation()
    const selectedTheme = useSelector((state: RootState) => state.themes.ThemeInfo.theme)

    const [selectedLanguage, setSelectedLanguage] = useState("fr")
    const dispatch = useDispatch()

    const handleThemeChange = useCallback(async (theme: string) => {
        try {
            const systemTheme = Appearance.getColorScheme() || "light"
            const newTheme = theme === "default" ? systemTheme : theme
            dispatch(setTheme(newTheme));
            await AsyncStorage.setItem("theme", newTheme)
        } catch (error) {
            console.error("Tema kaydetme hatası:", error)
        }
    }, [dispatch])

    const styles = getStyles()

    return (
        <ScrollView style={styles.container}>
            <HeaderSection navigation={navigation} styles={styles} />
            <ThemeSection selectedTheme={selectedTheme} onThemeChange={handleThemeChange} styles={styles} />
            <LanguageSection selectedLanguage={selectedLanguage} onLanguageChange={setSelectedLanguage} styles={styles} />
        </ScrollView>
    )
}

const HeaderSection = ({ navigation, styles }: { navigation: any, styles: any }) => (
    <View style={styles.header}>
        <Icon onPress={navigation.goBack} name="chevron-back-sharp" type="Ionicons" style={styles.backIcon} />
        <Text style={styles.headerTitle}>
            {t('languageAndThemeSettings')}
        </Text>
    </View>
)

const ThemeSection = ({ selectedTheme, onThemeChange, styles }: { selectedTheme: string, onThemeChange: (theme: string) => void, styles: any }) => (
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

const LanguageSection = ({ selectedLanguage, onLanguageChange, styles }: { selectedLanguage: string, onLanguageChange: (language: string) => void, styles: any }) => (
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
