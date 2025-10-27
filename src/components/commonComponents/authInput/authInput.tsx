import { View, TextInput, TouchableOpacity } from 'react-native'
import React, { FC, useCallback, useState } from 'react'
import getStyles from './authInput.style'
import { Icon } from '../icon/icon'
import { useTranslation } from 'react-i18next'

interface IAuthInput {
    placeholder: string
    onInputChange: (inputText: string) => void
    isSecure?: boolean
}

/**
 * AuthInput: Giriş (Login) ve Kayıt (Register) gibi kimlik doğrulama akışlarında kullanılan, standartlaştırılmış metin giriş bileşenidir.
 *
 * Kullanıcı girişini (inputText) yönetir ve değişiklikleri üst bileşene iletir (onInputChange).
 * 'isSecure' prop'u ayarlanmışsa, şifre gizleme işlevselliği sunar; bu durumda, kullanıcıya şifreyi gizleme/gösterme (eye/eye-off ikonları) butonu sağlar.
 * Yer tutucu metnini (placeholder) çeviri (i18n) sistemi üzerinden alır.
 */
export const AuthInput: FC<IAuthInput> = ({ placeholder, onInputChange, isSecure }) => {

    const styles = getStyles()
    const [inputText, setInputText] = useState('')
    const [isSecureEntry, setIsSecureEntry] = useState(isSecure)
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
                secureTextEntry={isSecure ? isSecureEntry : false}
                value={inputText}
                onChangeText={handleTextChange}
                style={styles.input}
                numberOfLines={1}
            />
            {
                isSecure && (
                    <TouchableOpacity
                        style={styles.eyeButton}
                        onPress={() => setIsSecureEntry(!isSecureEntry)}
                    >
                        <Icon
                            name={isSecureEntry ? "eye-off" : "eye"}
                            type="Ionicons"
                            style={styles.eyeIcon}
                        />
                    </TouchableOpacity>
                )}
        </View>
    )
}
export default AuthInput