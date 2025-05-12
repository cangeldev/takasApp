import { StyleSheet } from "react-native"
import { useTheme } from 'hooks/useTheme'
import colors from "assets/colors/colors"
import { horizontalScale, verticalScale, scaleFont, moderateScale } from "theme/scale"

const getStyles = () => {
    const theme = useTheme()

    return StyleSheet.create({
        cardContainer: {
            elevation: 3,
            marginHorizontal: horizontalScale(3),
            maxWidth: horizontalScale(142),
            backgroundColor: theme.backgroundColor,
            marginBottom: verticalScale(20),
            borderRadius: moderateScale(8),
            overflow: "hidden"
        },
        productImage: {
            width: horizontalScale(140),
            height: verticalScale(150)
        },
        descriptionText: {
            paddingHorizontal: horizontalScale(5),
            marginBottom: verticalScale(5),
            color: theme.textColor,
            fontSize: scaleFont(14)
        },
        priceText: {
            paddingHorizontal: horizontalScale(5),
            fontWeight: "700",
            fontSize: scaleFont(15),
            marginBottom: verticalScale(3),
            color: theme.textColor
        },
        offerText: {
            padding: moderateScale(5),
            backgroundColor: colors.primaryText,
            borderRadius: moderateScale(15),
            marginHorizontal: horizontalScale(14),
            fontWeight: "600",
            marginVertical: verticalScale(10),
            textAlign: "center",
            color: colors.white,
            fontSize: scaleFont(14)
        },
        favoriteIcon: {
            fontSize: scaleFont(18),
            color: theme.backgroundColor,
            right: horizontalScale(6),
            top: horizontalScale(6),
            position: "absolute"
        },
        favoriteIconSelected: {
            fontSize: scaleFont(18),
            color: colors.primaryText,
            right: horizontalScale(6),
            top: horizontalScale(6),
            position: "absolute"
        }
    })
}
export default getStyles
