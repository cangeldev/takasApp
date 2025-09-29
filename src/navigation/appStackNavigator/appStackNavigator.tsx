import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { colors } from 'assets/colors/colors'
import { useTheme } from 'hooks/useTheme'
import { AppTabNavigator } from 'navigation/appTabNavigator/appTabNavigator'
import { useTranslation } from 'react-i18next'
import { Text } from 'react-native'
import { ProductDetailsCard } from 'screens/home/components/productListSection/components/productDetailsCard/productDetailsCard'
import { Welcome } from 'screens/index'
import { LanguageThemePage, ProfileInfoPage, AddressPage, NotificationSettingsPage, HelpAndSupportPage, FavoritesPage, MyNetworksPage } from 'screens/profile/innerProfilePages'

const Stack = createNativeStackNavigator()

export const AppStackNavigator = () => {
  const { t } = useTranslation()
  const theme = useTheme()

  const commonScreenOptions = {
    headerTitleStyle: { fontSize: 17 },
    headerStyle: { backgroundColor: theme.backgroundColor },
    headerTintColor: theme.textColor
  }

  return (
    <Stack.Navigator screenOptions={commonScreenOptions}>
      <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen options={{ headerShown: false }} name="AppTabNavigator" component={AppTabNavigator} />
      <Stack.Screen options={{ headerShown: false }} name="ProfileInfoPage" component={ProfileInfoPage} />
      <Stack.Screen
        name="LanguageThemePage"
        component={LanguageThemePage}
        options={{ headerTitle: t('languageAndThemeSettings') }}
      />
      <Stack.Screen
        name="AddressPage"
        component={AddressPage}
        options={{
          headerTitle: t('addressAndLocationInformation'),
          headerRight: () => (
            <Text style={{ color: colors.text.primary, fontWeight: '600' }}>
              {t('addAddress')}
            </Text>
          ),
        }}
      />
      <Stack.Screen
        name="NotificationSettingsPage"
        component={NotificationSettingsPage}
        options={{ headerTitle: t('notificationSettings') }}
      />
      <Stack.Screen
        name="HelpAndSupportPage"
        component={HelpAndSupportPage}
        options={{ headerTitle: t('helpAndSupport') }}
      />
      <Stack.Screen
        name="FavoritesPage"
        component={FavoritesPage}
        options={{ headerTitle: t('myFavorites') }}
      />
      <Stack.Screen
        name="MyNetworksPage"
        component={MyNetworksPage}
        options={{ headerTitle: t('myNetwork') }}
      />
      <Stack.Screen
        name="ProductDetailsCard"
        component={ProductDetailsCard}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
