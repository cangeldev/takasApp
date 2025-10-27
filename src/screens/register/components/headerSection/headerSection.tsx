import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import images from 'assets/index'
import { useTranslation } from 'react-i18next'
import { Icon } from 'components/commonComponents'
import getStyles from './headerSection.style'
import { useAppNavigation } from 'hooks/useAppNavigation'

/**
 * HeaderSection: Kayıt (Register) ekranının üst kısmında yer alan görsel ve navigasyon bileşenidir.
 *
 * Kullanıcıya önceki ekrana dönme imkanı sunan bir geri butonu (navigation.goBack()) içerir.
 * Sayfanın amacını belirten, çeviri sistemi (i18n) üzerinden alınan bir başlık metnine (title) sahiptir (Muhtemelen "Kayıt Ol" metni).
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
            <Text style={styles.title}>{t("signText")}</Text>
            <Image
                source={images.login.register}
                style={styles.image}
                resizeMode="contain"
            />
        </View>
    )
}