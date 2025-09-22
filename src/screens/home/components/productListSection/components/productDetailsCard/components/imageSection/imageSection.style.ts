import { StyleSheet } from "react-native"
import { horizontalScale, verticalScale, scaleFont, moderateScale } from "theme/scale"
import { useTheme } from "hooks/useTheme"
import { colors } from "assets/colors/colors"

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
        },
        card: {
            width: horizontalScale(300),
            height: verticalScale(200),
            borderRadius: moderateScale(12),
            overflow: 'hidden',
            margin: moderateScale(16),
            backgroundColor: '#f1f1f1',
        },
        image: {
            width: '100%',
            height: '100%',
        },
        tagContainer: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            flexDirection: "row"
        },
        tag: {
            backgroundColor: "rgba(255, 255, 255, 0.4)",
            alignItems: 'center',
            minWidth: horizontalScale(100),
            marginRight: horizontalScale(5),
            paddingHorizontal: horizontalScale(8),
            paddingVertical: verticalScale(6),
            borderTopRightRadius: moderateScale(8)
        },
        tagText: {
            color: colors.base.black,
            fontSize: scaleFont(10),
            fontWeight: '600',
        },
        tagIcon: {
            fontSize: scaleFont(16),
            color: colors.base.black
        }
    })
}
export default getStyles
