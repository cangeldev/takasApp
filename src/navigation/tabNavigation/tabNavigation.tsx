import React from 'react'
import { Image } from 'react-native'
import colors from 'assets/colors/colors'
import { avatar, avatarInactive, home, homeInactive, menuButton, menuButtonInactive, plus, search } from 'assets/index'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeStackNavigator, MyAdsStackNavigator, ProductAddStackNavigator, ProfileStackNavigator, SearchStackNavigator, } from '../stackNavigation/stackNavigation'

const Tab = createBottomTabNavigator()

export const TabNavigation = () => {
    const renderIcon = (source: any, focused: any, size = 24, isTinted = false) => (
        <Image
            source={source}
            style={[
                { width: size, height: size },
                isTinted && { tintColor: focused ? colors.bottomTabIconActiveColor : colors.bottomTabIconInactiveColor }
            ]}
        />
    )

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    paddingTop: 5
                }
            }}>
            <Tab.Screen
                name="Home"
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => renderIcon(focused ? home : homeInactive, focused)
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchStackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => renderIcon(search, focused, 24, true)
                }}
            />
            <Tab.Screen
                name="ProductAdd"
                component={ProductAddStackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => renderIcon(plus, focused, 34, true)
                }}
            />
            <Tab.Screen
                name="MyAds"
                component={MyAdsStackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => renderIcon(focused ? menuButton : menuButtonInactive, focused)
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => renderIcon(focused ? avatar : avatarInactive, focused)
                }}
            />
        </Tab.Navigator>
    )
}

