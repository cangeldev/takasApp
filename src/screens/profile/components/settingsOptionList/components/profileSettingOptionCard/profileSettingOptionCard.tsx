import { TouchableOpacity, Text } from 'react-native'
import React, { FC } from 'react'
import getStyles from './profileSettingOptionCard.style'
import { Icon } from 'components/commonComponents'
import { useTranslation } from 'react-i18next'
import { iconType, RootStackParamList } from 'utils/types'
import { useAppNavigation } from 'hooks/useAppNavigation'

interface IProfileSettingOptionCardProps {
    title: string
    icontype: iconType
    iconName: string
    navigatePage?: keyof RootStackParamList
}

/**
 * ProfileSettingOptionCard: Ayarlar Seçeneği Listesi (SettingsOptionList) içinde kullanılan, tek bir ayar başlığını ve ilgili navigasyon aksiyonunu içeren etkileşimli kart bileşenidir.
 *
 * Kullanıcının, karta dokunarak (TouchableOpacity) uygulamadaki farklı ayar sayfalarına (örneğin, Kişisel Bilgiler, Bildirimler) geçiş yapmasını sağlar.
 *
 * Bileşen içeriği:
 * 1. İkon: Ayar türünü temsil eden bir ikon (iconName, icontype).
 * 2. Başlık: Çeviri destekli ayar başlığı (t(title)).
 * 3. Yönlendirme İkonu: Kullanıcıya aksiyonun bir navigasyon olduğunu belirten sağ ok ikonu.
 */
export const ProfileSettingOptionCard: FC<IProfileSettingOptionCardProps> = ({ title, iconName, icontype, navigatePage }) => {
    const navigation = useAppNavigation()
    const style = getStyles()
    const { t } = useTranslation()

    const onPress = () => {
        navigation.navigate(navigatePage as never)
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
