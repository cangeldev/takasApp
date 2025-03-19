import { StyleSheet, useWindowDimensions } from "react-native"
import { useTheme } from 'hooks/useTheme'
import colors from "assets/colors/colors"

const getStyles = () => {

    const theme = useTheme()
    const { width } = useWindowDimensions()
    const scaleFactor = width / 375

    return StyleSheet.create({
        container: {
            flex: 1,
            padding: 15 * scaleFactor,
            justifyContent: "center",
            marginTop: 15 * scaleFactor
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        halfInputContainer: {
            width: '48%'
        },
        button: {
            backgroundColor: '#2d7f6f',
            padding: 15 * scaleFactor,
            borderRadius: 8,
            alignItems: 'center',
            marginTop: 10 * scaleFactor
        },
        buttonText: {
            color: colors.white,
            fontSize: 16 * scaleFactor,
            fontWeight: 'bold'
        },
        closeIcon: {
            fontSize: 25 * scaleFactor,
            color: "grey",
            alignSelf: "flex-end",
            top: 10 * scaleFactor,
            right: 10 * scaleFactor
        }
    })
}
export default getStyles