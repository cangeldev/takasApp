import { Text, TextInput, Pressable } from 'react-native'
import React, { FC } from 'react'
import getStyles from './profileInfoPageTxtInput.style'
import { Icon } from 'components/commonComponents'

interface IProfileInfoPageTxtInputProps {
    title: string
    placeHolder?: string,
    iconName?: any,
    iconType?: any,
    editable?: boolean
}

//  ProfileInfoPageTxtInput, bu component ProfilePage sayfasındaki, kullanıcının bilgilerini girmek için kullandığı bileşendir.
export const ProfileInfoPageTxtInput: FC<IProfileInfoPageTxtInputProps> = ({ title, placeHolder, iconName, iconType, editable }) => {

    const onPress = () => {
        editable === false && console.log("modal açıp şifre değiştir")
    }
    const style = getStyles()

    return (
        <Pressable onPress={onPress} style={style.container}>
            <TextInput style={style.txtInput} placeholder={placeHolder} editable={editable} />
            <Text style={style.title}>
                {title}
            </Text>
            {iconName && <Icon name={iconName} type={iconType} style={style.icon} />}
        </Pressable>
    )
}