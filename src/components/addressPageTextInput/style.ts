import { StyleSheet, useWindowDimensions } from "react-native"
import { useTheme } from 'hooks/useTheme'
import colors from "assets/colors/colors"

const getStyles = () => {

    const theme = useTheme()
    const { width } = useWindowDimensions()
    const scaleFactor = width / 375

    return StyleSheet.create({
        label: {
            fontSize: 15 * scaleFactor,
            fontWeight: 'bold',
            marginVertical: 4 * scaleFactor
        },
        input: {
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 8,
            padding: 10 * scaleFactor,
            marginBottom: 10 * scaleFactor
        },
        focusedInput: {
            borderColor: colors.bottomTabIconActiveColor
        }
    })
}
export default getStyles