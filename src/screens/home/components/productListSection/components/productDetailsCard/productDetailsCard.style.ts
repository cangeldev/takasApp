import { StyleSheet } from "react-native"
import { horizontalScale, verticalScale, scaleFont, moderateScale } from "theme/scale"
import { useTheme } from "hooks/useTheme"
import { colors } from "assets/colors/colors"

const getStyles = () => {

    const theme = useTheme()

    return StyleSheet.create({
        container: {
            backgroundColor: theme.backgroundColor,
            flex: 1,
            paddingVertical: verticalScale(10),
            paddingHorizontal: horizontalScale(10)
        },
        header: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between"
        },
        headerIcon: {
            fontSize: scaleFont(24),
            color: theme.textColor
        },
        searchBarContainer:
        {
            width: horizontalScale(270),
            height: verticalScale(45)
        },
        favoriteIcon: {
            fontSize: scaleFont(24),
            color: theme.textColor
        },
        favoriteIconSelected: {
            fontSize: scaleFont(24),
            color: colors.text.primary
        }
    })
}
export default getStyles
