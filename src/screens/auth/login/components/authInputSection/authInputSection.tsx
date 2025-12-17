import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AuthInput, CustomButton, ToastMessage } from 'components/commonComponents'
import getStyles from './authInputSection.style'
import { useTranslation } from 'react-i18next'
import { useAppNavigation } from 'hooks/useAppNavigation'
import { loginUser } from 'api/authService'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { api } from 'api/apiClient'
import { useDispatch } from 'react-redux'
import { setUser } from 'store/slices/authSlice'
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
    const dispatch = useDispatch()
    const handleLogin = async () => {
        /**  const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email)
          if (!isValidEmail(email)) {
                   ToastMessage({
                type: 'info',
                title: t('info'),
                message:  t('invalidEmail'),
                text1Style: styles.text1Style,
                text2Style: styles.text2Style,
            })
              return
          }*/
        if (!email || !password) {
            ToastMessage({
                type: 'info',
                title: t('info'),
                message: t('infoText'),
                text1Style: styles.text1Style,
                text2Style: styles.text2Style,
            })
            return
        }
        try {
            await loginUser({ email, password })
            ToastMessage({
                type: 'success',
                title: t('success'),
                message: t('successText'),
                text1Style: styles.text1Style,
                text2Style: styles.text2Style,
            })
            const token = await AsyncStorage.getItem("userToken");
          
            const res = await api.get("/users/me");
            dispatch(setUser(res.data));
            navigation.reset({
                index: 0,
                routes: [{ name: 'AppTabs' }],
            })
        } catch (error: any) {
            ToastMessage({
                type: 'success',
                title: t('error'),
                message: error.message,
                text1Style: styles.text1Style,
                text2Style: styles.text2Style,
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
