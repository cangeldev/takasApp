import { StyleSheet } from 'react-native'
import colors from 'assets/colors/colors'
import { useTheme } from 'hooks/useTheme'
import { horizontalScale, verticalScale, scaleFont, moderateScale } from "utils/scale"

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
            flex: 1,
            backgroundColor: theme.backgroundColor,
            paddingHorizontal: horizontalScale(15)
        },
        profileImageWrapper: {
            width: horizontalScale(60),
            height: verticalScale(60),
            padding: moderateScale(3),
            backgroundColor: theme.backgroundColor,
            borderRadius: moderateScale(30),
            ...shadowStyle
        },
        header: {
            flexDirection: 'row',
            marginVertical: verticalScale(10),
            alignItems: 'center'
        },
        logoText: {
            flex: 1,
            fontFamily: 'Pacifico-Regular',
            fontSize: scaleFont(24),
            color: colors.bottomTabIconActiveColor,
        },
        icon: {
            fontSize: scaleFont(22),
            color: colors.textInactiveColor,
            marginLeft: horizontalScale(10)
        },
        cameraIcon: {
            fontSize: scaleFont(14),
            color: colors.textInactiveColor,
            backgroundColor: theme.backgroundColor,
            position: 'absolute',
            borderRadius: moderateScale(25),
            padding: moderateScale(4),
            bottom: verticalScale(0),
            right: horizontalScale(2),
            ...shadowStyle
        },
        profileName: {
            marginTop: verticalScale(4),
            fontWeight: '600',
            alignSelf: 'center'
        },
        statsContainer: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
        },
        profileSection: {
            marginBottom: verticalScale(10),
            flexDirection: 'row'
        },
        activitySummarySection: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical: verticalScale(15),
            backgroundColor: theme.backgroundColor,
            borderRadius: moderateScale(10),
            paddingVertical: verticalScale(10),
            ...shadowStyle
        },
        divider: {
            width: 1,
            backgroundColor: colors.lightGrey,
            height: '80%',
            alignSelf: 'center'
        },
        advert: {
            width: '100%',
            height: verticalScale(120),
            backgroundColor: 'yellow',
            borderRadius: moderateScale(10)
        },
        settingsListContainer: {
            backgroundColor: theme.backgroundColor,
            borderRadius: moderateScale(10),
            marginVertical: verticalScale(15),
            paddingHorizontal: horizontalScale(10),
            ...shadowStyle
        }
    })
}

export default getStyles
