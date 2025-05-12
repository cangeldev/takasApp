import { StyleSheet } from "react-native"
import { useTheme } from 'hooks/useTheme'
import colors from "assets/colors/colors"
import { horizontalScale, verticalScale, scaleFont, moderateScale } from "theme/scale"

const getStyles = () => {
    const theme = useTheme()

    return StyleSheet.create({
        cardContainer: {
            flexDirection: "row",
            paddingVertical: verticalScale(10)
        },
        productImage: {
            width: horizontalScale(130),
            height: verticalScale(100),
            borderRadius: moderateScale(6)
        },
        infoContainer: {
            flex: 1,
            paddingHorizontal: horizontalScale(9)
        },
        descriptionText: {
            flex: 1,
            fontSize: scaleFont(14),
            color: colors.secondaryText
        },
        priceText: {
            flex: 1,
            fontWeight: "700",
            fontSize: scaleFont(16),
            color: theme.textColor
        },
        addressText: {
            color: theme.textColor,
            fontSize: scaleFont(12),
            fontWeight: "700"
        },
        favoriteIcon: {
            fontSize: scaleFont(18),
            color: theme.textColor
        },
        favoriteIconSelected: {
            fontSize: scaleFont(18),
            color: colors.primaryText
        },
        headerRow: {
            flexDirection: "row",
            alignItems: "center"
        }
    })
}
export default getStyles
