import React from 'react'
import { View, Text, TouchableOpacity, Linking } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Icon } from 'components/commonComponents'
import getStyles from './contactInfo.style'

/*
  Bu bileşen, kullanıcıların destek ekibiyle iletişime geçebileceği bilgileri içerir.
  Kullanıcılar, bir e-posta adresine tıklayarak destek e-postasına kolayca ulaşabilir ve e-posta gönderebilirler.
  Ayrıca, bir telefon numarası ve ikon gösterimi ile telefonla iletişim kurma imkanı da sağlanır.
  E-posta bağlantısı, cihazın varsayılan e-posta istemcisi ile açılır.
*/
export const ContactInfo = () => {
    const { t } = useTranslation()
    const styles = getStyles()

    return (
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
    )
}
export default ContactInfo
