import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { RadioButton } from 'react-native-paper'
import getStyles from './languageItem.style'

interface LanguageItemProps {
    item: { code: string, label: string, flag: string }
    selectedLanguage: string
    onPress: (code: string) => void
}

/*
  LanguageItem, kullanıcının istediği dili kullanması için seçim yapabildiği bir yardımcı bileşendir.
  Bu bileşen, kullanıcıya dil seçeneklerini radio buton şeklinde listelerken aynı zamanda istedikleri dili seçip uygulama üzerinde kullanmalarına olanak tanır.
*/
export const LanguageItem = ({ item, selectedLanguage, onPress }: LanguageItemProps) => {
    const styles = getStyles()

    return (
        <TouchableOpacity style={styles.languageItem} onPress={() => onPress(item.code)}>
            <Text style={styles.flag}>{item.flag}</Text>
            <Text style={styles.languageText}>{item.label}</Text>
            <RadioButton
                value={item.code}
                status={selectedLanguage === item.code ? "checked" : "unchecked"}
                color="#ff8c00"
            />
        </TouchableOpacity>
    )
}
export default LanguageItem
