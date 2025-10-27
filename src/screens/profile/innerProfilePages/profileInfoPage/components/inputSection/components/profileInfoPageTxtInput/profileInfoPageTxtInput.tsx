import { Text, TextInput, Pressable } from 'react-native'
import React, { FC } from 'react'
import getStyles from './profileInfoPageTxtInput.style'
import { Icon } from 'components/commonComponents'

interface IProfileInfoPageTxtInputProps {
    title: string
    placeHolder?: string,
    iconName?: string,
    iconType?: any,
    editable?: boolean
    multiline?: boolean
}

/**
 * ProfileInfoPageTxtInput: Profil Bilgileri Sayfası (ProfileInfoPage) üzerinde, kullanıcının tek bir bilgi alanını (ad, soyad, şifre vb.) görüntülemesi ve düzenlemesi için kullanılan standartlaştırılmış giriş bileşenidir.
 *
 * Alanın başlığını (title) ve bir TextInput bileşenini içerir.
 * Eğer 'multiline' prop'u ayarlanırsa, çok satırlı metin girişi (açıklama alanı gibi) yapılabilir.
 * Eğer 'editable' prop'u 'false' ise (örneğin şifre alanı için), Pressable öğesine dokunulduğunda bir aksiyon tetiklenir (örn: şifre değiştirme modalı açılır).
 * Opsiyonel olarak, yönlendirme veya aksiyon belirtmek için bir ikon (iconName/iconType) gösterebilir.
 */
export const ProfileInfoPageTxtInput: FC<IProfileInfoPageTxtInputProps> = ({ multiline, title, placeHolder, iconName, iconType, editable }) => {

    const onPress = () => {
        editable === false && console.log("modal açıp şifre değiştir")
    }
    const style = getStyles()

    return (
        <Pressable onPress={onPress} style={style.container}>
            <TextInput multiline={multiline} style={style.txtInput} placeholder={placeHolder} editable={editable} />
            <Text style={style.title}>
                {title}
            </Text>
            {iconName && <Icon name={iconName} type={iconType} style={style.icon} />}
        </Pressable>
    )
}