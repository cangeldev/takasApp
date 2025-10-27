import React from 'react'
import { View, Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Faqs } from 'utils/helper'
import getStyles from './faqSection.style'

/**
 * FaqSection: Destek/SSS (Support/FAQ) sayfasında, kullanıcılara uygulama veya hizmetle ilgili en sık sorulan soruları ve yanıtlarını sunan bölümdür.
 *
 * `Faqs` yardımcı dizisindeki verileri (soru başlığı: item.q ve yanıt metni: item.a) haritalayarak bir liste oluşturur.
 * Her bir soru ve cevap metni, çeviri (i18n) sistemi (t()) aracılığıyla çoklu dil desteğiyle görüntülenir.
 * Bu bölüm, kullanıcıların kendi sorularına hızlıca yanıt bulmasını amaçlar.
 */
export const FaqSection = () => {
    const { t } = useTranslation()
    const styles = getStyles()

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.sectionTitle}>{t('faq')}</Text>
                {Faqs.map((item, index) => (
                    <View key={index} style={styles.faqItem}>
                        <Text style={styles.faqQuestion}>{t(item.q)}</Text>
                        <Text style={styles.faqAnswer}>{t(item.a)}</Text>
                    </View>
                ))}
            </View>
        </View>
    )
}
export default FaqSection
