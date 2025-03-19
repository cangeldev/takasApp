import { StyleSheet, useWindowDimensions } from "react-native"
import colors from "assets/colors/colors"

const getStyles = () => {

    const { width } = useWindowDimensions()
    const scaleFactor = width / 375

    return StyleSheet.create({
        container: {
            alignItems: 'center',
            marginVertical: scaleFactor * 10,
        },
        activityIcon: {
            width: 30 * scaleFactor,
            height: 30 * scaleFactor
        },
        activityLabel: {
            marginTop: 2 * scaleFactor,
            color: colors.bottomTabIconInactiveColor,
            fontSize: 13 * scaleFactor
        }
    })
}
export default getStyles