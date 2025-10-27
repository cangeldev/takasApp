import React from 'react'
import { ScrollView } from 'react-native'
import { LanguageSection, ThemeSection } from './components'

/**
 * LanguageThemePage: Kullanıcının uygulama içerisindeki dil (localization) ve tema (açık/koyu) ayarlarını yönettiği sayfadır.
 *
 * Bu sayfa, dil seçeneklerini sunan LanguageSection ve tema tercihlerini belirlemeye yarayan ThemeSection bileşenlerini içerir.
 * Kullanıcı, bu ayarlar aracılığıyla uygulamanın görünümünü ve kullanılan dilini kişiselleştirebilir.
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