import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import getStyles from './questionSection.style'
import { Icon } from 'components/commonComponents'
import { useTranslation } from 'react-i18next'

/**
 * QuestionSection: Ürün Detay sayfasında (ProductDetailsCard) alıcıların ürün hakkında satıcıya soru sorabileceği alanı temsil eder.
 *
 * "Soru & Cevap" başlığını ve bilgilendirme ikonunu (qaHeaderRow) içerir.
 * Kullanıcının hızlıca soru sorabilmesi için önceden tanımlanmış soru etiketlerini (questionTagsWrapper) yatay kaydırılabilir bir liste halinde sunar.
 * Ayrıca, kullanıcıyı satıcıya yeni bir soru sorması için bir giriş kutusuna (questionInputBox) yönlendirir.
 */
export const QuestionSection = () => {
    const { t } = useTranslation()

    const questions = [
        "Ölçüleri nedir?",
        "Ne zaman kargolarsınız?",
        "Defosu var mı?",
    ]

    const styles = getStyles()
    return (
        <View style={styles.qaSectionContainer}>
            <View style={styles.qaHeaderRow}>
                <Text style={styles.qaTitleText}>{t("questionAnswer")}</Text>
                <Text style={styles.qaInfoIcon}>ℹ️</Text>
            </View>

            <View style={styles.questionTagsWrapper}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {questions.map((q, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.questionTagItem}
                        >
                            <Text style={styles.questionTagText}>{q}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <TouchableOpacity style={styles.questionInputBox}>
                <Text style={styles.questionPlaceholderText}>{t("askSellerQuestion")}</Text>
                <Icon name={'pencil'} type="EvilIcons" style={styles.questionPencilIcon} />
            </TouchableOpacity>
        </View>
    )
}
