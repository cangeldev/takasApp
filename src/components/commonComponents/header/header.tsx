import React, { FC } from 'react'
import { View, Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useNavigation } from '@react-navigation/native'
import getStyles from './header.style'
import { Icon } from '../icon/icon'

interface IHeaderProps {
    title: string
    showAddAddressButton?: boolean
}

// Bu yapı Sayfa üst kısmında başlık, bir geri butonu ve opsiyonel adres ekle butonunu içeren bileşen.
export const Header: FC<IHeaderProps> = ({ title, showAddAddressButton = false }) => {

    const styles = getStyles()
    const { t } = useTranslation()
    const navigation = useNavigation()
    const handleBackPress = () => navigation.goBack()

    return (
        <View style={styles.headerContainer}>
            <Icon onPress={handleBackPress} name="arrow-back" type="Ionicons" style={styles.backButtonIcon} />
            <Text style={styles.titleText}>{t(title)}</Text>
            {showAddAddressButton && (<Text style={styles.addAddressText}>{t("addAddress")}</Text>)}
        </View>
    )
}
