import { StyleSheet, Dimensions } from "react-native"

const { width } = Dimensions.get('window')

// Ekran genişliğine göre ölçeklendirme faktörü için
const scale = width / 375

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15 * scale
    },
    icon: {
        fontSize: 18,
        color: "#323136"
    },
    rightIcon: {
        fontSize: 15,
        color: "#323136"
    },
    title: {
        marginLeft: 15 * scale,
        flex: 1,
        fontSize: 16
    }
})