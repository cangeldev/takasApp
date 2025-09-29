import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Image } from "react-native"
import { CustomButton, Icon } from "components/commonComponents"
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
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [form, setForm] = useState({ email: "", password: "" });
    const { t } = useTranslation()
    const styles = getStyles()
    const navigation = useNavigation()
 
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
                source={images.login.welcome}
                style={styles.image}
                resizeMode="contain"
            />
            <TextInput
                placeholder={t("enterYourEmail")}
                onChangeText={(text) => setForm({ ...form, email: text })}
                keyboardType="email-address"
                style={styles.input}
            />
            <View style={styles.passwordContainer}>
                <TextInput
                    placeholder={t("enterYourPassword")}
                    secureTextEntry={!passwordVisible}
                    onChangeText={(text) => setForm({ ...form, password: text })}
                    style={styles.passwordInput}
                />
                <TouchableOpacity
                    onPress={() => setPasswordVisible(!passwordVisible)}>
                    <Icon
                        name={passwordVisible ? "eye-off" : "eye"}
                        type="Ionicons"
                        style={styles.eyeIcon}
                    />
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.forgotPassword}>
                <Text style={styles.forgotText}>{t("forgotPassword")}</Text>
            </TouchableOpacity>
            <CustomButton title={t("login")} variant='primary' style={styles.loginButton} textStyle={styles.loginText} />
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
                <TouchableOpacity>
                    <Text style={styles.registerNow}>{t("registerNow")}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}