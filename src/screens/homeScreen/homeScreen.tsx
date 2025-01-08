import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button } from '@react-navigation/elements'
import switchTheme from 'react-native-theme-switch-animation'
import { StatusBarComponent } from 'components/index'

export const HomeScreen = () => {
    const [theme, setTheme] = useState('light')
    const navigation = useNavigation<any>()

    return (
        <View style={{ backgroundColor: theme === 'light' ? 'black' : 'white', flex: 1 }}>
            <StatusBarComponent theme={theme} />
            <Text>homeScreen</Text>
            <Button onPress={() => navigation.navigate('FirstPage')}>
                Go to Details
            </Button>
            <Button
                onPress={() => {
                    switchTheme({
                        switchThemeFunction: () => {
                            setTheme(theme === 'light' ? 'dark' : 'light')
                        },
                        animationConfig: {
                            type: 'fade',
                            duration: 900,
                        }
                    })
                }}>
                deneme
            </Button>
            <Text
                style={{
                    color: theme === 'light' ? 'white' : 'black'
                }}>
                test
            </Text>
        </View>
    )
}
