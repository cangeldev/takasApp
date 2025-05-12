import React from 'react'
import { Text, FlatList, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import getStyles from './themeSection.style'
import { ThemeOptionsList } from 'utils/helper'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { handleThemeChange } from 'theme/theme'
import ThemeItem from './components/themeItem/themeItem'

/*
  Bu bileşen, kullanıcının uygulama teması arasında seçim yapmasına olanak tanır.
  `ThemeOptionsList` aracılığıyla tema seçeneklerini listeleyen bir `FlatList` kullanır.
  Kullanıcı bir tema seçtiğinde, `handleThemeChange` fonksiyonu ile tema değişikliği yapılır ve bu değişiklik Redux ile yönetilir.
  Mevcut seçili tema, Redux store'dan alınarak, seçili temayı görsel olarak vurgulamak için `ThemeItem` bileşenine iletilir.
*/

export const ThemeSection = () => {
    const { t } = useTranslation()
    const styles = getStyles()
    const selectedTheme = useSelector((state: RootState) => state.theme.theme)
    const dispatch = useDispatch()

    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>{t('themeSelection')}</Text>
            <FlatList
                scrollEnabled={false}
                data={ThemeOptionsList}
                keyExtractor={(item) => item.theme}
                renderItem={({ item }) => (
                    <ThemeItem item={item} selectedTheme={selectedTheme} onPress={(theme: any) => handleThemeChange(theme, dispatch)} />
                )}
            />
        </View>
    )
}
export default ThemeSection
