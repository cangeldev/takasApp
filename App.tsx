import React, { useEffect } from 'react'
import { Container } from 'container/container'
import { I18nextProvider } from 'react-i18next'
import i18n from './src/utils/i18next'
import { StatusBarComponent } from 'components/index'
import { Provider, useDispatch } from 'react-redux'
import { store } from 'features/reduxToolkit/store'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { setTheme } from 'features/reduxToolkit/themeSlice'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem('theme')
        if (storedTheme) {
          dispatch(setTheme(storedTheme as 'light' | 'dark'))
        }
      } catch (error) {
        console.error('Tema alma hatası:', error)
      }
    }

    fetchTheme()
  }, [dispatch])

  return (
    <I18nextProvider i18n={i18n}>
      <StatusBarComponent />
      <Container />
    </I18nextProvider>
  )
}

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default AppWrapper
