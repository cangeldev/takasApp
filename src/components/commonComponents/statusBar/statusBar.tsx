import { StatusBar } from 'react-native'
import React, { FC, useEffect } from 'react'
import { useTheme } from 'hooks/useTheme'
import SystemNavigationBar from 'react-native-system-navigation-bar'

interface IStatusBar {
    translucent?: boolean
    backgroundColor?: string
}

// AppStatusBar, bu component uygulama içinde kullanılan status barın ayarlamalarını yapmak için kullandığı bileşendir.
export const AppStatusBar: FC<IStatusBar> = ({ translucent = false, backgroundColor }) => {

    const theme = useTheme()
    const barBackgroundColor = backgroundColor || theme.backgroundColor
    const barStyle = theme.backgroundColor === '#fff' ? 'dark-content' : 'light-content'

    useEffect(() => {
        SystemNavigationBar.setNavigationColor(theme.backgroundColor)
    }, [theme.backgroundColor])

    return (
        <StatusBar
            barStyle={barStyle}
            backgroundColor={barBackgroundColor}
            translucent={translucent}
        />
    )
}
