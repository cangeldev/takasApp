import React from 'react'
import { View, Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import getStyles from './nameVisibilitySection.style'
import { NameVisibilitySectionComponent } from './components/nameVisibilitySectionComponent/nameVisibilitySectionComponent'

/**
 * NameVisibilitySection: Kullanıcının profil bilgilerini (ad ve soyad) kimlerin görebileceği ile ilgili gizlilik ayarını yapabildiği bölümdür.
 *
 * Kullanıcıya bu ayarın önemini açıklayan bir metin (selectNameText) sunar.
 * Ana seçim mantığını ve arayüzünü (örneğin, radyo butonları veya anahtarlar) içeren NameVisibilitySectionComponent alt bileşenini render eder.
 * Bu sayede kullanıcı, ad ve soyadının herkese mi yoksa sadece belirli kişilere mi görünür olacağını belirler.
 */
export const NameVisibilitySection = () => {
    const styles = getStyles()
    const { t } = useTranslation()

    return (
        <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>{t("selectNameText")}</Text>
            <NameVisibilitySectionComponent />
        </View>
    )
}
export default NameVisibilitySection
