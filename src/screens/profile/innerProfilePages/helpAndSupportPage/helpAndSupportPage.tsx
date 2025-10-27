import React from 'react'
import { ScrollView } from 'react-native'
import { ContactInfo, FaqSection, SupportForm } from './components'

/**
 * HelpAndSupportPage: Kullanıcılara sık sorulan sorular (SSS) aracılığıyla hızlı çözümler sunan ve doğrudan destek ekibiyle iletişime geçme imkanı veren sayfadır.
 *
 * Sıkça Sorulan Sorular (FaqSection), doğrudan destek talebi oluşturmak için kullanılan Destek Formu (SupportForm)
 * ve çeşitli iletişim kanallarını içeren İletişim Bilgileri (ContactInfo) bileşenlerini bir araya getirir.
 * Bu sayfa, kullanıcının uygulama ile ilgili sorunlarını çözmesine veya yardım almasına olanak tanır.
 */
export const HelpAndSupportPage = () => {
    return (
        <ScrollView>
            <FaqSection />
            <SupportForm />
            <ContactInfo />
        </ScrollView>
    )
}