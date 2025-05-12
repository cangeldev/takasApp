import React from 'react'
import { ScrollView } from 'react-native'
import { ContactInfo, FaqSection, SupportForm } from './components'

/*
  Bu bileşen, kullanıcıların destek almak veya sorularını sormak için başvurabilecekleri bir yardım ve destek sayfası sunar.
  Sayfa, sıkça sorulan soruları (`FaqSection`), kullanıcıların iletişim formunu doldurabilecekleri bir destek formunu (`SupportForm`) ve iletişim bilgilerini (`ContactInfo`) içerir.
  Kullanıcılar, burada sorularını iletebilir, çözüm arayabilir veya destek ekibiyle iletişime geçebilirler.
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