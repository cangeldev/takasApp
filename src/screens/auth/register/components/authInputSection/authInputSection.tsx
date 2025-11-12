import { Alert, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import { AuthInput, CustomButton } from 'components/commonComponents'
import getStyles from './authInputSection.style'
import { useAppNavigation } from 'hooks/useAppNavigation'
import { useDispatch } from 'react-redux'
import { setUserInfo } from 'store/slices/userSlice'

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

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleRegister = useCallback(() => {
        if (!email || !password) {
            Alert.alert('Uyarı', 'Lütfen e-posta ve şifre giriniz.')
            return
        }
        if (password !== confirmPassword) {
            Alert.alert('Uyarı', 'Şifreler uyuşmuyor.')
            return
        }

        dispatch(setUserInfo({ email, password }))
        navigation.navigate('AccountDetails')
    }, [email, password, confirmPassword, dispatch, navigation])

    return (
        <View>
            <AuthInput placeholder="enterYourEmail" onInputChange={setEmail} />
            <AuthInput placeholder="enterYourPassword" onInputChange={setPassword} />
            <AuthInput placeholder="confirmPassword" onInputChange={setConfirmPassword} />
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
