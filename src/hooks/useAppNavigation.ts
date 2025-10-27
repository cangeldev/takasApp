import { useNavigation, NavigationProp } from '@react-navigation/native'
import { RootStackParamList } from 'utils/types'

type AppNavigationProp = NavigationProp<RootStackParamList>

export const useAppNavigation = () => useNavigation<AppNavigationProp>()