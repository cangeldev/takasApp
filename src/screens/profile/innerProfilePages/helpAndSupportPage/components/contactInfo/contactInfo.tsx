import React from 'react'
import { View, Text, TouchableOpacity, Linking } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Icon } from 'components/commonComponents'
import getStyles from './contactInfo.style'

/**
 * ContactInfo: Kullanıcılara Destek/İletişim sayfasında (Support/Contact Page) uygulamanın destek ekibine ait temel iletişim bilgilerini (e-posta ve telefon) sunan bileşendir.
 *
 * E-posta adresi (destek@takasapp.com), kullanıcı dokunduğunda cihazın varsayılan e-posta uygulamasını açarak doğrudan e-posta gönderme işlevselliği sağlar (Linking.openURL('mailto:...')).
 * Telefon numarası ve ilgili ikon (phoneIcon) görsel olarak listelenir.
 * Tüm başlıklar çeviri (i18n) desteklidir.
 */
export const ContactInfo = () => {
    const { t } = useTranslation()
    const styles = getStyles()

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.contactLabel}>{t('supportEmail')}:</Text>
                <TouchableOpacity onPress={() => Linking.openURL('mailto:destek@takasapp.com')}>
                    <Text style={styles.contactLink}>destek@takasapp.com</Text>
                </TouchableOpacity>

                <View style={styles.phoneRow}>
                    <Icon name="phone" type="FontAwesome" style={styles.phoneIcon} />
                    <Text style={styles.phoneNumber}>+90 555 555 55 55</Text>
                </View>
            </View>
        </View>
    )
}
export default ContactInfo
