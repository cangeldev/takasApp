import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import style from './style'

interface IProfileActivitySummaryCard {
    title: string
    image: any
}

export const ProfileActivitySummaryCard: FC<IProfileActivitySummaryCard> = ({ image, title }) => {
    return (
        <View style={style.container}>
            <View style={style.activityIconWrapper}>
                <Image source={image} style={style.activityIcon} />
            </View>
            <Text style={style.activityLabel}>
                {title}
            </Text>
        </View>
    )
}
