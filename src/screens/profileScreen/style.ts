import { StyleSheet, useWindowDimensions } from 'react-native'
import colors from 'assets/colors/colors'
import { useTheme } from 'hooks/useTheme'

const shadowStyle = {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 3
}

const getStyles = () => {

    const { width } = useWindowDimensions()
    const scaleFactor = width / 375
    const theme = useTheme()

    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.backgroundColor,
            paddingHorizontal: 15 * scaleFactor
        },
        profileImageWrapper: {
            width: 60 * scaleFactor,
            height: 60 * scaleFactor,
            padding: 3 * scaleFactor,
            backgroundColor: theme.backgroundColor,
            borderRadius: 30 * scaleFactor,
            ...shadowStyle
        },
        header: {
            flexDirection: 'row',
            marginVertical: 10 * scaleFactor,
            alignItems: 'center'
        },
        logoText: {
            flex: 1,
            fontFamily: 'Pacifico-Regular',
            fontSize: scaleFactor * 24,
            color: colors.bottomTabIconActiveColor,
        },
        icon: {
            fontSize: scaleFactor * 22,
            color: colors.textInactiveColor,
            marginLeft: scaleFactor * 10
        },
        cameraIcon: {
            fontSize: scaleFactor * 14,
            color: colors.textInactiveColor,
            backgroundColor: theme.backgroundColor,
            position: 'absolute',
            borderRadius: 25 * scaleFactor,
            padding: 4 * scaleFactor,
            bottom: 0,
            right: 2 * scaleFactor,
            ...shadowStyle
        },
        profileName: {
            marginTop: scaleFactor * 4,
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
            marginBottom: scaleFactor * 10,
            flexDirection: 'row'
        },
        activitySummarySection: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical: scaleFactor * 15,
            backgroundColor: theme.backgroundColor,
            borderRadius: 10,
            paddingVertical: 10 * scaleFactor,
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
            height: 120 * scaleFactor,
            backgroundColor: 'yellow',
            borderRadius: 10
        },
        settingsListContainer: {
            backgroundColor: theme.backgroundColor,
            borderRadius: 10,
            marginVertical: scaleFactor * 15,
            paddingHorizontal: 10 * scaleFactor,
            ...shadowStyle
        }
    })
}
export default getStyles
