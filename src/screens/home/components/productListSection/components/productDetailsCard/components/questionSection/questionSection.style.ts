import { StyleSheet } from "react-native"
import { horizontalScale, verticalScale, scaleFont, moderateScale } from "theme/scale"
import { useTheme } from "hooks/useTheme"
import { colors } from "assets/colors/colors"

const getStyles = () => {
    const theme = useTheme()

    return StyleSheet.create({
        qaSectionContainer: {
            padding: moderateScale(16)
        },
        qaHeaderRow: {
            flexDirection: "row",
            alignItems: "center",
            marginBottom: verticalScale(12)
        },
        qaTitleText: {
            fontSize: scaleFont(18),
            fontWeight: "600",
            color: theme.textColor,
            marginRight: horizontalScale(6)
        },
        qaInfoIcon: {
            fontSize: scaleFont(16),
            color: "teal"
        },
        questionTagsWrapper: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginBottom: verticalScale(12)
        },
        questionTagItem: {
            paddingVertical: verticalScale(6),
            paddingHorizontal: horizontalScale(12),
            borderRadius: moderateScale(20),
            backgroundColor: '#f5f5f5',
            marginRight: horizontalScale(8),
            marginBottom: verticalScale(8)
        },
        questionTagText: {
            color: '#666',
            fontSize: scaleFont(14)
        },
        questionInputBox: {
            flexDirection: "row",
            alignItems: "center",
            borderRadius: moderateScale(10),
            backgroundColor: "#f5f5f5",
            paddingHorizontal: horizontalScale(12)
        },
        questionPlaceholderText: {
            flex: 1,
            paddingVertical: verticalScale(12),
            fontSize: scaleFont(16),
            color: "#999"
        },
        questionPencilIcon: {
            fontSize: scaleFont(24),
            color: colors.border.darkDivider
        },
    })
}
export default getStyles
