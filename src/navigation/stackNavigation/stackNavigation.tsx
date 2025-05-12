import { createNativeStackNavigator } from '@react-navigation/native-stack'
import colors from 'assets/colors/colors'
import { useTheme } from 'hooks/useTheme'
import { AppTabNavigator } from 'navigation/tabNavigation/appTabNavigator'
import { useTranslation } from 'react-i18next'
import { Text } from 'react-native'
import { LanguageThemePage, ProfileInfoPage, AddressPage, NotificationSettingsPage, HelpAndSupportPage, FavoritesPage } from 'screens/profile/innerProfilePages'

export const StackNavigation = () => {
  const { t } = useTranslation()
  const Stack = createNativeStackNavigator()
  const theme = useTheme()

  const commonScreenOptions = {
    headerTitleStyle: { fontSize: 17 },
    headerStyle: { backgroundColor: theme.backgroundColor },
    headerTintColor: theme.textColor
  }

  return (
    <Stack.Navigator screenOptions={commonScreenOptions}>
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
            <Text style={{ color: colors.primaryText, fontWeight: '600' }}>
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
    </Stack.Navigator>
  )
}
