import React from 'react'
import { Text, View, TouchableOpacity, TextInput, Alert, Linking } from 'react-native'
import { HeaderSection, Icon } from 'components/index'
import { useTranslation } from 'react-i18next'
import getStyles from './style'
import { faqList } from 'utils/helper'

/*
  HelpAndSupportPage, bu sayfa kullanıcının sormak istediği soruları sorabileceği, oluşabilecek durumların çözümü için mail atabileceği 
  istediği bilgileri edinebilmesi için tasarlanan sayfadır.
*/
export const HelpAndSupportPage = () => {

    const { t } = useTranslation()
    const styles = getStyles()
    return (
        <View style={styles.container}>
            <HeaderSection headerTitle={t("helpAndSupport")} />

            {/* Sıkça Sorulan Sorular */}
            <View style={styles.card}>
                <Text style={styles.sectionTitle}>{t("faq")}</Text>
                {faqList.map((item, index) => (
                    <View key={index} style={styles.faqItem}>
                        <Text style={styles.faqQuestion}>{item.q}</Text>
                        <Text style={styles.faqAnswer}>{item.a}</Text>
                    </View>
                ))}
            </View>

            {/* Destek Formu */}
            <View style={styles.card}>
                <Text style={styles.sectionTitle}>{t("contactUs")}</Text>
                <TextInput
                    placeholder={t("yourEmail")}
                    style={styles.input}
                    placeholderTextColor="#888" />
                <TextInput
                    placeholder={t("yourMessage")}
                    multiline
                    style={[styles.input, styles.textArea]}
                    placeholderTextColor="#888"
                />
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={() => Alert.alert(t('messageSent'))}>
                    <Text style={styles.buttonText}>{t("send")}</Text>
                </TouchableOpacity>
            </View>

            {/* İletişim Bilgileri */}
            <View style={styles.card}>
                <Text style={styles.contactLabel}>{t("supportEmail")}:</Text>
                <TouchableOpacity onPress={() => Linking.openURL('mailto:destek@takasapp.com')}>
                    <Text style={styles.contactLink}>destek@takasapp.com</Text>
                </TouchableOpacity>

                <View style={styles.phoneRow}>
                    <Icon name='phone' type='FontAwesome' style={styles.phoneIcon} />
                    <Text style={styles.phoneNumber}>+90 555 555 55 55</Text>
                </View>
            </View>
        </View>
    )
}
