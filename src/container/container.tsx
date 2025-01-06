import React from 'react'
import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { HomeScreen, OfferScreen, ProductAddScreen, ProfileScreen, SearchScreen } from 'screens/index'

export const Container = () => {

    const RootStack = createNativeStackNavigator({
        screens: {
            Home: HomeScreen,
            Search: SearchScreen,
            ProductAdd: ProductAddScreen,
            Offer: OfferScreen,
            Profile: ProfileScreen,
        }
    })

    const Navigation = createStaticNavigation(RootStack)

    return <Navigation />
}