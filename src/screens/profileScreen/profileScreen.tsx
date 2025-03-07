import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { Divider, Icon, ProfileImage } from 'components/index'
import { ProfileActivitySummaryCard, ProfileSettingOptionCard, ProfileStatsCard } from 'components/cards'
import { gave, received, replacement } from 'assets/index'
import { ProfileSettingsOptionsList } from 'utils/helper'
import { useTranslation } from 'react-i18next'
import getStyles from './style'

/*
  ProfileScreen, kullanıcı profilinin görüntülendiği ve çeşitli ayarların yapıldığı bir ekran bileşenidir. 
  Bu ekran, kullanıcıya profil bilgilerini ve istatistiklerini gösterirken, aynı zamanda profil aktiviteleri 
  ve kullanıcı ayarları gibi özellikleri de sunmaktadır. 
  kullanıcıların profilini güncelleyebilmesi, istatistiklerini takip edebilmesi ve hesap ayarlarını düzenleyebilmesi için gerekli tüm özellikleri içerir.
*/

const renderItem = ({ item }: any) =>
    <ProfileSettingOptionCard iconName={item.iconName} icontype={item.type} title={item.title} navigatePage={item.navigatePage} />

export const ProfileScreen = () => {

    const styles = getStyles()
    const { t } = useTranslation()
    return (
        <ScrollView style={styles.container}>
            <HeaderSection styles={styles} />
            <ProfileSection styles={styles} t={t} />
            <Divider />
            <ActivitySummarySection styles={styles} t={t} />
            <View style={styles.advert} />
            <SettingsOptionListSection styles={styles} />
        </ScrollView>
    )
}

const HeaderSection = ({ styles }: { styles: any }) => (
    <View style={styles.header}>
        <Text style={styles.logoText}>Takasla</Text>
        <Icon name='setting' type='AntDesign' style={styles.icon} />
        <Icon name='bell' type='Fontisto' style={styles.icon} />
    </View>
)

const ProfileSection = ({ styles, t }: { styles: any, t: any }) => (
    <View style={styles.profileSection}>
        <View>
            <View style={styles.profileImageWrapper}>
                <ProfileImage />
                <Icon name='camera-plus-outline' type='MaterialCommunityIcons' style={styles.cameraIcon} />
            </View>
            <Text style={styles.profileName}>Can GEL</Text>
        </View>
        <View style={styles.statsContainer}>
            <ProfileStatsCard count='0' title={t('exchange')} />
            <ProfileStatsCard count='0' title={t('followers')} />
            <ProfileStatsCard count='0' title={t('following')} />
            <ProfileStatsCard count='0' title={t('favorite')} />
        </View>
    </View>
)

const ActivitySummarySection = ({ styles, t }: { styles: any, t: any }) => (
    <View style={styles.activitySummarySection}>
        <ProfileActivitySummaryCard image={received} title={t('received')} />
        <View style={styles.divider} />
        <ProfileActivitySummaryCard image={replacement} title={t('pendingExchanges')} />
        <View style={styles.divider} />
        <ProfileActivitySummaryCard image={gave} title={t('gave')} />
    </View>
)

const SettingsOptionListSection = ({ styles }: { styles: any }) => (
    <FlatList
        data={ProfileSettingsOptionsList}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        style={styles.settingsListContainer}
        scrollEnabled={false}
    />
)
