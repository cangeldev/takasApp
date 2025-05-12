import { TouchableOpacity, Text } from 'react-native'
import React, { FC } from 'react'
import { useNavigation } from '@react-navigation/native'
import getStyles from './profileSettingOptionCard.style'
import { Icon } from 'components/commonComponents'
import { useTranslation } from 'react-i18next'

interface IProfileSettingOptionCardProps {
    title: string
    icontype: any
    iconName: string
    navigatePage?: string
}

/*
  `ProfileSettingOptionCard`, kullanıcıların ayar sayfalarına kolayca yönlendirilebileceği bir kart bileşenidir. 
  Bu bileşen, her bir ayar seçeneği için bir ikon, başlık ve yönlendirme işlevi sunar. 
  Kullanıcılar kartlara tıklayarak ilgili ayar sayfasına ulaşabilirler.
*/
export const ProfileSettingOptionCard: FC<IProfileSettingOptionCardProps> = ({ title, iconName, icontype, navigatePage }) => {
    const navigation = useNavigation<any>()
    const style = getStyles()
    const { t } = useTranslation()

    const onPress = () => {
        navigation.navigate(navigatePage)
    }

    return (
        <TouchableOpacity onPress={onPress} style={style.container}>
            <Icon name={iconName} type={icontype} style={style.icon} />
            <Text style={style.title}>
                {t(title)}
            </Text>
            <Icon name="right" type="AntDesign" style={style.rightIcon} />
        </TouchableOpacity>
    )
}
