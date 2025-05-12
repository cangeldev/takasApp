import { View, Text, Image, ImageSourcePropType } from 'react-native'
import React, { FC } from 'react'
import getStyles from './profileActivitySummaryCard.style'

interface IProfileActivitySummaryCardProps {
    title: string
    image: ImageSourcePropType
}

/*
  `ProfileActivitySummaryCard`, kullanıcının aldığı, verdiği veya bekleyen takaslarını görmesi ve 
  bu takaslara kolayca ulaşabilmesi için tasarlanmış bir kart bileşenidir. 
  Bu bileşen, her bir aktiviteyi bir ikon ve başlıkla birlikte görsel olarak sunar.
*/
export const ProfileActivitySummaryCard: FC<IProfileActivitySummaryCardProps> = ({ image, title }) => {
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
