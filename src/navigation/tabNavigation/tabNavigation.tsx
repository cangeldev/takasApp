import React from 'react'
import { Image } from 'react-native'
import colors from 'assets/colors/colors'
import { avatar, avatarInactive, home, homeInactive, menuButton, menuButtonInactive, plus, search } from 'assets/index'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, MyAdsScreen, ProductAddScreen, ProfileScreen, SearchScreen } from 'screens/index'
import { useTheme } from 'hooks/useTheme'

export const TabNavigation = () => {

    const Tab = createBottomTabNavigator()
    const theme = useTheme()
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
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    paddingTop: 5,
                    backgroundColor: theme.backgroundColor
                }
            }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => renderIcon(focused ? home : homeInactive, focused)
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ focused }) => renderIcon(search, focused, 24, true)
                }}
            />
            <Tab.Screen
                name="ProductAdd"
                component={ProductAddScreen}
                options={{
                    tabBarIcon: ({ focused }) => renderIcon(plus, focused, 34, true)
                }}
            />
            <Tab.Screen
                name="MyAds"
                component={MyAdsScreen}
                options={{
                    tabBarIcon: ({ focused }) => renderIcon(focused ? menuButton : menuButtonInactive, focused)
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => renderIcon(focused ? avatar : avatarInactive, focused)
                }}
            />
        </Tab.Navigator>
    )
}

