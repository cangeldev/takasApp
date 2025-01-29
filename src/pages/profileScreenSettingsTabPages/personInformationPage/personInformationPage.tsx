import { View, Text, ImageBackground } from 'react-native'
import React, { useCallback } from 'react'
import { Icon, NameVisibilitySectionComponent, ProfileImage, ProfilePageTextInput, StatusBarComponent } from 'components/index'
import style from './style'
import { gradient } from 'assets/index'
import { useNavigation } from '@react-navigation/native'

const MEMBER_INFO_TEXTS = [
  { icon: 'check-square', text: 'Telefon numarası doğrulandı.' },
  { icon: 'calendar', text: 'Bir ay önce üye oldu.' }
]

export const PersonInformationPage = () => {
  const navigation = useNavigation<any>()
  const goBack = useCallback(() => navigation.goBack(), [navigation])

  return (
    <View style={style.container}>
      <StatusBarComponent theme="light" translucent backgroundColor="transparent" />
      <HeaderSection onGoBack={goBack} />
      <InputSection />
      <NameVisibilitySection />
    </View>
  )
}

/* Header Section */
const HeaderSection = ({ onGoBack }: { onGoBack: () => void }) => (
  <ImageBackground source={gradient} style={style.headerBackground}>
    <Icon onPress={onGoBack} name="chevron-left" type="Entypo" style={style.backIcon} />
    <View style={style.profileSection}>
      <ProfileImageSection />
      <MemberInfoSection />
    </View>
  </ImageBackground>
)

/* Profile Image Section */
const ProfileImageSection = () => (
  <View style={style.profileImageContainer}>
    <ProfileImage />
    <Icon name="camera-plus-outline" type="MaterialCommunityIcons" style={style.cameraIcon} />
  </View>
)

/* Member Info Section */
const MemberInfoSection = () => (
  <View style={style.memberInfoContainer}>
    {MEMBER_INFO_TEXTS.map(({ icon, text }, index) => (
      <Text key={index} style={style.memberInfoText}>
        <Icon name={icon} type="Feather" style={style.memberInfoIcon} /> {text}
      </Text>
    ))}
  </View>
)

/* Input Section */
const InputSection = () => (
  <View style={style.inputSection}>
    <ProfilePageTextInput title="Kullanıcı Adı" />
    <ProfilePageTextInput title="Ad" />
    <ProfilePageTextInput title="Soyad" />
    <ProfilePageTextInput
      title="Şifre"
      placeHolder="******"
      iconName="chevron-right"
      iconType="Entypo"
      editable={false}
    />
    <ProfilePageTextInput title="Açıklama" placeHolder="Hakkınızda bir şeyler yazabilirsiniz" />
  </View>
)

/* Name Visibility Section */
const NameVisibilitySection = () => (
  <View style={style.descriptionContainer}>
    <Text style={style.descriptionText}>
      İlan verme, mesajlaşma, takas teklifi gönderme, gelen teklifleri cevaplama gibi özellikleri
      kullanırken diğer kullanıcıların adınızı nasıl göreceğini buradan seçebilirsiniz.
    </Text>
    <NameVisibilitySectionComponent />
  </View>
)  
