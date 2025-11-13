import React, { useEffect } from 'react'
import { Container } from 'container/container'
import { I18nextProvider } from 'react-i18next'
import { Provider, useDispatch } from 'react-redux'
import { AppStatusBar } from 'components/commonComponents'
import { store } from 'store/store'
import i18n from 'localization/i18next'
import { MenuProvider } from 'react-native-popup-menu'
import { initializeApp } from 'utils/initializeApp'
import Toast from 'react-native-toast-message'

/**
 * App bileşeni: Uygulamanın ana başlatma mantığını (tema/dil yükleme) ve i18n sağlayıcısını içerir.
 * Bu bileşen Redux Provider'ın altındadır, bu yüzden useDispatch'i kullanabilir.
 */
const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    let mounted = true
    const loadSettings = async () => {
      try {
        if (mounted) {
          await initializeApp(dispatch)
        }
      } catch (err) {
        console.error('Ayar yükleme hatası:', err)
      }
    }
    loadSettings()

    return () => {
      mounted = false
    }
  }, [dispatch])

  return (
    <I18nextProvider i18n={i18n}>
      <Container />
    </I18nextProvider>
  )
}

const Root = () => (
  <Provider store={store}>
    <AppStatusBar />
    <MenuProvider>
      <App />
      <Toast
        topOffset={10}
      />
    </MenuProvider>
  </Provider>
)

export default Root
