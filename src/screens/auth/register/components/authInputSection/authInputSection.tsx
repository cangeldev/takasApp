import { View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { AuthInput, CustomButton, ToastMessage } from 'components/commonComponents'
import getStyles from './authInputSection.style'
import { useAppNavigation } from 'hooks/useAppNavigation'
import { useDispatch } from 'react-redux'
import { setUserInfo } from 'store/slices/userSlice'
import { useTranslation } from 'react-i18next'
import { checkEmail } from 'api/authService'

/**
 * AuthInputSection: Kayıt (Register) ekranında, kullanıcıdan e-posta, şifre ve şifre onayı gibi temel kimlik doğrulama bilgilerini toplamak için kullanılan form bölümüdür.
 *
 * AuthInput bileşenleri aracılığıyla temel giriş alanlarını sunar ve bu bilgileri component'in yerel state'inde yönetir.
 * Formu göndermek için kullanılan ana buton (CustomButton) içerir ve başarılı kayıt sonrası AccountDetails sayfasına yönlendirir.
 * Bu bileşen, yeni kullanıcıların kimlik doğrulama bilgilerini girdiği başlangıç noktasıdır.
 */
export const AuthInputSection = () => {

    const styles = getStyles()
    const navigation = useAppNavigation()
    const dispatch = useDispatch()
    const { t } = useTranslation()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState('')
    const handleRegister = useCallback(async () => {
        if (!email || !password) {
            ToastMessage({
                title: t('info'),
                message: t('infoText'),
                text1Style: styles.text1Style,
                text2Style: styles.text2Style,
            })
            return
        }

        if (password !== confirmPassword) {
            ToastMessage({
                title: t('info'),
                message: t('passwordsDontMatch'),
                text1Style: styles.text1Style,
                text2Style: styles.text2Style,
            })
            return
        }
        if (password.length < 8) {
            ToastMessage({
                title: t('info'),
                message: t('passwordErrorRule'),
                text1Style: styles.text1Style,
                text2Style: styles.text2Style,
            })
            return
        }

        try {
            await checkEmail(email)
            dispatch(setUserInfo({ email, password }))
            navigation.navigate('AccountDetails')
        } catch (err) {
            ToastMessage({
                type: 'error',
                title: t('error'),
                message: t('thisEmailAlreadyRegistered'),
                text1Style: styles.text1Style,
                text2Style: styles.text2Style,
            })
        }
    }, [email, password, confirmPassword, dispatch, t, navigation])
    return (
        <View>
            <AuthInput placeholder="enterYourEmail" onInputChange={setEmail} />
            <AuthInput placeholder="enterYourPassword" onInputChange={setPassword} isSecure={true} />
            <AuthInput placeholder="confirmPassword" onInputChange={setConfirmPassword} isSecure={true} />
            <CustomButton
                title="signUp"
                variant="primary"
                style={styles.loginButton}
                textStyle={styles.loginText}
                onPress={handleRegister}
            />
        </View>
    )
}
