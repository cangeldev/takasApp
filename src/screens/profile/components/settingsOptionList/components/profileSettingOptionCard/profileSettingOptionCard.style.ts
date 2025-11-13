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
            color: theme.profileTextColor
        },
        rightIcon: {
            fontSize: scaleFont(15),
            color: theme.profileTextColor
        },
        title: {
            marginLeft: horizontalScale(10),
            flex: 1,
            fontSize: scaleFont(15),
            color: theme.textColor
        },
        text1Style: {
            fontSize: scaleFont(16)
        },
        text2Style: {
            fontSize: scaleFont(13)
        }
    })
}
export default getStyles
