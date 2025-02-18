import { StatusBar } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface IStatusBar {
    theme?: 'light' | 'dark'
    translucent?: boolean
    backgroundColor?: string
}

export const StatusBarComponent: FC<IStatusBar> = ({ theme, translucent = false, backgroundColor }) => {
    const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light')

    useEffect(() => {
        const fetchTheme = async () => {
            try {
                const storedTheme = await AsyncStorage.getItem('theme')
                if (storedTheme) {
                    setCurrentTheme(storedTheme as 'light' | 'dark')
                }
            } catch (error) {
                console.error('Tema alma hatası:', error)
            }
        }

        fetchTheme()
    }, [])

    const barStyle = currentTheme === 'light' ? 'dark-content' : 'light-content'
    const backgroundColorToUse = backgroundColor || (currentTheme === 'light' ? 'white' : 'black')

    return (
        <StatusBar
            translucent={translucent}
            barStyle={barStyle}
            backgroundColor={backgroundColorToUse}
        />
    )
}
