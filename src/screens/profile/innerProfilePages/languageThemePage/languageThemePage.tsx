import React from 'react'
import { ScrollView } from 'react-native'
import getStyles from './languageThemePage.style'
import { Header } from 'components/commonComponents'
import { LanguageSection, ThemeSection } from './components'

/*
  Bu bileşen, kullanıcının uygulamanın dilini ve temasını değiştirebileceği bir ayar sayfasıdır.
  Kullanıcı, `ThemeSection` ve `LanguageSection` bileşenleri aracılığıyla tema ve dil tercihlerinde değişiklik yapabilir.
  Sayfa, tüm içeriklerin kaydırılabilir bir alanda gösterildiği bir `ScrollView` içinde yer alır.
*/
export const LanguageThemePage = () => {
    const styles = getStyles()

    return (
        <ScrollView style={styles.container}>
            <Header title={"languageAndThemeSettings"} />
            <ThemeSection />
            <LanguageSection />
        </ScrollView>
    )
}
export default LanguageThemePage