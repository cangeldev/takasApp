import { Image } from 'react-native'
import React, { FC } from 'react'
import colors from 'assets/colors/colors'

interface RenderIconProps {
    source: any
    focused: boolean
    size?: number
    isTinted?: boolean
}

export const TabBarIcon: FC<RenderIconProps> = ({ source, focused, size = 24, isTinted = false }) => {
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
