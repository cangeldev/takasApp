import React from 'react'
import { View, Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import getStyles from './nameVisibilitySection.style'
import { NameVisibilitySectionComponent } from './components/nameVisibilitySectionComponent/nameVisibilitySectionComponent'

/*
  Bu bileşen, kullanıcıya profilinde görünen ismini kimlerin görebileceğini seçme imkanı sunar.
  Açıklayıcı bir metin ve bu işlemi gerçekleştirecek alt bileşen olan `NameVisibilitySectionComponent`'i içerir.
*/
export const NameVisibilitySection = () => {
    const styles = getStyles()
    const { t } = useTranslation()

    return (
        <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>{t("selectNameText")}</Text>
            <NameVisibilitySectionComponent />
        </View>
    )
}
export default NameVisibilitySection
