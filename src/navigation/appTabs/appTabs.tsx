import React, { useMemo } from 'react'
import { ImageSourcePropType, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, MyAdsScreen, ProductAddScreen, ProfileScreen, SearchScreen } from 'screens/index'
import { useTheme } from 'hooks/useTheme'
import images from 'assets/index'
import { TabBarIcon } from 'components/commonComponents'
import { RootTabParamList } from 'utils/types'

const Tab = createBottomTabNavigator<RootTabParamList>()

/**
 * AppTabs: Uygulamanın ana alt sekme navigasyonunu (Bottom Tab Navigator) oluşturur.
 *
 * Ana ekranlar (Ana Sayfa, Arama, Ürün Ekleme, İlanlarım ve Profil) arasındaki geçişi yönetir.
 * Sekmelerin görünümünü (aktif/pasif ikonlar, boyut ve tema) dinamik olarak ayarlar.
 * Bu, uygulamanın temel kullanıcı arayüzü iskeletidir.
 */
interface TabConfig {
  name: keyof RootTabParamList
  component: React.ComponentType<{}>
  icon: [ImageSourcePropType, ImageSourcePropType]
  size?: number
  isTinted?: boolean
}
const TABS: TabConfig[] = [
  { name: "Home", component: HomeScreen, icon: [images.icons.homeInactive, images.icons.home] },
  { name: "Search", component: SearchScreen, icon: [images.icons.search, images.icons.search], isTinted: true },
  { name: "ProductAdd", component: ProductAddScreen, icon: [images.icons.plus, images.icons.plus], size: 34, isTinted: true },
  { name: "MyAds", component: MyAdsScreen, icon: [images.icons.menuButtonInactive, images.icons.menuButton] },
  { name: "Profile", component: ProfileScreen, icon: [images.icons.avatarInactive, images.icons.avatar] }
]

const renderIcon =
  (icon: [ImageSourcePropType, ImageSourcePropType], size: number, isTinted?: boolean) =>
    ({ focused }: { focused: boolean }): JSX.Element => (
      <TabBarIcon
        source={focused ? icon[1] : icon[0]}
        focused={focused}
        size={size}
        isTinted={isTinted}
      />
    )

export const AppTabs = () => {
  const theme = useTheme()

  const baseTabBarStyle = StyleSheet.create({
    tabBar: {
      paddingTop: 5
    }
  })

  const tabBarStyle = useMemo(() => [
    baseTabBarStyle.tabBar,
    { backgroundColor: theme.backgroundColor }
  ], [theme.backgroundColor])
  return (
    <Tab.Navigator
      detachInactiveScreens={true}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle
      }}>
      {TABS.map(({ name, component, icon, size = 24, isTinted }) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            tabBarIcon: renderIcon(icon, size, isTinted)
          }}
        />
      ))}
    </Tab.Navigator>
  )
}