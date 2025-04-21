import { Image } from 'react-native'
import React, { FC } from 'react'
import colors from 'assets/colors/colors'

interface ITabBarIconProps {
    source: any
    focused: boolean
    size?: number
    isTinted?: boolean
}

/*
  TabBarIcon, bu component uygulamada kullanılan tab navigasyonu seçili anında veya seçili olmadığı durumda gösterilecek iconun belirlenmesi ve gösterilmesi için kullanılan bileşendir.
*/
export const TabBarIcon: FC<ITabBarIconProps> = ({ source, focused, size = 24, isTinted = false }) => {
    return (
        <Image
            source={source}
            style={[
                { width: size, height: size },
                isTinted && { tintColor: focused ? colors.bottomTabIconActiveColor : colors.bottomTabIconInactiveColor }
            ]}
        />
    )
}
