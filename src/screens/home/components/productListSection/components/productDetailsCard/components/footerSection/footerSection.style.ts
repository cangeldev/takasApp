import { StyleSheet } from "react-native"
import { horizontalScale, verticalScale, scaleFont, moderateScale } from "theme/scale"
import { useTheme } from "hooks/useTheme"
import { colors } from "assets/colors/colors"
const getStyles = () => {
    const theme = useTheme()

    return StyleSheet.create({
        footerContainer: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: theme.backgroundColor,
            borderTopWidth: 1,
            borderColor: '#eee',
            paddingVertical: verticalScale(10),
            paddingHorizontal: horizontalScale(16),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        priceWrapper: {
            flexDirection: 'column'
        },
        oldPriceText: {
            textDecorationLine: 'line-through',
            color: '#999',
            fontSize: scaleFont(12)
        },
        discountedPriceText: {
            color: colors.text.primary,
            fontSize: scaleFont(16),
            fontWeight: 'bold'
        },
        footerButtonsRow: {
            flexDirection: 'row'
        },
        offerButton: {
            borderWidth: 1,
            borderColor: colors.text.primary,
            borderRadius: moderateScale(20),
            paddingVertical: verticalScale(8),
            paddingHorizontal: horizontalScale(16),
            marginRight: horizontalScale(8)
        },
        offerButtonText: {
            color: colors.text.primary,
            fontWeight: '600',
            fontSize: scaleFont(14)
        },
        cartButton: {
            backgroundColor: colors.text.primary,
            borderRadius: moderateScale(20),
            paddingVertical: verticalScale(8),
            paddingHorizontal: horizontalScale(16)
        },
        cartButtonText: {
            color: theme.backgroundColor,
            fontWeight: '600',
            fontSize: scaleFont(14)
        }
    })
}
export default getStyles
