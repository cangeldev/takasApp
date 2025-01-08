import { View, Text } from 'react-native'
import React from 'react'
import { ProfileImage, StatusBarComponent } from 'components/index'
import style from './style'

export const ProfileScreen = () => {
    return (
        <View style={style.container}>
            <StatusBarComponent theme='dark' />
            <View style={style.profileImageView}>
                <ProfileImage />
            </View>
        </View>
    )
}