import { Dimensions, StyleSheet } from 'react-native'
import colors from 'assets/colors/colors'

// Ekran boyutunu almak için Dimensions API'si kullanılır
const { width, height } = Dimensions.get('window')

// Ekran genişliğine göre ölçeklendirme faktörü
const scale = width / 375

export default StyleSheet.create({
    container: {
        alignItems: "center",
        marginVertical:5 * scale
    },
    activityIcon: {
        width: 30 * scale,
        height: 30 * scale
    },
    activityLabel: {
        marginTop: 2,
        color: colors.bottomTabIconInactiveColor,
        fontSize: 13
    }
})