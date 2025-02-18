import React from 'react'
import { Text, TouchableOpacity, Image } from 'react-native'
import { RadioButton } from 'react-native-paper'
import styles from './style'

interface ThemeItemProps {
    item: { theme: string, title: string, image: any }
    selectedTheme: string
    onPress: (theme: string) => void
}

/*
  ThemeItem, kullanıcının istediği temayı kullanması için seçim yapabildiği bir yardımcı bileşendir.
  Bu bileşen, kullanıcıya tema bilgilerini radio buton şeklinde listelerken aynı zamanda istedikleri temayı seçip uygulama üzerinde kullanmalarına olanak tanır.
*/
export const ThemeItem = ({ item, selectedTheme, onPress }: ThemeItemProps) => {
    return (
        <TouchableOpacity style={styles.themeItem} onPress={() => onPress(item.theme)}>
            <Image source={item.image} style={styles.themeImage} />
            <Text style={styles.themeText}>{item.title}</Text>
            <RadioButton
                value={item.theme}
                status={selectedTheme === item.theme ? "checked" : "unchecked"}
                color="#ff8c00"
            />
        </TouchableOpacity>
    )
}
export default ThemeItem
