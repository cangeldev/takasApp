import { setLanguage } from "store/slices/languageSlice"
import i18n from "./i18next"
import AsyncStorage from "@react-native-async-storage/async-storage"

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