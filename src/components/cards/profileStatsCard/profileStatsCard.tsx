import { View, Text } from 'react-native'
import React, { FC } from 'react'
import style from './style'

interface IProfileInfoCard {
    count: string
    title: string
}

export const ProfileStatsCard: FC<IProfileInfoCard> = ({ count, title }) => {
    return (
        <View style={style.container}>
            <Text style={style.count}>
                {count}
            </Text>
            <Text style={style.title}>
                {title}
            </Text>
        </View>
    )
}
