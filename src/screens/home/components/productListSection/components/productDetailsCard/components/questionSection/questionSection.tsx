import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import getStyles from './questionSection.style'
import { Icon } from 'components/commonComponents'
import { useTranslation } from 'react-i18next'

/*
  QuestionSection, ProductDetailsCard içindeki ürün bilgilerini sorgulamak veya satıcıya soru sormak için kullanılan bileşendir.
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
