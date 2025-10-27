import { View } from 'react-native'
import React from 'react'
import getStyles from './profileInfoPage.style'
import { AppStatusBar } from 'components/commonComponents'
import { HeaderSection, InputSection, NameVisibilitySection } from './components'

/**
 * ProfileInfoPage: Kullanıcının temel kişisel bilgilerini görüntülediği ve güncellediği ayarlar ekranıdır.
 *
 * Ad, e-posta, telefon gibi bilgilerin girildiği InputSection, şifre değişikliği opsiyonları ve
 * diğer kullanıcıların göreceği isim/kullanıcı adı görünürlük ayarlarının yapıldığı NameVisibilitySection bileşenlerini içerir.
 * Kullanıcı bu sayfa üzerinden profilini yönetir ve günceller.
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


