import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'components/commonComponents'
import getStyles from './headerSection.style'
import { useTranslation } from 'react-i18next'
import { useAppNavigation } from 'hooks/useAppNavigation'

/**
 * HeaderSection: Sayfanın üst kısmında yer alan, kullanıcıya sayfayı tanımlayan bir başlık metni ve kolayca geri dönme imkanı sunan bir geri butonu içeren temel bileşendir.
 *
 * Başlık metnini çeviri (i18n) sistemi üzerinden alır.
 * Geri butonu (backButtonView), kullanıcının önceki ekrana dönmesi (navigation.goBack()) aksiyonunu tetikler.
 * Genellikle kayıt, giriş veya ayarlar gibi iç sayfalarda kullanılır.
 */
export const HeaderSection = () => {
    const styles = getStyles()
    const { t } = useTranslation()
    const navigation = useAppNavigation()

    return (
        <View>
            <TouchableOpacity style={styles.backButtonView} onPress={() => navigation.goBack()}>
                <Icon name="chevron-left" type="Entypo" style={styles.backButton} />
            </TouchableOpacity>
            <Text style={styles.title}>{t("detailsText")}</Text>
        </View>
    )
}
