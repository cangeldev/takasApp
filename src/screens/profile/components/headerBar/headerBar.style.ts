import { StyleSheet } from 'react-native'
import { horizontalScale, verticalScale, scaleFont } from "theme/scale"
import { useTheme } from 'hooks/useTheme'
import { colors } from 'assets/colors/colors'

const getStyles = () => {
    const theme = useTheme()

    return StyleSheet.create({
        container: {
            backgroundColor: theme.backgroundColor,
            flexDirection: 'row',
            paddingVertical: verticalScale(10),
            alignItems: 'center',
            paddingHorizontal: horizontalScale(15)
        },
        appTitleText: {
            flex: 1,
            fontFamily: 'Pacifico-Regular',
            fontSize: scaleFont(24),
            color: colors.text.primary
        },
        iconButton: {
            fontSize: scaleFont(22),
            color: colors.text.disabled,
            marginLeft: horizontalScale(15)
        }
    })
}
export default getStyles
