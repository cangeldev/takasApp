import colors from "assets/colors/colors"
import { useTheme } from "hooks/useTheme"
import { StyleSheet } from "react-native"
import { scaleFont } from "theme/scale"

const getStyles = () => {
    const theme = useTheme()

    return StyleSheet.create({
        container: {
            alignItems: 'center'
        },
        count: {
            fontWeight: '700',
            fontSize: scaleFont(14),
            color: theme.textColor
        },
        title: {
            color: colors.disabledText,
            fontSize: scaleFont(13)
        }
    })
}
export default getStyles
