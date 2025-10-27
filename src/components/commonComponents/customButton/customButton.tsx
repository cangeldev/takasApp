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

/**
 * CustomButton: Uygulama genelinde tekrar eden buton işlevselliğini tek bir merkezden yönetmek için tasarlanmış yeniden kullanılabilir (reusable) bileşendir.
 *
 * Farklı stilleri (birincil/primary ve ikincil/secondary) destekler ve bu varyantlara göre otomatik stil ayarlarını yapar.
 * Başlığı (title) çeviri (i18n) sistemi üzerinden alır, böylece dil desteği sunar.
 * Geniş bir özelleştirme için dışarıdan stil (style ve textStyle) prop'ları kabul eder.
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
