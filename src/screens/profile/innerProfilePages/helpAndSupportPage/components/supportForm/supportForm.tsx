import React, { useState } from 'react'
import { View, Text, TextInput, Alert, Linking } from 'react-native'
import { useTranslation } from 'react-i18next'
import getStyles from './supportForm.style'
import { CustomButton } from 'components/commonComponents'

/**
 * SupportForm: Destek/İletişim (Support/Contact Page) sayfasında yer alan, kullanıcıların doğrudan destek ekibine e-posta göndermesini sağlayan etkileşimli iletişim formudur.
 *
 * Kullanıcının e-posta adresini ve destek talebini içeren mesajını girdiği iki ana TextInput alanını (email, message) içerir.
 * 'handleSend' fonksiyonu ile formun gönderimi yönetilir; bu fonksiyon, zorunlu alanların (email, message) boş olup olmadığını kontrol eder (validateForm).
 * Başarılı gönderim durumunda, cihazın varsayılan e-posta istemcisini kullanarak 'destek@takasapp.com' adresine, formdaki bilgileri içeren bir e-posta oluşturur (Linking.openURL).
 */
export const SupportForm = () => {
    const { t } = useTranslation()
    const styles = getStyles()

    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSend = () => {
        if (!email.trim() || !message.trim()) {
            Alert.alert(t('pleaseFillAllFields'))
            return
        }

        const url = `mailto:destek@takasapp.com?subject=Destek Talebi&body=${encodeURIComponent(`Email: ${email}\n\nMesaj:\n${message}`)}`
        Linking.openURL(url).catch(() => Alert.alert(t('emailClientError')))
    }

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.sectionTitle}>{t('contactUs')}</Text>
                <TextInput
                    placeholder={t('yourEmail')}
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    placeholderTextColor="#888"
                />
                <TextInput
                    placeholder={t('yourMessage')}
                    value={message}
                    onChangeText={setMessage}
                    style={[styles.input, styles.textArea]}
                    placeholderTextColor="#888"
                    multiline
                />
                <CustomButton title="send" variant="primary" style={styles.button} textStyle={styles.buttonText} onPress={handleSend} />
            </View>
        </View>
    )
}
export default SupportForm
