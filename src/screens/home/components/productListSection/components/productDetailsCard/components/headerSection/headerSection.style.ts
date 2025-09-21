import { StyleSheet } from "react-native"
import { horizontalScale, verticalScale, scaleFont } from "theme/scale"
import { useTheme } from "hooks/useTheme"
import { colors } from "assets/colors/colors"

const getStyles = () => {
    const theme = useTheme()

    return StyleSheet.create({
        header: {
            position: "absolute",
            flexDirection: "row",
            paddingVertical: verticalScale(10),
            paddingHorizontal: horizontalScale(13),
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center"
        },
        backIcon: {
            fontSize: scaleFont(22),
            color: theme.textColor,
            flex: 1
        },
        shareIcon: {
            paddingRight: horizontalScale(15),
            fontSize: scaleFont(22),
            color: theme.textColor
        },
        favoriteIcon: {
            fontSize: scaleFont(22),
            color: theme.textColor
        },
        favoriteIconActive: {
            fontSize: scaleFont(22),
            color: colors.text.primary
        }
    })
}
export default getStyles
