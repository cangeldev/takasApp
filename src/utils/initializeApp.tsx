import AsyncStorage from '@react-native-async-storage/async-storage'
import { AppDispatch } from 'store/store'
import { setLanguage } from 'store/slices/languageSlice'
import { setTheme } from 'store/slices/themeSlice'
import i18n from 'localization/i18next'
import { Theme, Language } from 'utils/types'

/**
 * Uygulama başlatıldığında AsyncStorage'dan kullanıcı tercihlerini (Tema ve Dil) yükler 
 * ve Redux ile i18n sistemlerini bu tercihlere göre günceller.
 * @param dispatch - Redux store dispatch fonksiyonu
 */
export const initializeApp = async (dispatch: AppDispatch) => {
  try {
    const [storedTheme, storedLanguage] = await Promise.all([
      AsyncStorage.getItem('theme'),
      AsyncStorage.getItem('language'),
    ])

    if (storedTheme) {
      dispatch(setTheme(storedTheme as Theme))
    }

    if (storedLanguage) {
      await i18n.changeLanguage(storedLanguage)
      dispatch(setLanguage(storedLanguage as Language))
    }
  } catch (error) {
    console.error('App Initialization Error:', error)
  }
}