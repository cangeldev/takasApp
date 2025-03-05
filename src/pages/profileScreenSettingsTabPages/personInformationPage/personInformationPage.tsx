import { View, Text, ImageBackground } from 'react-native'
import React, { useCallback } from 'react'
import { Icon, NameVisibilitySectionComponent, ProfileImage, ProfilePageTextInput, StatusBarComponent } from 'components/index'
import { gradient } from 'assets/index'
import { useNavigation } from '@react-navigation/native'
import getStyles from './style'
import { t } from 'i18next'
import { MemberInfoTexts } from 'utils/helper'

/*
  PersonInformationPage, kullanıcının kişisel bilgilerinin görüntülendiği ve çeşitli ayarların yapıldığı bir ekran bileşenidir. 
  Bu ekran, kullanıcıya profil bilgilerini gösterirken, aynı zamanda profil bilgilerini güncelleme fırsatı sunar.
  kullanıcıların profilini güncelleyebilmesi, isterlerse şifre değişikliği yapabilmeleri ve diğer kullanıcılar tarafından görüntülenecek kullanıcı adını seçebilecekleri bir radio buton bölümü bulunur.
*/

export const PersonInformationPage = () => {

  const navigation = useNavigation<any>()
  const goBack = useCallback(() => navigation.goBack(), [navigation])
  const styles = getStyles()

  return (
    <View style={styles.container}>
      <StatusBarComponent translucent backgroundColor="transparent" />
      <HeaderSection onGoBack={goBack} styles={styles} />
      <InputSection styles={styles} />
      <NameVisibilitySection styles={styles} />
    </View>
  )
}

/* Header Section */
const HeaderSection = ({ onGoBack, styles }: { onGoBack: () => void, styles: any }) => (
  <ImageBackground source={gradient} style={styles.headerBackground}>
    <Icon onPress={onGoBack} name="chevron-left" type="Entypo" style={styles.backIcon} />
    <View style={styles.profileSection}>
      <ProfileImageSection styles={styles} />
      <MemberInfoSection styles={styles} />
    </View>
  </ImageBackground>
)

/* Profile Image Section */
const ProfileImageSection = ({ styles }: { styles: any }) => (
  <View style={styles.profileImageContainer}>
    <ProfileImage />
    <Icon name="camera-plus-outline" type="MaterialCommunityIcons" style={styles.cameraIcon} />
  </View>
)

/* Member Info Section */
const MemberInfoSection = ({ styles }: { styles: any }) => (
  <View style={styles.memberInfoContainer}>
    {MemberInfoTexts.map(({ icon, text }, index) => (
      <Text key={index} style={styles.memberInfoText}>
        <Icon name={icon} type="Feather" style={styles.memberInfoIcon} /> {text}
      </Text>
    ))}
  </View>
)

/* Input Section */
const InputSection = ({ styles }: { styles: any }) => (
  <View style={styles.inputSection}>
    <ProfilePageTextInput title={t('username')} />
    <ProfilePageTextInput title={t('name')} />
    <ProfilePageTextInput title={t('surname')} />
    <ProfilePageTextInput
      title={t('password')}
      placeHolder="******"
      iconName="chevron-right"
      iconType="Entypo"
      editable={false}
    />
    <ProfilePageTextInput title={t('description')} placeHolder={t('youCanWriteSomethingAboutYourself')} />
  </View>
)

/* Name Visibility Section */
const NameVisibilitySection = ({ styles }: { styles: any }) => (
  <View style={styles.descriptionContainer}>
    <Text style={styles.descriptionText}>
      {t('selectNameText')}
    </Text>
    <NameVisibilitySectionComponent />
  </View>
)  
