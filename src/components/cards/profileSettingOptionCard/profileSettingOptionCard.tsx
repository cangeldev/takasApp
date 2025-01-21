import { TouchableOpacity, Text } from 'react-native'
import React, { FC } from 'react'
import { Icon } from 'components/icon/icon'
import style from './style'
import { useNavigation } from '@react-navigation/native'

interface IProfileSettingOptionCard {
    title: string
    icontype: any
    iconName: string
    navigatePage?: string
}

export const ProfileSettingOptionCard: FC<IProfileSettingOptionCard> = ({ title, iconName, icontype, navigatePage }) => {

    const navigation = useNavigation<any>()

    const onPress = () => {
        navigation.navigate(navigatePage)
    }
    return (
        <TouchableOpacity onPress={onPress} style={style.container}>
            <Icon name={iconName} type={icontype} style={style.icon} />
            <Text style={style.title}>
                {title}
            </Text>
            <Icon name="right" type="AntDesign" style={style.rightIcon} />
        </TouchableOpacity>
    )
}
