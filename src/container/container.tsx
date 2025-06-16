import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppStackNavigator } from 'navigation/index'

export const Container = () => {
    return (
        <NavigationContainer>
            <AppStackNavigator />
        </NavigationContainer>
    )
}