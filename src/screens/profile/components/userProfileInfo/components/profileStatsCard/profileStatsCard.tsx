import { View, Text } from 'react-native'
import React from 'react'
import getStyles from './profileStatsCard.style'

interface IProfileInfoCardProps {
    count: string
    title: string
}

//ProfileStatsCard, bu card yapısı kullanıcının takip ve takipçilerin favorilerinin ve takas sayılarının görünmesi ve istenilen sayfaya ulaşması için tasarlanan yapıdır.
export const ProfileStatsCard = React.memo(({ count, title }: IProfileInfoCardProps) => {
    const style = getStyles()

    return (
        <View style={style.container}>
            <Text style={style.count}>{count}</Text>
            <Text style={style.title}>{title}</Text>
        </View>
    )
})

