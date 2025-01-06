import React from 'react'
import { createStaticNavigation } from '@react-navigation/native'
import { HomeScreen, OfferScreen, ProductAddScreen, ProfileScreen, SearchScreen } from 'screens/index'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { FirstPage } from 'pages/firstPage/firstPage'

export const Container = () => {

    const HomeStackScreen = createNativeStackNavigator({
        screens: {
            HomeScreen: {
                screen: HomeScreen
            },
            FirstPage: {
                screen: FirstPage
            }
        }
    })

    const SearchStackScreen = createNativeStackNavigator({
        screens: {
            SearchScreen: {
                screen: SearchScreen
            }
        }
    })
    const ProductAddStackScreen = createNativeStackNavigator({
        screens: {
            ProductAddScreen: {
                screen: ProductAddScreen
            }
        }
    })
    const OfferStackScreen = createNativeStackNavigator({
        screens: {
            OfferScreen: {
                screen: OfferScreen
            }
        }
    })
    const ProfileStackScreen = createNativeStackNavigator({
        screens: {
            ProfileScreen: {
                screen: ProfileScreen
            }
        }
    })

    const RootStack = createBottomTabNavigator({
        screenOptions: {
            headerShown: false
        },
        screens: {
            Home: HomeStackScreen,
            Search: SearchStackScreen,
            ProductAdd: ProductAddStackScreen,
            Offer: OfferStackScreen,
            Profile: ProfileStackScreen
        }
    })

    const Navigation = createStaticNavigation(RootStack)

    return <Navigation />
}