import React, { useState } from 'react'
import { Text, TextInput, View } from 'react-native'
import getStyles from './phoneNumberSection.style'
import { useDispatch } from 'react-redux'
import { setUserInfo } from 'store/slices/userSlice'
import { Icon } from 'components/commonComponents'

/**
 * PhoneNumberSection: Kullanıcının kayıt (sign-up) veya hesap detayları (AccountDetails) sırasında uluslararası formata uygun şekilde telefon numarasını girmesini sağlayan bileşendir.
 *
 * 'react-native-phone-entry' kütüphanesini kullanarak ülke kodu seçimi, numara girişi ve numaranın geçerliliğini kontrol etme işlevselliğini sunar.
 * Varsayılan ülke kodu olarak 'TR' (Türkiye) ayarlanmıştır ve kullanıcı girişi sırasında numaranın geçerliliğini anlık olarak denetler.
 */
export const PhoneNumberSection = () => {
    const dispatch = useDispatch()
    const styles = getStyles()
    const [phone, setPhone] = useState("+90");

    const handleChange = (text: string) => {
        if (!text.startsWith("+90")) return;

        let numbers = text.replace("+90", "").replace(/\D/g, "");
        numbers = numbers.slice(0, 10);

        let formatted = "+90 "

        if (numbers.length > 0) formatted += numbers.slice(0, 3);
        if (numbers.length > 3) formatted += " " + numbers.slice(3, 6);
        if (numbers.length > 6) formatted += "-" + numbers.slice(6, 8);
        if (numbers.length > 8) formatted += "-" + numbers.slice(8, 10);

        setPhone(formatted)
        dispatch(setUserInfo({ phoneNumber: text }))
    }

    return (
        <View style={styles.phoneContainer}>
            <View style={styles.countryContainer}>
                <Text style={styles.countryFlag}>
                    🇹🇷
                </Text>
                <Icon
                    name={"caret-down"}
                    type="FontAwesome5"
                    style={styles.icon}
                />
            </View>
            <TextInput value={phone}
                onChangeText={handleChange}
                keyboardType="phone-pad"
                maxLength={17} style={styles.phoneNumberInput} />
        </View >

    )
}
