import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { AuthInput, CustomButton } from 'components/commonComponents'
import getStyles from './authInputSection.style'
import { useTranslation } from 'react-i18next'
import { useAppNavigation } from 'hooks/useAppNavigation'
import { loginUser } from 'api/authService'

/**
 * AuthInputSection: Giriş (Login) veya Kayıt (Register) ekranlarında kullanıcıdan e-posta ve şifre gibi temel kimlik doğrulama bilgilerini toplamak için kullanılan ana form bölümüdür.
 *
 * AuthInput bileşenleri aracılığıyla e-posta ve şifre giriş alanlarını sunar.
 * Şifre alanında gizleme/gösterme işlevselliği aktiftir.
 * Ayrıca, şifresini unutan kullanıcılar için bir "Şifremi Unuttum" (forgotPassword) bağlantısı ve
 * formu göndermek için kullanılan bir ana buton (CustomButton) içerir (başarılı giriş sonrası AppTabs'e yönlendirir).
 */
export const AuthInputSection = () => {

    const { t } = useTranslation()
    const styles = getStyles()
    const navigation = useAppNavigation()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async () => {
        try {
            const { token, user } = await loginUser(email, password);
            Alert.alert("Giriş başarılı", `Hoş geldin ${user.name || user.email}`)
            navigation.navigate("AppTabs");
            console.log(token)
        } catch (error: any) {
            Alert.alert("Hata", error.response?.data?.message || "Giriş başarısız")
        }
    }
    
    return (
        <View>
            <AuthInput placeholder="enterYourEmail" onInputChange={setEmail} />
            <AuthInput placeholder="enterYourPassword" onInputChange={setPassword} isSecure />
            <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotText}>{t("forgotPassword")}</Text>
            </TouchableOpacity>
            <CustomButton title="login" variant='primary' onPress={handleLogin} style={styles.loginButton} textStyle={styles.loginText} />

        </View>
    )
}
