import React, { useState } from "react"
import { View, Text, TouchableOpacity, SafeAreaView, Image } from "react-native"
import { AuthInput, CustomButton, Icon } from "components/commonComponents"
import images from "assets/index";
import { useTranslation } from "react-i18next";
import getStyles from "./login.style";
import { useNavigation } from "@react-navigation/native";

/**
 * LoginScreen
 * Kullanıcıların giriş yapmasını sağlar.
 * Eğer kullanıcı üye değilse, Register sayfasına yönlendirir.
 */
export const LoginScreen = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const { t } = useTranslation()
    const styles = getStyles()
    const navigation = useNavigation<any>()

    const socials = [
        { id: "facebook", icon: images.login.facebook },
        { id: "google", icon: images.login.google },
        { id: "apple", icon: images.login.apple },
    ]

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" type="Ionicons" style={styles.backButton} />
            </TouchableOpacity>
            <Text style={styles.title}>{t("loginText")}</Text>
            <Image
                source={images.login.login}
                style={styles.image}
                resizeMode="contain"
            />
            <AuthInput placeholder="enterYourEmail" onInputChange={(text) => setForm({ ...form, email: text })} />
            <AuthInput placeholder="enterYourPassword" onInputChange={(text) => setForm({ ...form, password: text })} password />
            <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotText}>{t("forgotPassword")}</Text>
            </TouchableOpacity>
            <CustomButton title={t("login")} variant='primary' onPress={()=>navigation.navigate("AppTabNavigator")} style={styles.loginButton} textStyle={styles.loginText} />
            <View style={styles.dividerContainer}>
                <View style={styles.divider} />
                <Text style={styles.orText}>{t("loginWith")}</Text>
                <View style={styles.divider} />
            </View>
            <View style={styles.socialContainer}>
                {socials.map(social => (
                    <TouchableOpacity key={social.id} style={styles.socialButton}>
                        <Image source={social.icon} style={styles.icon} resizeMode="contain" />
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.registerContainer}>
                <Text style={styles.registerText}>{t("dontHaveAccount")}</Text>
                <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
                    <Text style={styles.registerNow}>{t("registerNow")}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}