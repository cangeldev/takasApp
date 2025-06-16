import { StyleSheet } from 'react-native'
import { horizontalScale, verticalScale, scaleFont } from 'theme/scale'
import { useTheme } from 'hooks/useTheme'
import { colors } from 'assets/colors/colors'

const getStyles = () => {
    const theme = useTheme()
    return StyleSheet.create({
        container: {
            paddingHorizontal: horizontalScale(12),
            backgroundColor: theme.backgroundColor
        },
        bannerText: {
            textAlign: 'center',
            paddingVertical: verticalScale(12),
            backgroundColor: '#ECFFFB',
            fontWeight: '600',
            fontSize: scaleFont(13),
            marginHorizontal: horizontalScale(-10)
        },
        itemSeparator: {
            backgroundColor: colors.background.lightGrey,
            width: '100%',
            height: verticalScale(2)
        }
    })
}
export default getStyles
