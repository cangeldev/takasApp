import React from "react"
import { useTranslation } from "react-i18next"
import { View, Text, Image } from "react-native"
import getStyles from "./welcome.style"
import images from "assets/index"
import { CustomButton } from "components/commonComponents"
import { useAppNavigation } from "hooks/useAppNavigation"

/**
 * Welcome: Uygulamanın kullanıcıya gösterilen ilk karşılama ve tanıtım ekranıdır.
 *
 * Kullanıcıyı uygulamaya davet eder, kısa bir açıklama sunar ve kimlik doğrulama akışını başlatır.
 * Kullanıcıya iki ana seçenek sunar:
 * 1. Giriş Yap (Login) ekranına yönlendirme.
 * 2. Kayıt Ol (Register) ekranına yönlendirme.
 * Bu ekran, uygulama kimlik doğrulamasının giriş noktasıdır.
 */
export const Welcome = () => {
    const styles = getStyles()
    const { t } = useTranslation()
    const navigation = useAppNavigation()
    return (
        <View style={styles.container}>
            <Image
                source={images.login.welcome}
                style={styles.image}
                resizeMode="contain"
            />
            <View>
                <Text style={styles.title}>{t("welcome")}</Text>
                <Text style={styles.subtitle}>
                    {t("welcomeText")}
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton onPress={() => navigation.navigate("Login")} title="login" variant="primary" style={styles.button} textStyle={styles.buttonText} />
                <CustomButton onPress={() => navigation.navigate("Register")} title="signUp" variant="secondary" style={styles.button} textStyle={styles.buttonText} />
            </View>

        </View>
    )
}