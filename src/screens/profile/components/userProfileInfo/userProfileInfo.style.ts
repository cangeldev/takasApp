import { StyleSheet } from 'react-native'
import colors from 'assets/colors/colors'
import { useTheme } from 'hooks/useTheme'
import { horizontalScale, verticalScale, scaleFont, moderateScale } from "theme/scale"

const shadowStyle = {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 3
}

const getStyles = () => {
    const theme = useTheme()

    return StyleSheet.create({
        container: {
            backgroundColor: theme.backgroundColor,
            flexDirection: 'row',
            paddingHorizontal: horizontalScale(15),
            borderBottomWidth: 1,
            borderBottomColor: theme.dividerColor,
            paddingBottom: verticalScale(15)
        },
        profileImageWrapper: {
            width: horizontalScale(60),
            height: verticalScale(60),
            padding: moderateScale(3),
            backgroundColor: theme.backgroundColor,
            borderRadius: moderateScale(30),
            ...shadowStyle
        },
        userNameText: {
            marginTop: verticalScale(4),
            fontWeight: '600',
            alignSelf: 'center',
            color: theme.textColor
        },
        cameraOverlayIcon: {
            fontSize: scaleFont(14),
            color: colors.disabledText,
            backgroundColor: theme.backgroundColor,
            position: 'absolute',
            borderRadius: moderateScale(25),
            padding: moderateScale(4),
            bottom: verticalScale(0),
            right: horizontalScale(2),
            ...shadowStyle
        },
        statsCardContainer: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
        }
    })
}
export default getStyles
