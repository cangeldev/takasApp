import { View } from 'react-native'
import React, { useState } from 'react'
import { AuthInput, CustomButton } from 'components/commonComponents'
import getStyles from './authInputSection.style'
import { useAppNavigation } from 'hooks/useAppNavigation'

/**
 * AuthInputSection: Kayıt (Register) ekranında, kullanıcıdan e-posta, şifre ve şifre onayı gibi temel kimlik doğrulama bilgilerini toplamak için kullanılan form bölümüdür.
 *
 * AuthInput bileşenleri aracılığıyla temel giriş alanlarını sunar ve bu bilgileri component'in yerel state'inde yönetir.
 * Formu göndermek için kullanılan ana buton (CustomButton) içerir ve başarılı kayıt sonrası AccountDetails sayfasına yönlendirir.
 * Bu bileşen, yeni kullanıcıların kimlik doğrulama bilgilerini girdiği başlangıç noktasıdır.
 */
export const AuthInputSection = () => {
    const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" });
    const styles = getStyles()
    const navigation = useAppNavigation()

    return (
        <View>
            <AuthInput placeholder="enterYourEmail" onInputChange={(text) => setForm({ ...form, email: text })} />
            <AuthInput placeholder="enterYourPassword" onInputChange={(text) => setForm({ ...form, password: text })} />
            <AuthInput placeholder="confirmPassword" onInputChange={(text) => setForm({ ...form, confirmPassword: text })} />
            <CustomButton title="signUp" variant='primary' style={styles.loginButton} textStyle={styles.loginText} onPress={() => navigation.navigate("AccountDetails")} />
        </View>
    )
}
