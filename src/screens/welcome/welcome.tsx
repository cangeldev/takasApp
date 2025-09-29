import React from "react"
import { useTranslation } from "react-i18next"
import { View, Text, Image, TouchableOpacity } from "react-native"
import getStyles from "./welcome.style"
import images from "assets/index"

export const Welcome = () => {
    const styles = getStyles()
    const { t } = useTranslation()

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
            <View>
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.loginText}>{t("login")}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signUpBtn}>
                    <Text style={styles.signUpText}>{t("signUp")}</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}