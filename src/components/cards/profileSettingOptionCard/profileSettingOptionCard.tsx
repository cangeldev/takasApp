import { TouchableOpacity, Text } from 'react-native'
import React, { FC } from 'react'
import { Icon } from 'components/icon/icon'
import style from './style'

interface IProfileSettingOptionCard {
    title: string
    icontype: any
    iconName: string
}

export const ProfileSettingOptionCard: FC<IProfileSettingOptionCard> = ({ title, iconName, icontype }) => {
    return (
        <TouchableOpacity style={style.container}>
            <Icon name={iconName} type={icontype} style={style.icon} />
            <Text style={style.title}>
                {title}
            </Text>
            <Icon name="right" type="AntDesign" style={style.rightIcon} />
        </TouchableOpacity>
    )
}
