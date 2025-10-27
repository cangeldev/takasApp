import React from 'react'
import { Text, TouchableOpacity, Image, ImageSourcePropType } from 'react-native'
import { RadioButton } from 'react-native-paper'
import getStyles from './themeItem.style'
import { useTranslation } from 'react-i18next'

interface ThemeItemProps {
    item: { theme: string, title: string, image: ImageSourcePropType }
    selectedTheme: string
    onPress: (theme: string) => void
}

/**
 * ThemeItem: Tema Bölümü (ThemeSection) ekranında gösterilen, tek bir tema seçeneğini (örneğin, Açık veya Koyu Mod) temsil eden etkileşimli liste öğesidir.
 *
 * Temanın görsel bir önizlemesini (Image), çevrilmiş başlığını (themeText) ve bir RadioButton içerir.
 * RadioButton'ın durumu (checked/unchecked), global olarak seçili olan tema (selectedTheme) ile öğenin tema kodunu (item.theme) karşılaştırarak dinamik olarak belirlenir.
 * Kullanıcının öğeye dokunması, uygulama temasını değiştirecek olan 'onPress' aksiyonunu tetikler.
 */
export const ThemeItem = ({ item, selectedTheme, onPress }: ThemeItemProps) => {

    const styles = getStyles()
    const { t } = useTranslation()
    return (
        <TouchableOpacity style={styles.themeItem} onPress={() => onPress(item.theme)}>
            <Image source={item.image} style={styles.themeImage} />
            <Text style={styles.themeText}>{t(item.title)}</Text>
            <RadioButton
                value={item.theme}
                status={selectedTheme === item.theme ? "checked" : "unchecked"}
                color="#ff8c00"
            />
        </TouchableOpacity>
    )
}
export default ThemeItem
