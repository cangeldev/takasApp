import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { TabNavigation } from 'navigation/tabNavigation/tabNavigation'
import { LanguageThemePage, PersonInfoPage, AddressPage, NotificationSettingsPage, HelpAndSupportPage, FavoritesPage } from 'screens/profileScreen/innerProfileScreens'

const Stack = createNativeStackNavigator()

export const StackNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="TabNavigation" component={TabNavigation} />
    <Stack.Screen name="PersonInformationPage" component={PersonInfoPage} />
    <Stack.Screen name="ApplicationLanguageAndThemePage" component={LanguageThemePage} />
    <Stack.Screen name="AddressAndLocationPage" component={AddressPage} />
    <Stack.Screen name="NotificationSettingsPage" component={NotificationSettingsPage} />
    <Stack.Screen name="HelpAndSupportPage" component={HelpAndSupportPage} />
    <Stack.Screen name="FavoritesPage" component={FavoritesPage} />
  </Stack.Navigator>
)
