import AsyncStorage from '@react-native-async-storage/async-storage'
import { store } from 'store/store'
import { setLanguage } from 'store/slices/languageSlice'
import { setTheme } from 'store/slices/themeSlice'
import i18n from 'localization/i18next'

// Başlangıç ayarlar fonksiyonu
export const loadSettings = async () => {

  try {
    const [storedTheme, storedLanguage] = await Promise.all([
      AsyncStorage.getItem('theme'),
      AsyncStorage.getItem('language'),
    ])
    storedTheme && store.dispatch(setTheme(storedTheme))
    storedLanguage && (i18n.changeLanguage(storedLanguage), store.dispatch(setLanguage(storedLanguage)))
  } catch (error) {
    console.error('Ayarları yüklerken hata oluştu:', error)
  }
}
