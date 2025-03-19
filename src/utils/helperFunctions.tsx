import AsyncStorage from '@react-native-async-storage/async-storage'
import { setTheme } from 'features/reduxToolkit/themeSlice'
import { setLanguage } from 'features/reduxToolkit/languageSlice'
import i18n from 'utils/i18next'
import { Appearance } from 'react-native'

// Tema değiştirme fonksiyonu
export const handleThemeChange = async (theme: any, dispatch: any) => {
    try {
        const systemTheme = Appearance.getColorScheme() || "light"
        const newTheme = theme === "default" ? systemTheme : theme
        dispatch(setTheme(newTheme))
        await AsyncStorage.setItem("theme", newTheme)
    } catch (error) {
        console.error("Tema kaydetme hatası:", error)
    }
}

// Dil değiştirme fonksiyonu
export const handleLanguageChange = async (language: any, dispatch: any) => {
    try {
        i18n.changeLanguage(language)
        dispatch(setLanguage(language))
        await AsyncStorage.setItem("language", language)
    } catch (error) {
        console.error("Dil kaydetme hatası:", error)
    }
}