import { StatusBar } from 'react-native'
import React, { FC } from 'react'

interface IStatusBar {
    theme: 'light' | 'dark'
    translucent?: boolean
    backgroundColor?: string
}

export const StatusBarComponent: FC<IStatusBar> = ({ theme, translucent = false, backgroundColor }) => {

    const barStyle = theme === 'light' ? 'light-content' : 'dark-content'
    const color = backgroundColor || (theme === 'light' ? 'black' : 'white')

    return (
        <StatusBar
            translucent={translucent}
            barStyle={barStyle}
            backgroundColor={color}
        />
    )
}
