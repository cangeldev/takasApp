import { StyleSheet } from 'react-native'
import colors from 'assets/colors/colors'
import { useTheme } from 'hooks/useTheme'
import { horizontalScale, verticalScale, scaleFont, moderateScale } from 'theme/scale'

const getStyles = () => {
    const theme = useTheme()

    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.backgroundColor,
            paddingHorizontal: horizontalScale(10)
        },
        noFavoriteContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
            marginBottom: verticalScale(40)
        },
        noFavoriteImage: {
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
            backgroundColor: colors.bottomTabIconActiveColor,
            padding: moderateScale(10),
            borderRadius: moderateScale(20),
            paddingHorizontal: horizontalScale(110)
        },
        exploreButtonText: {
            color: theme.backgroundColor,
            fontWeight: '600',
            fontSize: scaleFont(15)
        },
        recommendedTitle: {
            marginTop: verticalScale(20),
            fontSize: scaleFont(19),
            fontWeight: '600',
            marginBottom: verticalScale(5),
            marginHorizontal: horizontalScale(5)
        },
        filterSortContainer: {
            backgroundColor: colors.white,
            flexDirection: 'row',
            borderBottomWidth: 1,
            marginTop: verticalScale(5),
            paddingVertical: verticalScale(5),
            borderColor: colors.lightGrey
        },
        filterSortButton: {
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center'
        },
        filterText: {
            fontSize: scaleFont(15),
            fontWeight: '500'
        },
        filterIcon: {
            fontSize: scaleFont(15),
            color: colors.bottomTabIconActiveColor
        },
        separator: {
            fontSize: 20,
            color: colors.lightGrey
        },
        bannerText: {
            textAlign: 'center',
            paddingVertical: verticalScale(12),
            backgroundColor: '#ECFFFB',
            fontWeight: '600',
            fontSize: scaleFont(13)
        },
        bannerIcon: {
            fontSize: scaleFont(15)
        },
        itemSeparator: {
            backgroundColor: colors.lightGrey,
            width: '100%',
            height: verticalScale(2)
        }
    })
}

export default getStyles
