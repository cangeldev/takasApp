import { Alert, View } from 'react-native'
import React from 'react'
import getStyles from './accountDetails.style'
import { CustomButton } from 'components/commonComponents'
import { AddresSection, HeaderSection, PhoneNumberSection, UserInfoSection } from './components'
import { useAppNavigation } from 'hooks/useAppNavigation'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { registerUser } from 'api/authService'

/**
 * AccountDetails: Kullanıcının kayıt (sign-up) sürecinde detaylı bilgilerini (isim, telefon, adres vb.) girdiği formu temsil eder.
 *
 * Kullanıcı Bilgileri, Telefon Numarası ve Adres Bilgileri gibi alt bileşenleri bir araya getirerek kayıt işleminin
 * tamamlanmasını sağlayan ana arayüzdür. Başarılı kayıt sonrası ana sekmeler navigasyonuna (AppTabs) yönlendirme yapar.
 */

export const AccountDetails = () => {
    const styles = getStyles()
    const navigation = useAppNavigation()
    const userInfo = useSelector((state: RootState) => state.userInfo)


    const handleRegister = async () => {
        if (
            !userInfo.username ||
            !userInfo.name ||
            !userInfo.surname ||
            !userInfo.phoneNumber ||
            !userInfo.city ||
            !userInfo.district
        ) {
            Alert.alert('Uyarı', 'Lütfen eksik bilgilerinizi giriniz.')
            return
        }

        try {
            await registerUser({
                email: userInfo.email,
                password: userInfo.password,
                username: userInfo.username,
                name: userInfo.name,
                surname: userInfo.surname,
                phoneNumber: userInfo.phoneNumber,
                city: userInfo.city,
                district: userInfo.district
            })

            navigation.reset({
                index: 0,
                routes: [{ name: 'AppTabs' }]
            })
        } catch (error: any) {
            Alert.alert('Hata', error.message || 'Kayıt başarısız')
        }
    }

    return (
        <View style={styles.container}>
            <HeaderSection />
            <UserInfoSection />
            <PhoneNumberSection />
            <AddresSection />
            <CustomButton
                title={'signUp'}
                variant="primary"
                style={styles.submitButton}
                textStyle={styles.submitText}
                onPress={handleRegister}
            />
        </View>
    )
}
