import { View } from 'react-native'
import React from 'react'
import getStyles from './addresSection.style'
import { Picker } from '@react-native-picker/picker'
import { useDispatch, useSelector } from 'react-redux'
import { setUserInfo } from 'store/slices/userSlice'
import { RootState } from 'store/store'

/**
 * AddresSection: Kullanıcının kayıt olma veya hesap detayları (AccountDetails) ekranında şehir ve ilçe bilgilerini seçmesini sağlayan formu temsil eden bileşendir.
 *
 * React Native'in Picker bileşenini kullanarak dinamik olarak şehir ve ilçe seçimi sunar.
 * Kullanıcının adres bilgilerini toplamak ve kaydetmek için 'city' ve 'district' state'lerini yönetir.
 * Bu, kullanıcının bulunduğu konuma ait bilgileri sisteme kaydetme sürecinin bir parçasıdır.
 */
export const AddresSection = () => {
    const styles = getStyles()
    const dispatch = useDispatch()
  const { city, district } = useSelector((state: RootState) => state.userInfo)
    type Option = {
        label: string
        value: string
    }
    const options: Option[] = [
        { label: "Türkiye", value: "TR" },
        { label: "Birleşik Devletler", value: "US" },
        { label: "Almanya", value: "DE" },
    ]
    return (
        <View>
            <View style={styles.pickerWrapper}>
                <Picker
                    selectedValue={city}
                    onValueChange={(itemValue) => {
                        dispatch(setUserInfo({ city: itemValue }))
                    }}
                    style={styles.picker}>
                    <Picker.Item label="Şehir Seçiniz..." value="" />
                    {
                        options.map((opt, idx) => (
                            <Picker.Item
                                label={opt.label}
                                value={opt.value}
                                key={idx}
                            />
                        ))
                    }
                </Picker>
            </View>
            <View style={styles.pickerWrapper}>
                <Picker
                    selectedValue={district}
                    onValueChange={(itemValue) => {
                        dispatch(setUserInfo({ district: itemValue }))
                    }}
                    style={styles.picker}>
                    <Picker.Item label="İlçe Seçiniz..." value="" />
                    {
                        options.map((opt, idx) => (
                            <Picker.Item
                                label={opt.label}
                                value={opt.value}
                                key={idx}
                            />
                        ))
                    }
                </Picker>
            </View>
        </View>
    )
}
