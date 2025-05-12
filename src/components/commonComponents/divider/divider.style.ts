import { useTheme } from "hooks/useTheme"
import { StyleSheet } from "react-native"

const getStyles = () => {
    const theme = useTheme()

    return StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        dividerLine: {
            flex: 1,
            height: 1,
            backgroundColor: theme.dividerColor
        }
    })
}
export default getStyles
