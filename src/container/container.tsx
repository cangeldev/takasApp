import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppStack } from 'navigation/index'

export const Container = () => {
    return (
        <NavigationContainer>
            <AppStack />
        </NavigationContainer>
    )
}