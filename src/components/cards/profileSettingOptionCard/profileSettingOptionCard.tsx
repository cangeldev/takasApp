import { TouchableOpacity, Text } from 'react-native'
import React, { FC } from 'react'
import { Icon } from 'components/icon/icon'
import { useNavigation } from '@react-navigation/native'
import getStyles from './style'

interface IProfileSettingOptionCard {
    title: string
    icontype: any
    iconName: string
    navigatePage?: string
}

/*
  ProfileSettingOptionCard, bu card yapısı ayarlar kısmındaki seçeneklerin görünmesi ve istenilen sayfaya ulaşması için tasarlanan yapıdır.
*/
export const ProfileSettingOptionCard: FC<IProfileSettingOptionCard> = ({ title, iconName, icontype, navigatePage }) => {

    const navigation = useNavigation<any>()
    const style = getStyles()
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
