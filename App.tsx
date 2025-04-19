import React, { useEffect } from 'react'
import { Container } from 'container/container'
import { I18nextProvider } from 'react-i18next'
import i18n from './src/utils/i18next'
import { StatusBarComponent } from 'components/index'
import { Provider } from 'react-redux'
import { store } from 'features/reduxToolkit/store'
import { loadSettings } from 'utils/helperFunctions'

const App = () => {

  useEffect(() => {
    (async () => {
      try {
        await loadSettings()
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
    <StatusBarComponent />
    <App />
  </Provider>
)
