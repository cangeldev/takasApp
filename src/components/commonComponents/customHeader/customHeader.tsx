import React, { FC } from 'react'
import { View, Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '../icon/icon'
import getStyles from './customHeader.style'

interface ICustomHeaderProps {
    headerTitle: string
    addAddressVisible?: boolean
}

/*
  HeaderSection, bu yapı sayfalarda kullanılacak üst bölge için tasarlanan yapıdır.
  Bir geri butonu ve sayfa hakkında başlığı ve içeriği hakkında bilgi veren yapıdır.
*/
export const CustomHeader: FC<ICustomHeaderProps> = ({ headerTitle, addAddressVisible }) => {

    const styles = getStyles()
    const { t } = useTranslation()
    const navigation = useNavigation()

    return (
        <View style={styles.header}>
            <Icon onPress={navigation.goBack} name="arrow-back" type="Ionicons" style={styles.backIcon} />
            <Text style={styles.headerTitle}>{t(headerTitle)}</Text>
            {addAddressVisible && <Text style={styles.addAddress}>{t("addAddress")}</Text>}
        </View>
    )
}
