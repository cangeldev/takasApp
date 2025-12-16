import React, { useMemo } from 'react'
import { Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { colors } from 'assets/colors/colors'
import { useTheme } from 'hooks/useTheme'
import { useTranslation } from 'react-i18next'
import { AppTabs } from 'navigation/appTabs/appTabs'
import { ProductDetailsCard } from 'screens/home/components/productListSection/components/productDetailsCard/productDetailsCard'
import { LanguageThemePage, ProfileInfoPage, AddressPage, NotificationSettingsPage, HelpAndSupportPage, FavoritesPage, MyNetworksPage } from 'screens/profile/innerProfilePages'
import { RootStackParamList } from 'utils/types'
import { AccountDetails, LoginScreen, RegisterScreen, Welcome } from 'screens/auth'

/**
 * AppStack: Uygulamanın ana navigasyon yığınını (stack) tanımlar.
 * Temel olarak, hoş geldin/kimlik doğrulama (Welcome, Login, Register) ve ana sekme
 * navigasyonu (AppTabs) arasındaki geçişleri yönetir. Ayrıca, profil sayfalarının
 * (Dil/Tema, Adres, Bildirimler vb.) ve ürün detaylarının ekranlarını da içerir.
 * Temaya ve çeviriye göre başlıkları ve stil ayarlarını dinamik olarak belirler.
 */

const Stack = createNativeStackNavigator<RootStackParamList>()

interface AppStackProps {
  initialRoute: keyof RootStackParamList
}

export const AppStack: React.FC<AppStackProps> = ({ initialRoute }) => {
  const { t } = useTranslation()
  const theme = useTheme()
  const hiddenHeader = { headerShown: false }

  const commonScreenOptions = useMemo(
    () => ({
      headerTitleStyle: { fontSize: 17 },
      headerStyle: { backgroundColor: theme.backgroundColor },
      headerTintColor: theme.textColor
    }),
    [theme.backgroundColor, theme.textColor]
  )

  return (
    <Stack.Navigator screenOptions={commonScreenOptions} initialRouteName={initialRoute}    >
      {/* Auth Screens */}
      <Stack.Screen name="Welcome" component={Welcome} options={hiddenHeader} />
      <Stack.Screen name="Login" component={LoginScreen} options={hiddenHeader} />
      <Stack.Screen name="AccountDetails" component={AccountDetails} options={hiddenHeader} />
      <Stack.Screen name="Register" component={RegisterScreen} options={hiddenHeader} />
      <Stack.Screen name="AppTabs" component={AppTabs} options={hiddenHeader} />

      {/* Profile Pages */}
      <Stack.Screen name="ProfileInfoPage" component={ProfileInfoPage} options={hiddenHeader} />
      <Stack.Screen name="LanguageThemePage" component={LanguageThemePage} options={{ headerTitle: t('languageAndThemeSettings') }} />
      <Stack.Screen name="NotificationSettingsPage" component={NotificationSettingsPage} options={{ headerTitle: t('notificationSettings') }} />
      <Stack.Screen name="HelpAndSupportPage" component={HelpAndSupportPage} options={{ headerTitle: t('helpAndSupport') }} />
      <Stack.Screen name="FavoritesPage" component={FavoritesPage} options={{ headerTitle: t('myFavorites') }} />
      <Stack.Screen name="MyNetworksPage" component={MyNetworksPage} options={{ headerTitle: t('myNetwork') }} />
      <Stack.Screen name="ProductDetailsCard" component={ProductDetailsCard} options={hiddenHeader} />
     
      <Stack.Screen name="AddressPage" component={AddressPage}
        options={{
          headerTitle: t('addressAndLocationInformation'),
          headerRight: () => (
            <Text style={{ color: colors.text.primary, fontWeight: '600' }}>
              {t('addAddress')}
            </Text>
          )
        }} />
    </Stack.Navigator>
  )
}
