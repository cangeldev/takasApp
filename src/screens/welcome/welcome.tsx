import React from "react"
import { useTranslation } from "react-i18next"
import { View, Text, Image } from "react-native"
import getStyles from "./welcome.style"
import images from "assets/index"
import { CustomButton } from "components/commonComponents"
import { useNavigation } from "@react-navigation/native"

/*
  WelcomeScreen, Uygulamamızın ilk sayfasıdır kullanıcının uygulayı tanıması ve kayıtlı ise giriş sayfasına yönlenmesini üye değiş ise üye ol sayfasına yönlenmesi için yardımcı olmaya yarar.
*/
export const Welcome = () => {
    const styles = getStyles()
    const { t } = useTranslation()
    const navigation = useNavigation<any>()
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
                <CustomButton onPress={() => navigation.navigate("LoginScreen")} title="login" variant="primary" style={styles.button} textStyle={styles.buttonText} />
                <CustomButton onPress={() => navigation.navigate("RegisterScreen")} title="signUp" variant="secondary" style={styles.button} textStyle={styles.buttonText} />
            </View>

        </View>
    )
}