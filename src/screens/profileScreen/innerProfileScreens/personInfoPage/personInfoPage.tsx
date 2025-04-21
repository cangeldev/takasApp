import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { gradient } from 'assets/index'
import { useNavigation } from '@react-navigation/native'
import getStyles from './personInfoPage.style'
import { useTranslation } from 'react-i18next'
import { MemberInfoTexts } from 'utils/helper'
import { Icon, ProfileImage, StatusBarComponent } from 'components/commonComponents'
import { NameVisibilitySectionComponent, PersonInfoPageTxtInput } from 'components/profileScreenComponents/innerProfileScreenComponents/personInfoPageComponents'

/*
  PersonInformationPage, kullanıcının kişisel bilgilerinin görüntülendiği ve çeşitli ayarların yapıldığı bir ekran bileşenidir. 
  Bu ekran, kullanıcıya profil bilgilerini gösterirken, aynı zamanda profil bilgilerini güncelleme fırsatı sunar.
  kullanıcıların profilini güncelleyebilmesi, isterlerse şifre değişikliği yapabilmeleri ve diğer kullanıcılar tarafından görüntülenecek kullanıcı adını seçebilecekleri bir radio buton bölümü bulunur.
*/
export const PersonInfoPage = () => {
  const navigation = useNavigation()
  const styles = getStyles()

  return (
    <View style={styles.container}>
      <StatusBarComponent translucent backgroundColor="transparent" />
      <HeaderSection onGoBack={navigation.goBack} />
      <InputSection />
      <NameVisibilitySection />
    </View>
  )
}

/* Header Section */
const HeaderSection = ({ onGoBack }: { onGoBack: () => void }) => {

  const styles = getStyles()

  return (
    <ImageBackground source={gradient} style={styles.headerBackground}>
      <Icon onPress={onGoBack} name="chevron-left" type="Entypo" style={styles.backIcon} />
      <View style={styles.profileSection}>
        <ProfileImageSection />
        <MemberInfoSection />
      </View>
    </ImageBackground>
  )
}

/* Profile Image Section */
const ProfileImageSection = () => {

  const styles = getStyles()

  return (
    <View style={styles.profileImageContainer}>
      <ProfileImage />
      <Icon name="camera-plus-outline" type="MaterialCommunityIcons" style={styles.cameraIcon} />
    </View>
  )
}

/* Member Info Section */
const MemberInfoSection = () => {

  const styles = getStyles()

  return (
    <View style={styles.memberInfoRow}>
      {MemberInfoTexts.map(({ icon, text }, index) => (
        <Text key={index} style={styles.memberInfoText}>
          <Icon name={icon} type="Feather" style={styles.memberInfoIcon} /> {text}
        </Text>
      ))}
    </View>
  )

}
/* Input Section */
const InputSection = () => {

  const styles = getStyles()
  const { t } = useTranslation()

  return (
    <View style={styles.inputSection}>
      {["username", "name", "surname"].map((field) => (
        <PersonInfoPageTxtInput key={field} title={t(field)} />
      ))}
      <PersonInfoPageTxtInput
        title={t("password")}
        placeHolder="******"
        iconName="chevron-right"
        iconType="Entypo"
        editable={false}
      />
      <PersonInfoPageTxtInput title={t("description")} placeHolder={t("youCanWriteSomethingAboutYourself")} />
    </View>
  )
}

/* Name Visibility Section */
const NameVisibilitySection = () => {

  const styles = getStyles()
  const { t } = useTranslation()

  return (
    <View style={styles.descriptionContainer}>
      <Text style={styles.descriptionText}>{t("selectNameText")}</Text>
      <NameVisibilitySectionComponent />
    </View>
  )
}