import { StyleSheet } from "react-native"
import { useTheme } from 'hooks/useTheme'
import { scaleFont, verticalScale, moderateScale } from "theme/scale"
import { colors } from "assets/colors/colors"

const getStyles = () => {
    const theme = useTheme()

    return StyleSheet.create({
        label: {
            fontSize: scaleFont(15),
            fontWeight: 'bold',
            marginVertical: verticalScale(4),
            color: theme.textColor
        },
        input: {
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: moderateScale(8),
            padding: moderateScale(10),
            marginBottom: verticalScale(10)
        },
        focusedInput: {
            borderColor: colors.text.primary
        }
    })
}
export default getStyles
