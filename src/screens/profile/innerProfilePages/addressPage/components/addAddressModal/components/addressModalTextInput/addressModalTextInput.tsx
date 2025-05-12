import { Text, TextInput } from 'react-native'
import React, { FC, useState } from 'react'
import getStyles from './addressModalTextInput.style'

interface IAddressModalTextInputProps {
    label: string
    placeHolder?: string
    value: string
    onInputChange: (inputText: string) => void
}

//  Bu component AddressAndLocationPage sayfasındaki, kullanıcının adres bilgilerini girmek için kullandığı bileşendir.
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
