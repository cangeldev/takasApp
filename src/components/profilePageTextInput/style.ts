import colors from "assets/colors/colors"
import { StyleSheet, useWindowDimensions } from "react-native"
import { useTheme } from 'hooks/useTheme'
const getStyles = () => {

    const { width } = useWindowDimensions()
    const scaleFactor = width / 375
    const theme = useTheme()

    return StyleSheet.create({
        container: {
            justifyContent: 'center',
            marginBottom: 20 * scaleFactor
        },
        txtInput: {
            borderRadius: 6,
            paddingHorizontal: scaleFactor * 10,
            borderWidth: 1,
            borderColor: colors.lightGrey
        },
        title: {
            position: 'absolute',
            backgroundColor: theme.backgroundColor,
            top: -10,
            left: 6,
            paddingHorizontal: 6 * scaleFactor,
            fontSize: scaleFactor * 12,
            color: colors.black
        },
        icon: {
            fontSize: scaleFactor * 20,
            color: theme.textColor,
            position: 'absolute',
            right: 10
        }
    })
}
export default getStyles