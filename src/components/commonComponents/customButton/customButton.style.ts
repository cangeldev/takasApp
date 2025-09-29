import { StyleSheet } from "react-native"
import { colors } from "assets/colors/colors"

const getStyles = () => {

    return StyleSheet.create({

        primaryButton: {
            alignItems: "center",
            backgroundColor: "#5A4FCF"
        },
        primaryButtonTitle: {
            color: colors.base.white
        },
        secondaryButton: {
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#5A4FCF",
            backgroundColor: "transparent"
        },
        secondaryButtonTitle: {
            color: "#5A4FCF"
        }
    })
}
export default getStyles
