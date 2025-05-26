import { View, Text, ImageSourcePropType, Image, TouchableOpacity } from 'react-native'
import React, { FC, useState } from 'react'
import getStyles from './followItemCard.style'
import { Icon } from 'components/commonComponents'

interface IFollowItemCardProps {
    image: ImageSourcePropType
    name: string
    activeTab: string
}

/*
  `FollowItemCard`, kullanıcının takip ettiği ve takipçilerinin görüntülenmesi için gerektiğinde listeden çıkarabilmesi içintasarlanmış bir kart bileşenidir. 
  Bu bileşen, her bir kullanıcıyı bir resim ve kullanıcı bilgileriyle birlikte görsel olarak sunar.
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