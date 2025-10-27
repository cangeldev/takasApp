import { setLanguage } from "store/slices/languageSlice"
import i18n from "./i18next"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Language } from "utils/types"
import { AppDispatch } from "store/store"

/**
 * handleLanguageChange: Uygulamanın çalışma anındaki dilini (localization) ve Redux store'daki dil durumunu güncelleyen asenkron yardımcı fonksiyondur.
 *
 * 1. i18n kütüphanesini kullanarak uygulamanın geçerli dilini değiştirir (i18n.changeLanguage).
 * 2. Redux store'daki dil durumunu günceller (dispatch(setLanguage)).
 * 3. Seçilen yeni dil kodunu kalıcı depolamaya (AsyncStorage) kaydeder, böylece uygulama yeniden başlatıldığında bile dil tercihi korunur.
 * Hata durumunda konsola bilgilendirici bir mesaj yazar.
 */
export const handleLanguageChange = async (language: Language, dispatch: AppDispatch) => {
    try {
        i18n.changeLanguage(language)
        dispatch(setLanguage(language))
        await AsyncStorage.setItem("language", language)
    } catch (error) {
        console.error("Dil kaydetme hatası:", error)
    }
}