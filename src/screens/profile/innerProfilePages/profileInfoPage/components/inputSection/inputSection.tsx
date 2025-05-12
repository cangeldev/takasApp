import React from 'react'
import { View } from 'react-native'
import { useTranslation } from 'react-i18next'
import getStyles from './inputSection.style'
import { ProfileInfoPageTxtInput } from './components/profileInfoPageTxtInput/profileInfoPageTxtInput'

/*
  Bu bileşen, kullanıcının profil bilgilerini (kullanıcı adı, ad, soyad, şifre ve açıklama) düzenleyebileceği bir dizi metin girişi sunar.
  Giriş alanları `ProfileInfoPageTxtInput` bileşeniyle oluşturulmuştur.
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
