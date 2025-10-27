import React from 'react'
import { View } from 'react-native'
import { useTranslation } from 'react-i18next'
import getStyles from './inputSection.style'
import { ProfileInfoPageTxtInput } from './components/profileInfoPageTxtInput/profileInfoPageTxtInput'

/**
 * InputSection: Kullanıcının kendi profil bilgilerini (kullanıcı adı, ad, soyad, şifre ve kişisel açıklama) görüntülemesini ve düzenlemesini sağlayan metin giriş alanları grubudur.
 *
 * `ProfileInfoPageTxtInput` bileşeni kullanılarak standartlaştırılmış bir giriş deneyimi sunar.
 * Temel kişisel bilgiler (username, name, surname) doğrudan düzenlenebilirken, şifre alanı (password) düzenlenemez (editable={false}) ancak kullanıcıyı şifre değiştirme ekranına yönlendirecek bir ikon (chevron-right) içerir.
 * Ayrıca, kullanıcıya kendisi hakkında bilgi ekleyebileceği çok satırlı (multiline) bir açıklama (description) alanı sunar. Tüm başlıklar çeviri (i18n) desteklidir.
 */
export const InputSection = () => {
    const styles = getStyles()
    const { t } = useTranslation()

    return (
        <View style={styles.inputSection}>
            {["username", "name", "surname"].map((field) => (
                <ProfileInfoPageTxtInput key={field} title={t(field)} />
            ))}
            <ProfileInfoPageTxtInput
                title={t("password")}
                placeHolder="******"
                iconName="chevron-right"
                iconType="Entypo"
                editable={false}
            />
            <ProfileInfoPageTxtInput multiline title={t("description")} placeHolder={t("youCanWriteSomethingAboutYourself")} />
        </View>
    )
}
export default InputSection
