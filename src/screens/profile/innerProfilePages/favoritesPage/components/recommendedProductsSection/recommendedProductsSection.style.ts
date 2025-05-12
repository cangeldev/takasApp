import { StyleSheet } from 'react-native'
import { useTheme } from 'hooks/useTheme'
import { horizontalScale, verticalScale, scaleFont } from 'theme/scale'

const getStyles = () => {
    const theme = useTheme()

    return StyleSheet.create({
        recommendedTitle: {
            marginTop: verticalScale(20),
            fontSize: scaleFont(19),
            fontWeight: '600',
            marginBottom: verticalScale(5),
            marginHorizontal: horizontalScale(5),
            color: theme.textColor
        }

    })
}
export default getStyles
