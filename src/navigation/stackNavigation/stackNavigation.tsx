import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { FirstPage } from "pages/firstPage/firstPage"
import { HomeScreen, MyAdsScreen, ProductAddScreen, ProfileScreen, SearchScreen } from "screens/index"

const Stack = createNativeStackNavigator()

export function HomeStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name="FirstPage" component={FirstPage} />
        </Stack.Navigator>
    )
}
export function SearchStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='SearchScreen' component={SearchScreen} />
        </Stack.Navigator>
    )
}
export function ProductAddStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='ProductAddScreen' component={ProductAddScreen} />
        </Stack.Navigator>
    )
}
export function MyAdsStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='MyAdsScreen' component={MyAdsScreen} />
        </Stack.Navigator>
    )
}
export function ProfileStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
        </Stack.Navigator>
    )
}