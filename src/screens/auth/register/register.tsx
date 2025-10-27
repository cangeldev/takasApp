import React from "react"
import { SafeAreaView } from "react-native"
import { AuthSocialLoginSection } from "components/commonComponents"
import getStyles from "./register.style"
import { AuthInputSection, HeaderSection } from "./components"

/**
 * RegisterScreen: Kullanıcıların uygulamaya yeni bir hesap oluşturarak kaydolmasını sağlayan ana arayüz bileşenidir.
 *
 * Başlık, kayıt formu (e-posta/şifre onayı girişi) ve sosyal medya ile kayıt olma seçeneklerini içerir.
 * Ayrıca, zaten hesabı olan kullanıcıları 'Şimdi Giriş Yap' bağlantısı aracılığıyla Giriş (Login) sayfasına yönlendirir.
 */
export const RegisterScreen = () => {
    const styles = getStyles()

    return (
        <SafeAreaView style={styles.container}>
            <HeaderSection />
            <AuthInputSection />
            <AuthSocialLoginSection navigationScreen="Login" preAuthText="alreadyHaveAnAccount" authActionText="loginNow" />
        </SafeAreaView>
    )
}