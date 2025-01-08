import { View, Text } from 'react-native'
import React from 'react'
import { Icon, ProfileImage, StatusBarComponent } from 'components/index'
import style from './style'

export const ProfileScreen = () => {
    return (
        <View style={style.container}>
            <StatusBarComponent theme='dark' />
            <View style={style.header}>
                <Text style={style.logo}>
                    Takasla
                </Text>
                <Icon name='setting' type='AntDesign' style={style.icon} />
                <Icon name='bell' type='Fontisto' style={style.icon} />
            </View>
            <View style={style.profileImageView}>
                <ProfileImage />
            </View>
        </View>
    )
}