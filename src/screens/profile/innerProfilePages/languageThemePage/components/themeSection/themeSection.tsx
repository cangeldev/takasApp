import React from 'react'
import { Text, FlatList, View } from 'react-native'
import { useTranslation } from 'react-i18next'
import getStyles from './themeSection.style'
import { ThemeOptionsList } from 'utils/helper'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/store'
import { handleThemeChange } from 'theme/theme'
import ThemeItem from './components/themeItem/themeItem'

/**
 * ThemeSection: Kullanıcının uygulama temasını (örneğin, açık veya koyu mod) seçmesini sağlayan ayarlar arayüzü bölümüdür.
 *
 * Mevcut tema seçeneklerini (ThemeOptionsList) bir FlatList içinde listeler.
 * Redux store'dan mevcut seçili temayı (selectedTheme) alır ve ThemeItem bileşeni aracılığıyla bu seçimi görsel olarak vurgular.
 * Kullanıcı bir tema seçtiğinde, handleThemeChange fonksiyonunu (Redux dispatch ile birlikte) çağırarak uygulama temasını dinamik olarak günceller ve kalıcı olarak kaydeder.
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
