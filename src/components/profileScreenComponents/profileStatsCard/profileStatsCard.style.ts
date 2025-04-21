import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"
import { scaleFont } from "theme/scale"

const getStyles = () => {

    return StyleSheet.create({
        container: {
            alignItems: 'center'
        },
        count: {
            fontWeight: '700',
            fontSize: scaleFont(14)
        },
        title: {
            color: colors.textInactiveColor,
            fontSize: scaleFont(13)
        }
    })
}
export default getStyles
