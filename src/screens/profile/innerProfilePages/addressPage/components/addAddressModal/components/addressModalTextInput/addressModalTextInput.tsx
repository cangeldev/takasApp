import { Text, TextInput } from 'react-native'
import React, { FC, useState } from 'react'
import getStyles from './addressModalTextInput.style'

interface IAddressModalTextInputProps {
    label: string
    placeHolder?: string
    value: string
    onInputChange: (inputText: string) => void
}

/**
 * AddressModalTextInput: Adres Ekleme Modalı (AddAddressModal) ve Adres ve Konum Sayfası (AddressAndLocationPage) gibi formlarda, kullanıcının tek bir adres bilgisini (ad, sokak, posta kodu vb.) girmesi için kullanılan özelleştirilmiş metin giriş bileşenidir.
 *
 * Giriş alanının amacını belirten bir etiket (label) ve bir TextInput içerir.
 * Kullanıcı odaklandığında görsel geri bildirim (focusedInput) sağlamak için 'isFocused' state'ini yönetir.
 * Değişiklikler, 'onInputChange' prop'u aracılığıyla üst bileşene iletilir ve 'value' prop'u ile kontrol edilir.
 */
export const AddressModalTextInput: FC<IAddressModalTextInputProps> = ({ label, placeHolder, value, onInputChange }) => {
    const styles = getStyles()
    const [isFocused, setIsFocused] = useState(false)

    return (
        <>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={[styles.input, isFocused && styles.focusedInput]}
                placeholder={placeHolder}
                value={value}
                onChangeText={onInputChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </>
    )
}
