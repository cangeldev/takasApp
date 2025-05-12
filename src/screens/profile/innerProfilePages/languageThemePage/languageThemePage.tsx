import React from 'react'
import { ScrollView } from 'react-native'
import { LanguageSection, ThemeSection } from './components'

/*
  Bu bileşen, kullanıcının uygulamanın dilini ve temasını değiştirebileceği bir ayar sayfasıdır.
  Kullanıcı, `ThemeSection` ve `LanguageSection` bileşenleri aracılığıyla tema ve dil tercihlerinde değişiklik yapabilir.
  Sayfa, tüm içeriklerin kaydırılabilir bir alanda gösterildiği bir `ScrollView` içinde yer alır.
*/
export const LanguageThemePage = () => {

    return (
        <ScrollView>
            <ThemeSection />
            <LanguageSection />
        </ScrollView>
    )
}
export default LanguageThemePage