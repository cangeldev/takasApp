import React from 'react'
import { Image } from 'react-native'
import colors from 'assets/colors/colors'
import { avatar, avatarInactive, home, homeInactive, menuButton, menuButtonInactive, plus, search } from 'assets/index'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, MyAdsScreen, ProductAddScreen, ProfileScreen, SearchScreen } from 'screens/index'
import { useTheme } from 'hooks/useTheme'

const renderIcon = (source: any, focused: any, size = 24, isTinted = false) => (
  <Image
    source={source}
    style={[
      { width: size, height: size },
      isTinted && { tintColor: focused ? colors.bottomTabIconActiveColor : colors.bottomTabIconInactiveColor }
    ]}
  />
)

export const TabNavigation = () => {
  const Tab = createBottomTabNavigator()
  const theme = useTheme()

  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false, tabBarStyle: { paddingTop: 5, backgroundColor: theme.backgroundColor } }}>
      {[ 
        { name: "Home", component: HomeScreen, icon: [homeInactive, home] },
        { name: "Search", component: SearchScreen, icon: [search, search], isTinted: true },
        { name: "ProductAdd", component: ProductAddScreen, icon: [plus, plus], size: 34, isTinted: true },
        { name: "MyAds", component: MyAdsScreen, icon: [menuButtonInactive, menuButton] },
        { name: "Profile", component: ProfileScreen, icon: [avatarInactive, avatar] }
      ].map(({ name, component, icon, size = 24, isTinted }) => (
        <Tab.Screen key={name} name={name} component={component} options={{ tabBarIcon: ({ focused }) => renderIcon(icon[+focused], focused, size, isTinted) }} />
      ))}
    </Tab.Navigator>
  )
}
