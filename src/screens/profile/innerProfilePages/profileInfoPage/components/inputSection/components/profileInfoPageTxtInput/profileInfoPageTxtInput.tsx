import { Text, TextInput, Pressable } from 'react-native'
import React, { FC, useState } from 'react'
import getStyles from './profileInfoPageTxtInput.style'
import { Icon } from 'components/commonComponents'
import { iconType } from 'utils/types'

interface IProfileInfoPageTxtInputProps {
    title: string
    placeHolder?: string
    iconName?: string
    iconType?: iconType
    editable?: boolean
    multiline?: boolean,
    value?: string,
    onInputChange?: (inputText: string) => void
    onPress?: () => void,
    secureTextEntry?: boolean
    iconOnPress?: () => void,
}

/**
 * ProfileInfoPageTxtInput: Profil Bilgileri Sayfası (ProfileInfoPage) üzerinde, kullanıcının tek bir bilgi alanını (ad, soyad, şifre vb.) görüntülemesi ve düzenlemesi için kullanılan standartlaştırılmış giriş bileşenidir.
 *
 * Alanın başlığını (title) ve bir TextInput bileşenini içerir.
 * Eğer 'multiline' prop'u ayarlanırsa, çok satırlı metin girişi (açıklama alanı gibi) yapılabilir.
 * Eğer 'editable' prop'u 'false' ise (örneğin şifre alanı için), Pressable öğesine dokunulduğunda bir aksiyon tetiklenir (örn: şifre değiştirme modalı açılır).
 * Opsiyonel olarak, yönlendirme veya aksiyon belirtmek için bir ikon (iconName/iconType) gösterebilir.
 */
export const ProfileInfoPageTxtInput: FC<IProfileInfoPageTxtInputProps> = ({ multiline, title, placeHolder, iconName, iconType, editable, value, onInputChange, onPress, secureTextEntry, iconOnPress }) => {

    const style = getStyles()
    const [isSecureEntry, setIsSecureEntry] = useState(secureTextEntry)
    return (
        <Pressable onPress={onPress} style={style.container}>
            <TextInput onChangeText={onInputChange} multiline={multiline} style={style.txtInput} placeholder={placeHolder} editable={editable} value={value} secureTextEntry={isSecureEntry} />
            <Text style={style.title}>
                {title}
            </Text>
            {iconName && iconType && <Icon name={iconName} type={iconType} style={style.icon} onPress={iconOnPress} />}
            {secureTextEntry && <Icon name={isSecureEntry ? "eye-off" : "eye"} type="Ionicons" style={style.icon} onPress={() => setIsSecureEntry(!isSecureEntry)} />}
        </Pressable>
    )
}