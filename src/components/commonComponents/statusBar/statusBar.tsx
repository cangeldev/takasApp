import { Platform, StatusBar } from 'react-native'
import React, { FC, useEffect } from 'react'
import { useTheme } from 'hooks/useTheme'
import SystemNavigationBar from 'react-native-system-navigation-bar'

interface IStatusBar {
    translucent?: boolean
    backgroundColor?: string
}

// AppStatusBar, uygulama içinde kullanılan status bar ve Android navigasyon çubuğu ayarlarını temaya göre yapan bileşendir.
export const AppStatusBar: FC<IStatusBar> = ({ translucent = false, backgroundColor }) => {

    const theme = useTheme()
    const barBackgroundColor = backgroundColor || theme.backgroundColor
    const barStyle = theme.backgroundColor === '#fff' ? 'dark-content' : 'light-content'

    useEffect(() => {
        if (Platform.OS === 'android') {
            try {
                SystemNavigationBar.setNavigationColor(theme.backgroundColor)
            } catch (error) {
                console.warn("SystemNavigationBar'ı ayarlarken hata oluştu:", error)
            }
        }
    }, [theme.backgroundColor])

    return (
        <StatusBar
            barStyle={barStyle}
            backgroundColor={barBackgroundColor}
            translucent={translucent}
        />
    )
}
