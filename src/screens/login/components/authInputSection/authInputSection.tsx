import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AuthInput, CustomButton } from 'components/commonComponents'
import getStyles from './authInputSection.style'
import { useTranslation } from 'react-i18next'
import { useAppNavigation } from 'hooks/useAppNavigation'

/**
 * AuthInputSection: Giriş (Login) veya Kayıt (Register) ekranlarında kullanıcıdan e-posta ve şifre gibi temel kimlik doğrulama bilgilerini toplamak için kullanılan ana form bölümüdür.
 *
 * AuthInput bileşenleri aracılığıyla e-posta ve şifre giriş alanlarını sunar.
 * Şifre alanında gizleme/gösterme işlevselliği aktiftir.
 * Ayrıca, şifresini unutan kullanıcılar için bir "Şifremi Unuttum" (forgotPassword) bağlantısı ve
 * formu göndermek için kullanılan bir ana buton (CustomButton) içerir (başarılı giriş sonrası AppTabs'e yönlendirir).
 */
export const AuthInputSection = () => {
    const [form, setForm] = useState({ email: "", password: "" })
    const { t } = useTranslation()
    const styles = getStyles()
    const navigation = useAppNavigation()

    return (
        <View>
            <AuthInput placeholder="enterYourEmail" onInputChange={(text) => setForm({ ...form, email: text })} />
            <AuthInput placeholder="enterYourPassword" onInputChange={(text) => setForm({ ...form, password: text })} isSecure />
            <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotText}>{t("forgotPassword")}</Text>
            </TouchableOpacity>
            <CustomButton title="login" variant='primary' onPress={() => navigation.navigate("AppTabs")} style={styles.loginButton} textStyle={styles.loginText} />

        </View>
    )
}
