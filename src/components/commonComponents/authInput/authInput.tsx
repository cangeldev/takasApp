import { View, TextInput, TouchableOpacity } from 'react-native'
import React, { FC, useCallback, useState } from 'react'
import getStyles from './authInput.style'
import { Icon } from '../icon/icon'
import { useTranslation } from 'react-i18next'

interface ILoginInput {
    placeholder: string
    onInputChange: (inputText: string) => void
    password?: boolean
}

/**
 * AuthInput
 * Kullanıcıların bilgi girişi yapmasını sağlayan bileşendir.
 * Giriş ve auth işlemleri sayfalarında kullanılır.
 */
export const AuthInput: FC<ILoginInput> = ({ placeholder, onInputChange, password }) => {
    const styles = getStyles()
    const [inputText, setInputText] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(password)
    const { t } = useTranslation()

    const handleTextChange = useCallback((text: string) => {
        setInputText(text)
        onInputChange(text)
    }, [onInputChange])

    return (
        <View style={styles.inputContainer}>
            <TextInput
                autoCapitalize='none'
                placeholder={t(placeholder)}
                secureTextEntry={password ? passwordVisible : false}
                value={inputText}
                onChangeText={handleTextChange}
                style={styles.input}
                numberOfLines={1}
            />
            {
                password && (
                    <TouchableOpacity
                        style={styles.eyeButton}
                        onPress={() => setPasswordVisible(!passwordVisible)}
                    >
                        <Icon
                            name={passwordVisible ? "eye-off" : "eye"}
                            type="Ionicons"
                            style={styles.eyeIcon}
                        />
                    </TouchableOpacity>
                )}
        </View>
    )
}
export default AuthInput