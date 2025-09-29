import { Text, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle } from 'react-native'
import React, { FC } from 'react'
import getStyles from './customButton.style'
import { useTranslation } from 'react-i18next'

interface ICustomButton extends TouchableOpacityProps {
    title: string
    variant?: 'primary' | 'secondary'
    onPress?: () => void
    style?: ViewStyle
    textStyle?: TextStyle
}

/*
  CustomButton, Uygulanın içerisinde farklı sayfalarda kullanılan butonların tek component altından kullanılması için tasarlanmış buton bileşenidir.
*/
export const CustomButton: FC<ICustomButton> = ({ title, variant = 'primary', onPress, style, textStyle, }) => {
    const styles = getStyles()
    const { t } = useTranslation()

    const buttonStyle =
        variant === 'primary' ? styles.primaryButton : styles.secondaryButton
    const titleStyle =
        variant === 'primary' ? styles.primaryButtonTitle : styles.secondaryButtonTitle

    return (
        <TouchableOpacity style={[buttonStyle, style]} onPress={onPress}>
            <Text style={[titleStyle, textStyle]}>{t(title)}</Text>
        </TouchableOpacity>
    )
}
