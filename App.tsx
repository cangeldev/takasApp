import React, { useEffect } from 'react'
import { Container } from 'container/container'
import { I18nextProvider } from 'react-i18next'
import i18n from './src/utils/i18next'
import { StatusBarComponent } from 'components/index'
import { Provider } from 'react-redux'
import { store } from 'features/reduxToolkit/store'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setTheme } from 'features/reduxToolkit/themeSlice'
import { setLanguage } from 'features/reduxToolkit/languageSlice'

const App = () => {
  
  useEffect(() => {
    const loadSettings = async () => {
      try {
        const [storedTheme, storedLanguage] = await Promise.all([
          AsyncStorage.getItem('theme'),
          AsyncStorage.getItem('language'),
        ])
        if (storedTheme) store.dispatch(setTheme(storedTheme as 'light' | 'dark'))
        if (storedLanguage) {
          i18n.changeLanguage(storedLanguage)
          store.dispatch(setLanguage(storedLanguage))
        }
      } catch (error) {
        console.error('Ayarları yüklerken hata oluştu:', error)
      }
    }
    loadSettings()
  }, [])

  return (
    <I18nextProvider i18n={i18n}>
      <Container />
    </I18nextProvider>
  )
}

const AppWrapper = () => (
  <Provider store={store}>
    <StatusBarComponent />
    <App />
  </Provider>
)

export default AppWrapper
