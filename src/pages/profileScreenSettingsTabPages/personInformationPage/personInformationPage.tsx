import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { Icon, ProfileImage, ProfilePageTextInput, StatusBarComponent } from 'components/index'
import style from './style'
import { gradient } from 'assets/index'

export const PersonInformationPage = () => {
    const MemoizedIcon = React.memo(Icon)

    return (
        <View style={style.container}>
            <StatusBarComponent theme='light' translucent={true} backgroundColor={'transparent'} />
            <ImageBackground source={gradient} style={style.headerBackground}>
                <View style={style.profileSection}>
                    <View style={style.profileImageContainer}>
                        <ProfileImage />
                        <MemoizedIcon name='camera-plus-outline' type='MaterialCommunityIcons' style={style.cameraIcon} />
                    </View>
                    <View style={style.memberInfoContainer}>
                        <Text style={style.memberInfoText}>
                            <MemoizedIcon name='check-square' type='Feather' style={style.memberInfoIcon} /> Telefon numarası doğrulandı.
                        </Text>
                        <Text style={style.memberInfoText}>
                            <MemoizedIcon name='calendar' type='Feather' style={style.memberInfoIcon} />  Bir ay önce üye oldu
                        </Text>
                    </View>
                </View>
            </ImageBackground>

            <View style={style.inputSection}>
                <ProfilePageTextInput title={"Kullanıcı Adı"} />
                <ProfilePageTextInput title={"Ad"} />
                <ProfilePageTextInput title={"Soyad"} />
                <ProfilePageTextInput title={"Şifre"} placeHolder='******' iconName={"chevron-right"} iconType={"Entypo"} editable={false} />
                <ProfilePageTextInput title={"Açıklama"} placeHolder={"Hakkınızda bir şeyler yazabilirsiniz"} />
            </View>
            <View style={style.descriptionContainer}>
                <Text style={style.descriptionText}>
                    İlan verme, mesajlaşma, takas teklifi gönderme, gelen teklifleri cevaplama gibi özellikleri
                    kullanırken diğer kullanıcıların adınızı nasıl göreceğini buradan seçebilirsiniz.
                </Text>

            </View>
        </View >
    )
}
