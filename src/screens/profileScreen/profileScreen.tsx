import { View, Text, FlatList, ScrollView } from 'react-native'
import React from 'react'
import style from './style'
import { Divider, Icon, ProfileImage, StatusBarComponent } from 'components/index'
import { ProfileActivitySummaryCard, ProfileSettingOptionCard, ProfileStatsCard } from 'components/cards'
import { gave, received, replacement } from 'assets/index'
import { ProfileSettingsOptionsList } from 'utils/helper'

/*
  ProfileScreen, kullanıcı profilinin görüntülendiği ve çeşitli ayarların yapıldığı bir ekran bileşenidir. 
  Bu ekran, kullanıcıya profil bilgilerini ve istatistiklerini gösterirken, aynı zamanda profil aktiviteleri 
  ve kullanıcı ayarları gibi özellikleri de sunmaktadır. 
  kullanıcıların profilini güncelleyebilmesi, istatistiklerini takip edebilmesi ve hesap ayarlarını düzenleyebilmesi için gerekli tüm özellikleri içerir.
*/

const renderItem = ({ item }: any) =>
    <ProfileSettingOptionCard iconName={item.iconName} icontype={item.type} title={item.title} />
const MemoizedIcon = React.memo(Icon)

export const ProfileScreen = () => {
    return (
        <ScrollView style={style.container}>
            <StatusBarComponent theme='dark' />
            <HeaderSection />
            <ProfileSection />
            <Divider />
            <ActivitySummarySection />
            <View style={style.advert} />

            {/* Settings Options section */}
            <FlatList
                data={ProfileSettingsOptionsList}
                renderItem={renderItem}
                keyExtractor={(item) => item.title}
                style={style.settingsListContainer}
                scrollEnabled={false}
            />
            {/* değerlendirmeler eklenebilir ayarlara */}
        </ScrollView>
    )
}


{/* Header Section */ }
const HeaderSection = () => (
    <View style={style.header}>
        <Text style={style.logoText}>Takasla</Text>
        <MemoizedIcon name='setting' type='AntDesign' style={style.icon} />
        <MemoizedIcon name='bell' type='Fontisto' style={style.icon} />
    </View>
)

{/* Profile Section */ }
const ProfileSection = () => (
    <View style={style.profileSection}>
        <View>
            <View style={style.profileImageWrapper}>
                <ProfileImage />
                <MemoizedIcon name='camera-plus-outline' type='MaterialCommunityIcons' style={style.cameraIcon} />
            </View>
            <Text style={style.profileName}>Can GEL</Text>
        </View>
        <View style={style.statsContainer}>
            <ProfileStatsCard count='0' title='Takaslar' />
            <ProfileStatsCard count='0' title='Takipçi' />
            <ProfileStatsCard count='0' title='Takip' />
            <ProfileStatsCard count='0' title='Favori' />
        </View>
    </View>
)

{/* Activity Summary Section */ }
const ActivitySummarySection = () => (
    <View style={style.activitySummarySection}>
        <ProfileActivitySummaryCard image={received} title='Aldıklarım' />
        <View style={style.divider} />
        <ProfileActivitySummaryCard image={replacement} title='Bekleyen Takaslar' />
        <View style={style.divider} />
        <ProfileActivitySummaryCard image={gave} title='Verdiklerim' />
    </View>
)