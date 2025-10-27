import { View, Text, ImageSourcePropType, Image, TouchableOpacity } from 'react-native'
import React, { FC, useState } from 'react'
import getStyles from './followItemCard.style'
import { Icon } from 'components/commonComponents'

interface IFollowItemCardProps {
    image: ImageSourcePropType
    name: string
    activeTab: string
}

/**
 * FollowItemCard: Takip (Following) ve Takipçi (Followers) listelerinde kullanılan, her bir kullanıcıyı temsil eden kart bileşenidir.
 * Kullanıcının avatarını, adını ve etkileşimli bir takip/takipçi yönetim butonu içerir.
 *
 * Butonun işlevi, gösterilen sekmeye (activeTab: "following" veya "followers") göre değişir:
 * - "following" (Takip Edilenler) sekmesinde, buton bir kullanıcının takibi bırakma (user-plus ikonu, aslında muhtemelen 'user-minus' veya 'user-times' olmalı, burada 'user-check' durumundan 'user-plus' ikonuna geçiş yapar) işlevini sağlar.
 * - "followers" (Takipçiler) sekmesinde, buton bir takipçiyi listeden çıkarma/engelleme ('user-minus' ikonu) işlevini sağlar.
 * activeIcon state'i, butonun mevcut durumunu (Takip Ediliyor: 'user-check' veya Yönetim Aksiyonu: selectIcon) dinamik olarak yönetir.
 */
export const FollowItemCard: FC<IFollowItemCardProps> = ({ image, name, activeTab }) => {
    const [activeIcon, setactiveIcon] = useState<'user-check' | 'user-plus' | 'user-minus'>('user-check')
    const styles = getStyles()
    const selectIcon = activeTab === "following" ? 'user-plus' : 'user-minus'

    return (
        <View style={styles.container}>
            <Image source={image} style={styles.avatar} />
            <Text style={styles.name}>{name}</Text>
            <TouchableOpacity
                disabled={activeIcon === 'user-minus'}
                style={[
                    styles.baseButton,
                    activeIcon === 'user-check' ? styles.followedButton : styles.followButton
                ]}
                onPress={() =>
                    setactiveIcon(prev => (prev === 'user-check' ? selectIcon : 'user-check'))
                }>
                <Icon
                    name={activeIcon}
                    type="FontAwesome6"
                    style={[
                        styles.baseIcon,
                        activeIcon === 'user-check' ? styles.followedIcon : styles.followIcon
                    ]}
                />
            </TouchableOpacity>

        </View>
    )
}