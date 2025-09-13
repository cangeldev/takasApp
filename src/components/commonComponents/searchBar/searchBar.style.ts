import { StyleSheet } from "react-native"
import { horizontalScale, scaleFont, moderateScale } from "theme/scale"
import { useTheme } from "hooks/useTheme"
import { colors } from "assets/colors/colors"

const getStyles = () => {

    const theme = useTheme()

    return StyleSheet.create({
        inputContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: moderateScale(10),
            paddingHorizontal: horizontalScale(10)
        },
        searchIcon: {
            fontSize: scaleFont(17),
            color: colors.text.primary
        }
    })
}
export default getStyles
