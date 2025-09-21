import { StyleSheet } from "react-native"
import { horizontalScale, verticalScale, scaleFont } from "theme/scale"
import { useTheme } from "hooks/useTheme"

const getStyles = () => {
    const theme = useTheme()

    return StyleSheet.create({
        sectionTitleText: {
            fontSize: scaleFont(18),
            fontWeight: 'bold',
            marginBottom: verticalScale(10),
            color: theme.textColor,
            marginLeft: horizontalScale(10),
        },
        list: {
            paddingHorizontal: horizontalScale(10),
        }
    })
}
export default getStyles
