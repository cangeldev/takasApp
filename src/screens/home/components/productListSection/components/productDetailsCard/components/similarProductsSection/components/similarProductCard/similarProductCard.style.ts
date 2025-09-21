import { StyleSheet } from "react-native"
import { horizontalScale, verticalScale, scaleFont, moderateScale } from "theme/scale"
import { useTheme } from "hooks/useTheme"
import { colors } from "assets/colors/colors"

const getStyles = () => {
    const theme = useTheme()

    return StyleSheet.create({
        image: {
            width: '100%',
            height: verticalScale(120),
        },
        card: {
            marginBottom: verticalScale(10),
            backgroundColor: theme.backgroundColor,
            borderRadius: moderateScale(14),
            overflow: 'hidden',
            marginRight: horizontalScale(12),
            width: horizontalScale(160),
            elevation: 3
        },

        cardContent: {
            padding: moderateScale(10),
        },
        price: {
            fontWeight: 'bold',
            fontSize: scaleFont(15),
            marginBottom: 4,
            color: colors.text.primary,
        },
        title: {
            fontSize: scaleFont(14),
            color: theme.textColor,
        },
        location: {
            fontSize: scaleFont(11),
            color: '#777',
            marginTop: verticalScale(15),
        },
        favoriteIconContainer: {
            position: "absolute",
            right: 10,
            top: 10,
            backgroundColor: colors.base.white,
            borderRadius: moderateScale(50),
            padding: moderateScale(3)
        },
        favoriteIcon: {
            fontSize: scaleFont(18),
            color: colors.base.black
        },

        favoriteIconActive: {
            fontSize: scaleFont(18),
            color: colors.text.primary
        }
    })
}
export default getStyles
