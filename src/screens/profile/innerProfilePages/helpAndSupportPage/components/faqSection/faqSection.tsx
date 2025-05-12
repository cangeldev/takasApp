import React from 'react'
import { View, Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import { Faqs } from 'utils/helper'
import getStyles from './faqSection.style'

/*
  Bu bileşen, kullanıcıya sıkça sorulan soruları (`FAQ`) ve bunların yanıtlarını gösteren bir bölüm sunar.
  `Faqs` dizisindeki her bir öğe, bir soru ve cevaptan oluşur ve bunlar, her bir soru için başlık ve cevap metinleri olarak sırasıyla görüntülenir.
  Veriler, `useTranslation` ile çevrilen metinler olarak sunulur, böylece çoklu dil desteği sağlanır.
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
