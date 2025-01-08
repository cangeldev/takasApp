import { StatusBar } from 'react-native'
import React, { FC } from 'react'

interface IStatusBar {
    theme: string
}

export const StatusBarComponent: FC<IStatusBar> = ({ theme }) => {

    const barStyle = theme === 'light' ? 'light-content' : 'dark-content'
    return (
        <StatusBar
            barStyle={barStyle}
            backgroundColor={theme === 'light' ? 'black' : 'white'}
        />
    )
}
