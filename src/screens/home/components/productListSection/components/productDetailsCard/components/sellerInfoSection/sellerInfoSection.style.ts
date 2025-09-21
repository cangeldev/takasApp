import { StyleSheet } from "react-native"
import { horizontalScale, verticalScale, scaleFont, moderateScale } from "theme/scale"
import { useTheme } from "hooks/useTheme"
import { colors } from "assets/colors/colors"

const getStyles = () => {
    const theme = useTheme()

    return StyleSheet.create({
        sellerCardContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: moderateScale(12),
            borderRadius: moderateScale(12),
            borderBottomWidth: 1,
            borderTopWidth: 1,
            borderColor: colors.border.lightDivider
        },
        sellerAvatar: {
            width: horizontalScale(45),
            height: verticalScale(45),
            borderRadius: moderateScale(28)
        },
        sellerInfoWrapper: { flex: 1, marginLeft: 12 },
        sellerNameText: {
            fontWeight: '700',
            fontSize: scaleFont(14),
            color: theme.textColor
        },
        sellerMetaText: {
            color: '#6B7280',
            marginTop: verticalScale(4),
            fontSize: scaleFont(12)
        },
        followButton: { backgroundColor: colors.text.primary, paddingHorizontal: 16, paddingVertical: 6, borderRadius: 20 },
        followButtonText: {
            color: theme.backgroundColor,
            fontSize: scaleFont(14),
            fontWeight: '600'
        }
    })
}
export default getStyles
