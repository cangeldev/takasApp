import { Image, ImageSourcePropType, ImageStyle } from 'react-native'
import React, { FC } from 'react'
import { colors } from 'assets/colors/colors'

interface ITabBarIconProps {
    source: ImageSourcePropType
    focused: boolean
    size?: number
    isTinted?: boolean
}


// TabBarIcon, bu component uygulamada kullanılan tab navigasyonu seçili anında veya seçili olmadığı durumda gösterilecek iconun belirlenmesi ve gösterilmesi için kullanılan bileşendir.
export const TabBarIcon: FC<ITabBarIconProps> = ({ source, focused, size = 24, isTinted = false }) => {

    const iconStyles: ImageStyle[] = [
        { width: size, height: size }
    ]

    if (isTinted) {
        iconStyles.push({
            tintColor: focused ? colors.tab.active : colors.tab.inactive // 👈 Temadan gelen renkler kullanıldı
        });
    }
    return (
        <Image
            source={source}
            style={iconStyles}
        />
    )
}
