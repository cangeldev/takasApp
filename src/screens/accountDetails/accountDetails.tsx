import { View } from 'react-native'
import React from 'react'
import getStyles from './accountDetails.style'
import { CustomButton } from 'components/commonComponents'
import { AddresSection, HeaderSection, PhoneNumberSection, UserInfoSection } from './components'
import { useAppNavigation } from 'hooks/useAppNavigation'

/**
 * AccountDetails: Kullanıcının kayıt (sign-up) sürecinde detaylı bilgilerini (isim, telefon, adres vb.) girdiği formu temsil eder.
 *
 * Kullanıcı Bilgileri, Telefon Numarası ve Adres Bilgileri gibi alt bileşenleri bir araya getirerek kayıt işleminin
 * tamamlanmasını sağlayan ana arayüzdür. Başarılı kayıt sonrası ana sekmeler navigasyonuna (AppTabs) yönlendirme yapar.
 */
export const AccountDetails = () => {
    const styles = getStyles()
    const navigation = useAppNavigation()

    return (
        <View style={styles.container}>
            <HeaderSection />
            <UserInfoSection />
            <PhoneNumberSection />
            <AddresSection />
            <CustomButton title="signUp" variant='primary' style={styles.submitButton} textStyle={styles.submitText} onPress={() => navigation.navigate("AppTabs")} />
        </View>
    )
}
