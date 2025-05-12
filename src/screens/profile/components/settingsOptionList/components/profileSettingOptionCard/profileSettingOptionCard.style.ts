import { useTheme } from "hooks/useTheme"
import { StyleSheet } from "react-native"
import { horizontalScale, verticalScale, scaleFont } from "theme/scale"

const getStyles = () => {
    const theme = useTheme()

    return StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: verticalScale(9)
        },
        icon: {
            fontSize: scaleFont(18),
            color: '#323136'
        },
        rightIcon: {
            fontSize: scaleFont(15),
            color: '#323136'
        },
        title: {
            marginLeft: horizontalScale(10),
            flex: 1,
            fontSize: scaleFont(15),
            color: theme.textColor
        }
    })
}
export default getStyles
