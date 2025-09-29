import React, { useState } from "react"
import { View, Text, TouchableOpacity, SafeAreaView, Image } from "react-native"
import { AuthInput, CustomButton, Icon } from "components/commonComponents"
import images from "assets/index";
import { useTranslation } from "react-i18next";
import getStyles from "./register.style";
import { useNavigation } from "@react-navigation/native";

/**
 * RegisterScreen
 * Kullanıcıların henüz üyeliği yoksa kayıt olmasını sağlar.
 * Eğer kullanıcı üyeyse, Login sayfasına yönlendirir.
 */
export const RegisterScreen = () => {
    const [form, setForm] = useState({ email: "", password: "", confirmPassword: "" });
    const { t } = useTranslation()
    const styles = getStyles()
    const navigation = useNavigation<any>()

    const socials = [
        { id: "facebook", icon: images.login.facebook },
        { id: "google", icon: images.login.google },
        { id: "apple", icon: images.login.apple }
    ]

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" type="Ionicons" style={styles.backButton} />
            </TouchableOpacity>
            <Text style={styles.title}>{t("signText")}</Text>
            <Image
                source={images.login.welcome}
                style={styles.image}
                resizeMode="contain"
            />
            <AuthInput placeholder="enterYourEmail" onInputChange={(text) => setForm({ ...form, email: text })} />
            <AuthInput placeholder="enterYourPassword" onInputChange={(text) => setForm({ ...form, password: text })} />
            <AuthInput placeholder="confirmPassword" onInputChange={(text) => setForm({ ...form, confirmPassword: text })} />
            <CustomButton title={t("signUp")} variant='primary' style={styles.loginButton} textStyle={styles.loginText} />
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
                <Text style={styles.registerText}>{t("alreadyHaveAnAccount")}</Text>
                <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
                    <Text style={styles.registerNow}>{t("loginNow")}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}