import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { AppTabNavigator } from 'navigation/tabNavigation/appTabNavigator'
import { LanguageThemePage, ProfileInfoPage, AddressPage, NotificationSettingsPage, HelpAndSupportPage, FavoritesPage } from 'screens/profile/innerProfilePages'

const Stack = createNativeStackNavigator()

export const StackNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
    <Stack.Screen name="ProfileInfoPage" component={ProfileInfoPage} />
    <Stack.Screen name="LanguageThemePage" component={LanguageThemePage} />
    <Stack.Screen name="AddressPage" component={AddressPage} />
    <Stack.Screen name="NotificationSettingsPage" component={NotificationSettingsPage} />
    <Stack.Screen name="HelpAndSupportPage" component={HelpAndSupportPage} />
    <Stack.Screen name="FavoritesPage" component={FavoritesPage} />
  </Stack.Navigator>
)
