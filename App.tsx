import React from 'react'
import { Container } from 'container/container'
import { I18nextProvider } from 'react-i18next'
import i18n from './src/utils/i18next'
import { StatusBarComponent } from 'components/index'

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <StatusBarComponent />
      <Container />
    </I18nextProvider>
  )
}

export default App