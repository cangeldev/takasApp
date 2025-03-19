import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import getStyles from './style'

interface IProfileActivitySummaryCard {
    title: string
    image: any
}

/*
  ProfileActivitySummaryCard, bu card yapısı kullanıcının aldığı, verdiği veya bekleyen takaslarını görmesi için ve ulaşması için tasarlanan yapıdır.
*/
export const ProfileActivitySummaryCard: FC<IProfileActivitySummaryCard> = ({ image, title }) => {

    const style = getStyles()

    return (
        <View style={style.container}>
            <Image source={image} style={style.activityIcon} />
            <Text style={style.activityLabel}>
                {title}
            </Text>
        </View>
    )
}
