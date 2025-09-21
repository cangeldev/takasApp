import { StyleSheet } from "react-native"
import { verticalScale } from "theme/scale"
import { useTheme } from "hooks/useTheme"

const getStyles = () => {
    const theme = useTheme()

    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.backgroundColor,
            paddingBottom: verticalScale(30)
        },
        contentContainer: {
            paddingBottom: verticalScale(40)
        }
    })
}
export default getStyles
