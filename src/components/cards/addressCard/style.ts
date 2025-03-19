import { StyleSheet, useWindowDimensions } from "react-native"
import colors from "assets/colors/colors"
import { useTheme } from "hooks/useTheme"

const getStyles = () => {

    const theme = useTheme()
    const { width } = useWindowDimensions()
    const scaleFactor = width / 375

    return StyleSheet.create({
        cardContainer: {
            marginTop: 10 * scaleFactor,
            borderRadius: 10,
            flexDirection: "row",
            backgroundColor: theme.backgroundColor,
            padding: 15 * scaleFactor,
            justifyContent: "space-between",
            marginHorizontal: 10 * scaleFactor,
            paddingBottom: 25 * scaleFactor
        },
        cardTitle: {
            fontSize: 17 * scaleFactor,
            paddingBottom: 10 * scaleFactor,
            fontWeight: "600"
        },
        addressText: {
            color: "grey",
            fontSize: 13
        },
        locationIcon: {
            fontSize: 20 * scaleFactor,
            color: colors.bottomTabIconActiveColor
        },
        editIcon: {
            fontSize: 20 * scaleFactor,
            color: "grey"
        },
        addressDetails: {
            paddingLeft: 10 * scaleFactor
        }
    })
}
export default getStyles