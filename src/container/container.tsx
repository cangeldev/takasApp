import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StackNavigation } from 'navigation/index'

export const Container = () => {
    return (
        <NavigationContainer>
            <StackNavigation />
        </NavigationContainer>
    )
}