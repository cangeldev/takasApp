import { View, Text } from 'react-native'
import React, { FC } from 'react'
import getStyles from './style'
import { useTranslation } from 'react-i18next'
import { Icon } from 'components/icon/icon'
import { useNavigation } from '@react-navigation/native'

interface IHeaderSection {

    headerTitle: any
}

export const HeaderSection: FC<IHeaderSection> = ({ headerTitle }) => {

    const styles = getStyles()
    const { t } = useTranslation()
    const navigation = useNavigation()

    return (
        <View style={styles.header}>
            <Icon onPress={navigation.goBack} name="chevron-back-sharp" type="Ionicons" style={styles.backIcon} />
            <Text style={styles.headerTitle}>{t(headerTitle)}</Text>
        </View>
    )
}
