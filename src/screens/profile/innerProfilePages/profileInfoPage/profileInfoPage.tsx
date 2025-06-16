import { View } from 'react-native'
import React from 'react'
import getStyles from './profileInfoPage.style'
import { AppStatusBar } from 'components/commonComponents'
import { HeaderSection, InputSection, NameVisibilitySection } from './components'

/*
  PersonInformationPage, kullanıcının kişisel bilgilerinin görüntülendiği ve çeşitli ayarların yapıldığı bir ekran bileşenidir. 
  Bu ekran, kullanıcıya profil bilgilerini gösterirken, aynı zamanda profil bilgilerini güncelleme fırsatı sunar.
  kullanıcıların profilini güncelleyebilmesi, isterlerse şifre değişikliği yapabilmeleri ve diğer kullanıcılar tarafından görüntülenecek kullanıcı adını seçebilecekleri bir radio buton bölümü bulunur.
*/
export const ProfileInfoPage = () => {
  const styles = getStyles()

  return (
    <View style={styles.container}>
      <AppStatusBar translucent backgroundColor="transparent" />
      <HeaderSection />
      <InputSection />
      <NameVisibilitySection />
    </View>
  )
}


