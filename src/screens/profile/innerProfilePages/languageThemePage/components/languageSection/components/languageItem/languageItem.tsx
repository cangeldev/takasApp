import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { RadioButton } from 'react-native-paper'
import getStyles from './languageItem.style'
import { useTranslation } from 'react-i18next'

interface LanguageItemProps {
    item: { code: string, label: string, flag: string }
    selectedLanguage: string
    onPress: (code: string) => void
}

/**
 * LanguageItem: Dil Seçimi (LanguageSection) ekranında gösterilen, tek bir dil seçeneğini temsil eden etkileşimli liste öğesidir.
 *
 * Dilin bayrağını (flag), çevrilmiş adını (languageText) ve bir RadioButton içerir.
 * RadioButton'ın durumu (checked/unchecked), global olarak seçili olan dil (selectedLanguage) ile öğenin kodunu (item.code) karşılaştırarak dinamik olarak belirlenir.
 * Kullanıcının öğeye dokunması, uygulama dilini değiştirecek olan 'onPress' aksiyonunu tetikler.
 */
export const LanguageItem = ({ item, selectedLanguage, onPress }: LanguageItemProps) => {
    const styles = getStyles()
    const { t } = useTranslation()
    return (
        <TouchableOpacity style={styles.languageItem} onPress={() => onPress(item.code)}>
            <Text style={styles.flag}>{item.flag}</Text>
            <Text style={styles.languageText}>{t(item.label)}</Text>
            <RadioButton
                value={item.code}
                status={selectedLanguage === item.code ? "checked" : "unchecked"}
                color="#ff8c00"
            />
        </TouchableOpacity>
    )
}
export default LanguageItem
