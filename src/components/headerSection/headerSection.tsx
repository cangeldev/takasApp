import { View, Text } from 'react-native'
import React, { FC } from 'react'
import getStyles from './style'
import { useTranslation } from 'react-i18next'
import { Icon } from 'components/icon/icon'
import { useNavigation } from '@react-navigation/native'

interface IHeaderSection {
    headerTitle: any
    addAddressVisible?: boolean
}

/*
  HeaderSection, bu yapı sayfalarda kullanılacak üst bölge için tasarlanan yapıdır.
  Bir geri butonu ve sayfa hakkında başlığı ve içeriği hakkında bilgi veren yapıdır.
*/
export const HeaderSection: FC<IHeaderSection> = ({ headerTitle, addAddressVisible }) => {

    const styles = getStyles()
    const { t } = useTranslation()
    const navigation = useNavigation()

    return (
        <View style={styles.header}>
            <Icon onPress={navigation.goBack} name="arrow-back" type="Ionicons" style={styles.backIcon} />
            <Text style={styles.headerTitle}>{t(headerTitle)}</Text>
            {addAddressVisible == true ? <Text style={styles.addAddress}>{t("addAddress")}</Text> : null}
        </View>
    )
}
