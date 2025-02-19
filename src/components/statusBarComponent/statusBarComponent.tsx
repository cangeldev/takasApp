import { StatusBar } from 'react-native'
import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'features/reduxToolkit/store'

interface IStatusBar {
    translucent?: boolean
    backgroundColor?: string
}

export const StatusBarComponent: FC<IStatusBar> = ({ translucent = false, backgroundColor }) => {

    const theme = useSelector((state: RootState) => state.themes.ThemeInfo.theme)
    const barStyle = theme === 'light' ? 'dark-content' : 'light-content'
    const backgroundColorToUse = backgroundColor || (theme === 'light' ? 'white' : 'black')

    return (
        <StatusBar
            translucent={translucent}
            barStyle={barStyle}
            backgroundColor={backgroundColorToUse}
        />
    )
}
