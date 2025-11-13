import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AuthInput, CustomButton } from 'components/commonComponents'
import getStyles from './authInputSection.style'
import { useTranslation } from 'react-i18next'
import { useAppNavigation } from 'hooks/useAppNavigation'
import { loginUser } from 'api/authService'
import Toast from 'react-native-toast-message'

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
        /**  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email)
          if (!isValidEmail(email)) {
              Toast.show({
                  type: 'info',
                  text1: t('info'),
                  text2: t('invalidEmail'),
                  text1Style: styles.text1Style,
                  text2Style: styles.text2Style
              })
              return
          }*/
        if (!email || !password) {
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
            const { token, user } = await loginUser({ email, password })
            Toast.show({
                type: 'success',
                text1: t('success'),
                text2: t('successText'),
                text1Style: styles.text1Style,
                text2Style: styles.text2Style
            })
            navigation.reset({
                index: 0,
                routes: [{ name: 'AppTabs' }],
            })
            console.log(token)
        } catch (error: any) {
            Toast.show({
                type: 'error',
                text1: t('error'),
                text2: error.message,
                text1Style: styles.text1Style,
                text2Style: styles.text2Style
            })
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
