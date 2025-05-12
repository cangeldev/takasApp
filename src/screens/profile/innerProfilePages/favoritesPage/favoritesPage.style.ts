import { StyleSheet } from 'react-native'
import { useTheme } from 'hooks/useTheme'
import { horizontalScale } from 'theme/scale'

const getStyles = () => {
    const theme = useTheme()

    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.backgroundColor,
            paddingHorizontal: horizontalScale(10)
        }
    })
}
export default getStyles
