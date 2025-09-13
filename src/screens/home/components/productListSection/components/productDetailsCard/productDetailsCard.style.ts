import { StyleSheet } from "react-native"
import { horizontalScale, verticalScale, scaleFont, moderateScale } from "theme/scale"
import { useTheme } from "hooks/useTheme"
import { colors } from "assets/colors/colors"

const getStyles = () => {
    const theme = useTheme()

    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.backgroundColor
        },
        header: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: verticalScale(10),
            paddingHorizontal: horizontalScale(10)
        },
        headerIcon: {
            fontSize: scaleFont(24),
            color: theme.textColor
        },
        searchBarWrapper: {
            width: horizontalScale(270),
            height: verticalScale(45)
        },
        favoriteIcon: {
            fontSize: scaleFont(24),
            color: theme.textColor
        },
        favoriteIconActive: {
            fontSize: scaleFont(24),
            color: colors.text.primary
        },
        imageWrapper: {
            alignItems: "center",
            marginBottom: verticalScale(10)
        },
        productImage: {
            width: "100%",
            height: verticalScale(300)
        },
        imageCounter: {
            position: "absolute",
            bottom: 10,
            right: 10,
            backgroundColor: "rgba(0,0,0,0.5)",
            color: theme.backgroundColor,
            paddingHorizontal: horizontalScale(9),
            paddingVertical: verticalScale(3),
            borderRadius: moderateScale(10),
            fontSize: scaleFont(12)
        },
        imageFooter: {
            backgroundColor: "rgba(0,0,0,0.6)",
            padding: 10,
            justifyContent: "center",
            alignItems: "center"
        },
        imageFooterText: {
            color: "#fff",
            fontSize: scaleFont(16)
        }
    })
}
export default getStyles
