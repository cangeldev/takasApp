import { View, Text } from 'react-native'
import React from 'react'
import { Divider, Icon, ProfileImage, StatusBarComponent } from 'components/index'
import style from './style'
import { ProfileActivitySummaryCard, ProfileStatsCard } from 'components/cards'
import { gave, received, replacement } from 'assets/index'

export const ProfileScreen = () => {
    return (
        <View style={style.container}>
            <StatusBarComponent theme='dark' />

            {/* Header Section */}
            <View style={style.header}>
                <Text style={style.logoText}>
                    Takasla
                </Text>
                <Icon name='setting' type='AntDesign' style={style.icon} />
                <Icon name='bell' type='Fontisto' style={style.icon} />
            </View>

            {/* Profile Section */}
            <View style={style.profileSection}>
                <View style={style.profileInfoContainer}>
                    <View style={style.profileImageWrapper}>
                        <ProfileImage />
                        <Icon name='camera-plus-outline' type='MaterialCommunityIcons' style={style.cameraIcon} />
                    </View>
                    <Text style={style.profileName}>
                        Can GEL
                    </Text>
                </View>

                {/* Profile Stats Section */}
                <View style={style.statsContainer}>
                    <ProfileStatsCard count='0' title='Takaslar' />
                    <ProfileStatsCard count='0' title='Takipçi' />
                    <ProfileStatsCard count='0' title='Takip' />
                    <ProfileStatsCard count='0' title='Favori' />
                </View>
            </View>
            <Divider />

            {/* Activity Summary Section */}
            <View style={style.activitySummarySection}>
                <ProfileActivitySummaryCard image={received} title='Aldıklarım' />
                <ProfileActivitySummaryCard image={replacement} title='Bekleyen Takaslar' />
                <ProfileActivitySummaryCard image={gave} title='Verdiklerim' />
            </View>
        </View>
    )
}
