import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert, Linking } from 'react-native'
import { useTranslation } from 'react-i18next'
import getStyles from './supportForm.style'

/*
  Bu bileşen, kullanıcıların destek talebi gönderebileceği bir iletişim formu sunar.
  Kullanıcılar, adlarını ve mesajlarını girerek, destek ekibine e-posta yoluyla ulaşabilirler.
  Formu göndermek için kullanıcıdan hem e-posta adresi hem de mesaj alanlarının doldurulması beklenir. 
  Eğer herhangi bir alan boş bırakılırsa, kullanıcıya uyarı mesajı gösterilir.
  E-posta gönderme işlemi, cihazın varsayılan e-posta istemcisiyle yapılır.
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
                <TouchableOpacity style={styles.button} onPress={handleSend}>
                    <Text style={styles.buttonText}>{t('send')}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default SupportForm
