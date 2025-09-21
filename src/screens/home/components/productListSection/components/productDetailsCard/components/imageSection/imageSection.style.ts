import { StyleSheet } from "react-native"
import { horizontalScale, verticalScale, scaleFont, moderateScale } from "theme/scale"
import { useTheme } from "hooks/useTheme"

const getStyles = () => {
    const theme = useTheme()

    return StyleSheet.create({
        productImage: {
            width: "100%",
            height: verticalScale(360),
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
            padding: moderateScale(10),
            justifyContent: "center",
            alignItems: "center"
        },
        imageFooterText: {
            color: theme.backgroundColor,
            fontSize: scaleFont(16)
        }
    })
}
export default getStyles
