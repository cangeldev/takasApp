import { View, Text } from 'react-native'
import React from 'react'
import getStyles from './profileStatsCard.style'

interface IProfileInfoCardProps {
    count: string
    title: string
}

/**
 * ProfileStatsCard: Kullanıcı Profil Bilgisi (UserProfileInfo) bileşeninde kullanılan, kullanıcının tek bir uygulama içi istatistiğini (örneğin, takipçi sayısı, favori sayısı, takas sayısı) gösteren, küçük ve sade kart bileşenidir.
 *
 * Bileşen, sayıyı (count) büyük ve belirgin bir şekilde, ilgili istatistiğin adını (title) ise altında daha küçük bir metinle gösterir.
 * Bu kartlar, genellikle üzerine tıklandığında kullanıcıyı ilgili listeleme sayfasına (örneğin, Takipçilerim listesine) yönlendirir (ancak bu işlevsellik burada tanımlanmamıştır).
 * Performans için React.memo ile sarmalanmıştır.
 */
export const ProfileStatsCard = React.memo(({ count, title }: IProfileInfoCardProps) => {
    const style = getStyles()

    return (
        <View style={style.container}>
            <Text style={style.count}>{count}</Text>
            <Text style={style.title}>{title}</Text>
        </View>
    )
})

