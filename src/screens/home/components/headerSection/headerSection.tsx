import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Icon } from 'components/commonComponents'
import getStyles from './headerSection.style'
import { useTranslation } from 'react-i18next'

export const HeaderSection = () => {
    const styles = getStyles()
    const { t } = useTranslation()
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.appTitleText}>Takasla</Text>
                <View style={styles.addressContainer}>
                    <Icon name='location' type='Entypo' style={styles.locationIcon} />
                    <Text style={styles.locationText}>
                        Düzce,Düzce
                    </Text>
                    <Icon name='chevron-down' type='FontAwesome5' style={styles.downIcon} />
                </View>
                <Icon name='shopping-outline' type='MaterialCommunityIcons' style={styles.iconButton} />
                <Icon name='bell' type='Fontisto' style={styles.iconButton} />
            </View>
            <View style={styles.inputContainer}>
                <Icon name='search' type='Feather' style={styles.searchIcon} />
                <TextInput placeholderTextColor={"#5b5d5f"} placeholder={t("homeSearchPlaceHolder")} />
            </View>
        </View>
    )
}