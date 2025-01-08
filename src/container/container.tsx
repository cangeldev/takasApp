import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { TabNavigation } from 'navigation/index'

export const Container = () => {
    return (
        <NavigationContainer>
            <TabNavigation />
        </NavigationContainer>
    )
}