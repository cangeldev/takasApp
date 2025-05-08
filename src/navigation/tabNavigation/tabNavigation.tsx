import React, { useMemo } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, MyAdsScreen, ProductAddScreen, ProfileScreen, SearchScreen } from 'screens/index'
import { useTheme } from 'hooks/useTheme'
import { home, homeInactive, search, plus, menuButton, menuButtonInactive, avatar, avatarInactive } from 'assets/index'
import { TabBarIcon } from 'components/commonComponents'

const Tab = createBottomTabNavigator()

export const TabNavigation = () => {
  const theme = useTheme()

  const tabBarStyle = useMemo(() => ({
    paddingTop: 5,
    backgroundColor: theme.backgroundColor,
  }), [theme.backgroundColor])

  const tabs = [
    { name: "Home", component: HomeScreen, icon: [homeInactive, home] },
    { name: "Search", component: SearchScreen, icon: [search, search], isTinted: true },
    { name: "ProductAdd", component: ProductAddScreen, icon: [plus, plus], size: 34, isTinted: true },
    { name: "MyAds", component: MyAdsScreen, icon: [menuButtonInactive, menuButton] },
    { name: "Profile", component: ProfileScreen, icon: [avatarInactive, avatar] }
  ]

  return (
    <Tab.Navigator
      detachInactiveScreens
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle
      }}
    >
      {tabs.map(({ name, component, icon, size = 24, isTinted }) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            tabBarIcon: ({ focused }) => TabBarIcon({ source: icon[+focused], focused, size, isTinted }),
          }}
        />
      ))}
    </Tab.Navigator>
  )
}
