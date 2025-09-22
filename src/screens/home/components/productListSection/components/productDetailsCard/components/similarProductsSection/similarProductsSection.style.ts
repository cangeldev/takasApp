import { StyleSheet } from "react-native"
import { horizontalScale, verticalScale, scaleFont } from "theme/scale"
import { useTheme } from "hooks/useTheme"

const getStyles = () => {
    const theme = useTheme()

    return StyleSheet.create({
        sectionTitleText: {
            fontSize: scaleFont(18),
            fontWeight: 'bold',
            marginTop: verticalScale(15),
            marginBottom: verticalScale(6),
            color: theme.textColor,
            marginLeft: horizontalScale(16),
        },
        list: {
            paddingHorizontal: horizontalScale(16)
        }
    })
}
export default getStyles
