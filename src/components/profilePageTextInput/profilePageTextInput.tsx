import { Text, TextInput, Pressable } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { Icon } from 'components/icon/icon'

interface IProfilePageTextInput {
    title: string
    placeHolder?: string,
    iconName?: any,
    iconType?: any,
    editable?: boolean
}

export const ProfilePageTextInput: FC<IProfilePageTextInput> = ({ title, placeHolder, iconName, iconType, editable }) => {

    const onPress = () => {
        editable === false && console.log("modal açıp şifre değiştir")
    }

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