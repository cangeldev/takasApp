import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { TabNavigation } from "navigation/tabNavigation/tabNavigation"
import { HomeScreen, MyAdsScreen, ProductAddScreen, ProfileScreen, SearchScreen } from "screens/index"
import { LanguageThemePage, PersonInfoPage, AddressPage, NotificationSettingsPage, HelpAndSupportPage, FavoritesPage } from "screens/profileScreen/innerProfileScreens"

const Stack = createNativeStackNavigator()
const screens = [
  { name: "TabNavigation", component: TabNavigation },
  { name: "Home", component: HomeScreen },
  { name: "Search", component: SearchScreen },
  { name: "ProductAdd", component: ProductAddScreen },
  { name: "MyAds", component: MyAdsScreen },
  { name: "Profile", component: ProfileScreen },
  { name: "PersonInformationPage", component: PersonInfoPage },
  { name: "ApplicationLanguageAndThemePage", component: LanguageThemePage },
  { name: "AddressAndLocationPage", component: AddressPage },
  { name: "NotificationSettingsPage", component: NotificationSettingsPage },
  { name: "HelpAndSupportPage", component: HelpAndSupportPage },
  { name: "FavoritesPage", component: FavoritesPage }
]

export const StackNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    {screens.map(({ name, component }) => (
      <Stack.Screen key={name} name={name} component={component} />
    ))}
  </Stack.Navigator>
)
