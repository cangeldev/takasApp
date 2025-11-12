import React, { useState } from 'react'
import { PhoneInput  } from 'react-native-phone-entry'
import { Country, CountryCode } from 'react-native-country-picker-modal'
import { LogBox } from 'react-native'
import getStyles from './phoneNumberSection.style'
import { useDispatch } from 'react-redux'
import { setUserInfo } from 'store/slices/userSlice'

LogBox.ignoreLogs([
    'Support for defaultProps will be removed from function components'
])

/**
 * PhoneNumberSection: Kullanıcının kayıt (sign-up) veya hesap detayları (AccountDetails) sırasında uluslararası formata uygun şekilde telefon numarasını girmesini sağlayan bileşendir.
 *
 * 'react-native-phone-entry' kütüphanesini kullanarak ülke kodu seçimi, numara girişi ve numaranın geçerliliğini kontrol etme işlevselliğini sunar.
 * Varsayılan ülke kodu olarak 'TR' (Türkiye) ayarlanmıştır ve kullanıcı girişi sırasında numaranın geçerliliğini anlık olarak denetler.
 */
export const PhoneNumberSection = () => {
    const [countryCode, setCountryCode] = useState<CountryCode>('TR')
    const dispatch = useDispatch()
    const styles = getStyles()
    return (
        <PhoneInput
            defaultValues={{
                countryCode: 'TR',
                callingCode: '+90',
                phoneNumber: '+90',
            }}
            onChangeText={(text) =>
                dispatch(setUserInfo({ phoneNumber: text }))
            }
            onChangeCountry={(country: Country) => {
                console.log('Country:', country)
                setCountryCode(country.cca2 as CountryCode)
            }}
            theme={{
                containerStyle: styles.phoneContainer
            }}
        />
    )
}
