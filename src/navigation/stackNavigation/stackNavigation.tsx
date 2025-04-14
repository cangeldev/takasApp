import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { TabNavigation } from "navigation/tabNavigation/tabNavigation"
import { ApplicationLanguageAndThemePage, PersonInformationPage, AddressAndLocationPage, NotificationSettingsPage, HelpAndSupportPage } from "pages/profileScreenSettingsTabPages"
import { HomeScreen, MyAdsScreen, ProductAddScreen, ProfileScreen, SearchScreen } from "screens/index"

const Stack = createNativeStackNavigator()
const screens = [
  { name: "TabNavigation", component: TabNavigation },
  { name: "Home", component: HomeScreen },
  { name: "Search", component: SearchScreen },
  { name: "ProductAdd", component: ProductAddScreen },
  { name: "MyAds", component: MyAdsScreen },
  { name: "Profile", component: ProfileScreen },
  { name: "PersonInformationPage", component: PersonInformationPage },
  { name: "ApplicationLanguageAndThemePage", component: ApplicationLanguageAndThemePage },
  { name: "AddressAndLocationPage", component: AddressAndLocationPage },
  { name: "NotificationSettingsPage", component: NotificationSettingsPage },
  { name: "HelpAndSupportPage", component: HelpAndSupportPage }
]

export const StackNavigation = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    {screens.map(({ name, component }) => (
      <Stack.Screen key={name} name={name} component={component} />
    ))}
  </Stack.Navigator>
)
