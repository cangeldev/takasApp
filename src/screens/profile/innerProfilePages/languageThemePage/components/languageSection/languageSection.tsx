import React from 'react'
import { Text, FlatList } from 'react-native'
import { useTranslation } from 'react-i18next'
import { languages } from 'utils/helper'
import getStyles from './languageSection.style'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { handleLanguageChange } from 'localization/languageUtils'
import LanguageItem from './components/languageItem/languageItem'

/*
  Bu bileşen, kullanıcının uygulamanın dilini değiştirebileceği bir dil seçme ekranı sunar.
  `languages` listesi aracılığıyla dil seçeneklerini bir `FlatList` içinde sıralar.
  Kullanıcı bir dil seçtiğinde, `handleLanguageChange` fonksiyonu ile dil değişikliği yapılır ve bu değişiklik Redux ile yönetilir.
  Mevcut seçili dil, Redux store'dan alınarak, görsel olarak vurgulanmak üzere `LanguageItem` bileşenine iletilir.
*/
export const LanguageSection = () => {
    const { t } = useTranslation()
    const styles = getStyles()
    const selectedLanguage = useSelector((state: RootState) => state.language.language)
    const dispatch = useDispatch()

    return (
        <>
            <Text style={styles.sectionTitle}>{t('languageSelection')}</Text>
            <FlatList
                scrollEnabled={false}
                data={languages}
                keyExtractor={(item) => item.code}
                renderItem={({ item }) => (
                    <LanguageItem item={item} selectedLanguage={selectedLanguage} onPress={(language: any) => handleLanguageChange(language, dispatch)} />
                )}
            />
        </>
    )
}
export default LanguageSection
