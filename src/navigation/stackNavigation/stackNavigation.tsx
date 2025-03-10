import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { TabNavigation } from "navigation/tabNavigation/tabNavigation"
import { ApplicationLanguageAndThemePage, PersonInformationPage } from "pages/profileScreenSettingsTabPages"
import AddressAndLocationPage from "pages/profileScreenSettingsTabPages/addressAndLocationPage/addressAndLocationPage"
import { HomeScreen, MyAdsScreen, ProductAddScreen, ProfileScreen, SearchScreen } from "screens/index"

const Stack = createNativeStackNavigator()

export const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="TabNavigation" component={TabNavigation} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name='Search' component={SearchScreen} />
            <Stack.Screen name='ProductAdd' component={ProductAddScreen} />
            <Stack.Screen name='MyAds' component={MyAdsScreen} />
            <Stack.Screen name='Profile' component={ProfileScreen} />
            <Stack.Screen name="PersonInformationPage" component={PersonInformationPage} />
            <Stack.Screen name="ApplicationLanguageAndThemePage" component={ApplicationLanguageAndThemePage} />
            <Stack.Screen name="AddressAndLocationPage" component={AddressAndLocationPage} />
        </Stack.Navigator>
    )
}