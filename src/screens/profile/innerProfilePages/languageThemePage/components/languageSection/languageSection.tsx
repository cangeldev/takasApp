import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { useTranslation } from 'react-i18next'
import { languages } from 'utils/helper'
import getStyles from './languageSection.style'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { handleLanguageChange } from 'localization/languageUtils'
import LanguageItem from './components/languageItem/languageItem'

/**
 * LanguageSection: Uygulamanın dil ayarlarını yöneten ve kullanıcının diller arasında seçim yapmasını sağlayan arayüz bölümüdür.
 *
 * Kullanılabilir dilleri (languages listesi) bir FlatList içinde gösterir.
 * Redux store'dan mevcut seçili dili (selectedLanguage) alarak, bu dili LanguageItem bileşeninde görsel olarak vurgular.
 * Kullanıcı bir dil seçtiğinde, handleLanguageChange fonksiyonunu (Redux dispatch ile birlikte) çağırarak uygulama dilini dinamik olarak günceller.
 */
export const LanguageSection = () => {
    const { t } = useTranslation()
    const styles = getStyles()
    const selectedLanguage = useSelector((state: RootState) => state.language.language)
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>{t('languageSelection')}</Text>
            <FlatList
                scrollEnabled={false}
                data={languages}
                keyExtractor={(item) => item.code}
                renderItem={({ item }) => (
                    <LanguageItem item={item} selectedLanguage={selectedLanguage} onPress={(language) => handleLanguageChange(language, dispatch)} />
                )}
            />
        </View>
    )
}
export default LanguageSection
