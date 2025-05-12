import { StyleSheet } from 'react-native'
import colors from 'assets/colors/colors'
import { useTheme } from 'hooks/useTheme'
import { horizontalScale, verticalScale, scaleFont, moderateScale } from 'theme/scale'

const getStyles = () => {
    const theme = useTheme()

    return StyleSheet.create({
        filterSortContainer: {
            flexDirection: 'row',
            borderBottomWidth: 1,
            marginTop: verticalScale(5),
            paddingVertical: verticalScale(5),
            borderColor: theme.dividerColor,
            justifyContent: "space-around"
        },
        filterSortButton: {
            flexDirection: 'row',
            alignItems: 'center'
        },
        filterText: {
            fontSize: scaleFont(15),
            fontWeight: '500',
            color: theme.textColor
        },
        filterIcon: {
            fontSize: scaleFont(15),
            color: colors.primaryText
        },
        separator: {
            fontSize: scaleFont(20),
            color: theme.dividerColor
        },
        titleText: {
            flex: 1,
            textAlign: "center",
            fontSize: scaleFont(18),
            fontWeight: 600,
            color: theme.textColor
        },
        closeIcon: {
            fontSize: scaleFont(15),
            position: "absolute",
            right: 0,
            top: 0,
            color: theme.textColor
        },
        themeItem: {
            flexDirection: "row",
            alignItems: "center"
        },
        sortOptionText: {
            color: colors.secondaryText,
            fontSize: scaleFont(16),
            marginLeft: verticalScale(12)
        },
        menuOptionsContainer: {
            paddingVertical: verticalScale(15),
            paddingHorizontal: horizontalScale(20),
            backgroundColor: theme.backgroundColor,
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderTopWidth: 1,
            borderColor: colors.lightGreyBackground,
            borderTopLeftRadius: moderateScale(25),
            borderTopRightRadius: moderateScale(25)
        }
    })
}
export default getStyles
