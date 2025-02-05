import React from 'react'
import { Container } from 'container/container'
import { I18nextProvider } from 'react-i18next'
import i18n from './src/utils/i18next'

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <Container />
    </I18nextProvider>
  )
}

export default App