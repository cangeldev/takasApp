import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { FC } from 'react'
import { socials } from 'utils/helper'
import { useTranslation } from 'react-i18next'
import getStyles from './authSocialLoginSection.style'
import { RootStackParamList } from 'utils/types'
import { useAppNavigation } from 'hooks/useAppNavigation'

interface IAuthSocialLoginSection {
    navigationScreen: keyof RootStackParamList
    preAuthText: string
    authActionText: string
}
/**
 * AuthSocialLoginSection: Giriş (Login) ve Kayıt (Register) ekranlarının alt kısmında yer alan, alternatif kimlik doğrulama seçeneklerini sunan ve navigasyon yönlendirmesi yapan bileşendir.
 *
 * Farklı sosyal medya platformları (socials listesi) aracılığıyla hızlı giriş/kayıt yapma butonlarını içerir.
 * Bu bölüm, ana kimlik doğrulama formları ile diğer kimlik doğrulama yöntemleri arasında bir ayırıcı (divider) görevi görür.
 * Ayrıca, mevcut sayfadan diğer kimlik doğrulama (Giriş'ten Kayıt'a veya tersi) sayfasına yönlendirme (navigationScreen) linkini (authActionText) dinamik olarak oluşturur.
 */
export const AuthSocialLoginSection: FC<IAuthSocialLoginSection> = ({ navigationScreen, preAuthText, authActionText }) => {
    const { t } = useTranslation()
    const styles = getStyles()
    const navigation = useAppNavigation()

    return (
        <View>
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
                <Text style={styles.authText}>{t(preAuthText)}</Text>
                <TouchableOpacity onPress={() => navigation.navigate(navigationScreen as never)}>
                    <Text style={styles.authNowText}>{t(authActionText)}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}