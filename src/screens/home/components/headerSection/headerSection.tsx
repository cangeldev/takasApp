import { View, Text } from 'react-native'
import React from 'react'
import { Icon, SearchBar } from 'components/commonComponents'
import getStyles from './headerSection.style'

export const HeaderSection = () => {
    const styles = getStyles()
   
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
            <SearchBar />
        </View>
    )
}