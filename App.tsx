import React, { useEffect } from 'react'
import { Container } from 'container/container'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { loadInitialAppSettings } from 'utils/settingsLoader'
import { AppStatusBar } from 'components/commonComponents'
import { store } from 'store/store'
import i18n from './src/localization/i18next'
import { MenuProvider } from 'react-native-popup-menu'

const App = () => {

  useEffect(() => {
    (async () => {
      try {
        await loadInitialAppSettings()
      } catch (err) {
        console.error('Ayar yükleme hatası:', err)
      }
    })()
  }, [])

  return (
    <I18nextProvider i18n={i18n}>
      <Container />
    </I18nextProvider>
  )
}

export default () => (
  <Provider store={store}>
    <AppStatusBar />
    <MenuProvider>
      <App />
    </MenuProvider>
  </Provider>
)
