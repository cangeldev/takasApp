import React, { useState } from 'react'
import { View, Text, TextInput, Linking } from 'react-native'
import { useTranslation } from 'react-i18next'
import getStyles from './supportForm.style'
import { CustomButton, ToastMessage } from 'components/commonComponents'

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
            ToastMessage({
                type: 'info',
                title: t('info'),
                message: t('pleaseFillAllFields'),
                text1Style: styles.text1Style,
                text2Style: styles.text2Style,
            })
            return
        }

        const url = `mailto:destek@takasapp.com?subject=Destek Talebi&body=${encodeURIComponent(`Email: ${email}\n\nMesaj:\n${message}`)}`
        Linking.openURL(url).catch(() =>
            ToastMessage({
                type: 'error',
                title: t('error'),
                message: t('emailClientError'),
                text1Style: styles.text1Style,
                text2Style: styles.text2Style,
            })
        )
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
