import { StyleSheet } from 'react-native'
import colors from 'assets/colors/colors'
import { useTheme } from 'hooks/useTheme'
import { horizontalScale, verticalScale, scaleFont, moderateScale } from 'theme/scale'

const getStyles = () => {
    const theme = useTheme()

    return StyleSheet.create({
        noFavoriteContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginBottom: verticalScale(40)
        },
        noFavoriteImage: {
            marginTop: verticalScale(25),
            width: horizontalScale(150),
            height: verticalScale(150),
            resizeMode: 'center'
        },
        noFavoriteText: {
            fontSize: scaleFont(17),
            fontWeight: '600',
            marginTop: verticalScale(15),
            color: theme.textColor
        },
        noFavoriteSubText: {
            fontSize: scaleFont(14),
            marginBottom: verticalScale(10),
            color: theme.textColor
        },
        exploreButton: {
            backgroundColor: colors.primaryText,
            padding: moderateScale(10),
            borderRadius: moderateScale(20),
            paddingHorizontal: horizontalScale(110)
        },
        exploreButtonText: {
            color: colors.white,
            fontWeight: '600',
            fontSize: scaleFont(15)
        }
    })
}
export default getStyles
