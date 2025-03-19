import colors from "assets/colors/colors"
import { StyleSheet, useWindowDimensions } from "react-native"

const getStyles = () => {

    const { width } = useWindowDimensions()
    const scaleFactor = width / 375

    return StyleSheet.create({
        container: {
            alignItems: 'center'
        },
        count: {
            fontWeight: '700',
            fontSize: scaleFactor * 14
        },
        title: {
            color: colors.textInactiveColor,
            fontSize: scaleFactor * 13
        }
    })
}
export default getStyles