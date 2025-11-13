import { View } from 'react-native'
import React from 'react'
import getStyles from './accountDetails.style'
import { CustomButton } from 'components/commonComponents'
import { AddresSection, HeaderSection, PhoneNumberSection, UserInfoSection } from './components'
import { useAppNavigation } from 'hooks/useAppNavigation'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { registerUser } from 'api/authService'
import Toast from 'react-native-toast-message'
import { useTranslation } from 'react-i18next'

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
    const { t } = useTranslation()

    const handleRegister = async () => {
        if (
            !userInfo.username ||
            !userInfo.name ||
            !userInfo.surname ||
            !userInfo.phoneNumber ||
            !userInfo.city ||
            !userInfo.district
        ) {
            Toast.show({
                type: 'info',
                text1: t('info'),
                text2: t('infoText'),
                text1Style: styles.text1Style,
                text2Style: styles.text2Style
            })
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
            Toast.show({
                type: 'success',
                text1: t('success'),
                text2: t('successText'),
                text1Style: styles.text1Style,
                text2Style: styles.text2Style
            })
            navigation.reset({
                index: 0,
                routes: [{ name: 'AppTabs' }]
            })

        } catch (error: any) {
            Toast.show({
                type: 'error',
                text1: t('error'),
                text2: t('errorText')
            })
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
