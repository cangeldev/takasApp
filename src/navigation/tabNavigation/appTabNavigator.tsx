import React, { useMemo } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, MyAdsScreen, ProductAddScreen, ProfileScreen, SearchScreen } from 'screens/index'
import { useTheme } from 'hooks/useTheme'
import images from 'assets/index'
import { TabBarIcon } from 'components/commonComponents'

const Tab = createBottomTabNavigator()

const tabs = [
  { name: "Home", component: HomeScreen, icon: [images.icons.homeInactive, images.icons.home] },
  { name: "Search", component: SearchScreen, icon: [images.icons.search, images.icons.search], isTinted: true },
  { name: "ProductAdd", component: ProductAddScreen, icon: [images.icons.plus, images.icons.plus], size: 34, isTinted: true },
  { name: "MyAds", component: MyAdsScreen, icon: [images.icons.menuButtonInactive, images.icons.menuButton] },
  { name: "Profile", component: ProfileScreen, icon: [images.icons.avatarInactive, images.icons.avatar] }
]

export const AppTabNavigator = () => {
  const theme = useTheme()
  const tabBarStyle = useMemo(() => ({
    paddingTop: 5,
    backgroundColor: theme.backgroundColor,
  }), [theme.backgroundColor])

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
