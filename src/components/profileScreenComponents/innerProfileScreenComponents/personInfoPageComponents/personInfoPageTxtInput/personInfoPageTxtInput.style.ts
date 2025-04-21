import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"
import { useTheme } from 'hooks/useTheme'
import { horizontalScale, verticalScale, scaleFont, moderateScale } from "theme/scale"

const getStyles = () => {

    const theme = useTheme()

    return StyleSheet.create({
        container: {
            justifyContent: 'center',
            marginBottom: verticalScale(20)
        },
        txtInput: {
            borderRadius: moderateScale(6),
            paddingHorizontal: horizontalScale(10),
            borderWidth: 1,
            borderColor: colors.lightGrey
        },
        title: {
            position: 'absolute',
            backgroundColor: theme.backgroundColor,
            top: -verticalScale(10),
            left: horizontalScale(6),
            paddingHorizontal: horizontalScale(6),
            fontSize: scaleFont(12),
            color: colors.black
        },
        icon: {
            fontSize: scaleFont(20),
            color: theme.textColor,
            position: 'absolute',
            right: horizontalScale(10)
        }
    })
}
export default getStyles
