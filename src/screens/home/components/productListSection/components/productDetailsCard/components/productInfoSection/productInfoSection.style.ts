import { StyleSheet } from "react-native"
import { horizontalScale, verticalScale, scaleFont, moderateScale } from "theme/scale"
import { useTheme } from "hooks/useTheme"

const getStyles = () => {
    const theme = useTheme()

    return StyleSheet.create({
        container: {
            flex: 1,
        },
        productHeaderRow: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: horizontalScale(16),
            paddingTop: verticalScale(14)
        },
        productInfoWrapper: {
            flex: 1
        },
        productTitleText: {
            fontSize: scaleFont(18),
            fontWeight: '700',
            color: theme.textColor
        },
        productCategoryText: {
            fontSize: scaleFont(13),
            color: '#6B7280',
            marginTop: verticalScale(4)
        },
        descriptionSection: {
            paddingTop: verticalScale(10),
            paddingHorizontal: horizontalScale(16)
        },
        sectionTitleText: {
            fontWeight: '700',
            marginBottom: verticalScale(6),
            fontSize: scaleFont(15),
            color: theme.textColor
        },
        descriptionText: {
            color: theme.textColor,
            lineHeight: 20,
            fontSize: scaleFont(13),
            marginBottom: verticalScale(15)
        },
        favoriteContainer: {
            alignSelf: "flex-start",
            alignItems: "center"
        },
        favoriteIconInactive: {
            fontSize: scaleFont(22),
            color: theme.textColor
        },
        favoriteIconActive: {
            fontSize: scaleFont(22),
            color: theme.textColor
        },
        favoriteCountText: {
            fontSize: scaleFont(13),
            color: theme.textColor
        },
        featureTag: {
            paddingVertical: verticalScale(4),
            paddingHorizontal: horizontalScale(12),
            borderRadius: moderateScale(20),
            backgroundColor: "#eefcfc",
            marginRight: horizontalScale(8),
            marginTop: verticalScale(8)
        },
        featureTagText: {
            color: '#2a7d6e',
            fontSize: scaleFont(10)
        }
    })
}
export default getStyles
