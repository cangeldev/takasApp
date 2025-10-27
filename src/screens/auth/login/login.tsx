import React from "react"
import { SafeAreaView } from "react-native"
import getStyles from "./login.style";
import { AuthInputSection, HeaderSection } from "./components";
import { AuthSocialLoginSection } from "components/commonComponents";

/**
 * LoginScreen: Kullanıcıların mevcut hesaplarıyla uygulamaya giriş yapmasını sağlayan ana arayüz bileşenidir.
 *
 * Başlık (Header), giriş formu (e-posta/şifre girişi) ve sosyal medya ile giriş seçeneklerini barındırır.
 * Ayrıca, henüz hesabı olmayan kullanıcıları 'Şimdi Kaydol' bağlantısı aracılığıyla Kayıt (Register) sayfasına yönlendirir.
 */
export const LoginScreen = () => {
    const styles = getStyles()

    return (
        <SafeAreaView style={styles.container}>
            <HeaderSection />
            <AuthInputSection />
            <AuthSocialLoginSection navigationScreen="Register" preAuthText="dontHaveAccount" authActionText="registerNow" />
        </SafeAreaView>
    )
}