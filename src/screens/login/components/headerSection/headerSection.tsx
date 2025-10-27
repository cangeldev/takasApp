import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import getStyles from './headerSection.style'
import { Icon } from 'components/commonComponents'
import images from 'assets/index'
import { useTranslation } from 'react-i18next'
import { useAppNavigation } from 'hooks/useAppNavigation'

/**
 * HeaderSection: Giriş (Login) veya Kayıt (Register) gibi kimlik doğrulama ekranlarının üst kısmında yer alan görsel ve navigasyon bileşenidir.
 *
 * Kullanıcıya önceki ekrana dönme imkanı sunan bir geri butonu (navigation.goBack()) içerir.
 * Sayfanın amacını belirten, çeviri sistemi (i18n) üzerinden alınan bir başlık metnine (title) sahiptir.
 * Ayrıca, görsel çekicilik katmak veya sayfayı bağlamsallaştırmak için bir kimlik doğrulama görseli (Image) gösterir.
 */
export const HeaderSection = () => {
    const { t } = useTranslation()
    const styles = getStyles()
    const navigation = useAppNavigation()
    return (
        <View>
            <TouchableOpacity style={styles.backButtonView} onPress={() => navigation.goBack()}>
                <Icon name="chevron-left" type="Entypo" style={styles.backButton} />
            </TouchableOpacity>
            <Text style={styles.title}>{t("loginText")}</Text>
            <Image
                source={images.login.login}
                style={styles.image}
                resizeMode="contain"
            />
        </View>
    )
}