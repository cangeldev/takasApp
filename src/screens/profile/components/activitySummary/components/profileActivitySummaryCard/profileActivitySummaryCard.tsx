import { View, Text, Image, ImageSourcePropType } from 'react-native'
import React, { FC } from 'react'
import getStyles from './profileActivitySummaryCard.style'

interface IProfileActivitySummaryCardProps {
    title: string
    image: ImageSourcePropType
}

/**
 * ProfileActivitySummaryCard: ActivitySummary bileşeni içinde kullanılan, kullanıcının tek bir takas aktivitesi (Alınan, Verilen, Bekleyen Takaslar) hakkında bilgi gösteren küçük, etkileşime açık kart bileşenidir.
 *
 * Kart, ilgili aktiviteyi temsil eden bir görsel (image) ve aktivitenin başlığını (title) içerir.
 * Bu kartlar, genellikle üzerine tıklandığında kullanıcıyı ilgili aktivite listesi ekranına yönlendirir (ancak bu işlevsellik burada tanımlanmamıştır).
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
