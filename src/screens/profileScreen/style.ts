import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    profileImageView: {
        width: 60,
        height: 60
    },
    header: {
        flexDirection: "row",

        margin: 10
    },
    logo: {
        flex: 1,
        fontFamily: "Pacifico-Regular",
        fontSize: 24,
        color: colors.bottomTabIconActiveColor
    },
    icon: {
        fontSize: 24,
        color: colors.bottomTabIconInactiveColor,
        marginLeft: 20
    }
})