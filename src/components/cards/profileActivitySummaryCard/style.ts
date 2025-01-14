import { Dimensions, StyleSheet } from 'react-native'
import colors from 'assets/colors/colors'

// Ekran boyutunu almak için Dimensions API'si kullanılır
const { width, height } = Dimensions.get('window')

// Ekran genişliğine göre ölçeklendirme faktörü
const scale = width / 375

export default StyleSheet.create({
    container: {
        alignItems: "center"
    },
    activityIconWrapper: {
        width: 60 * scale,
        height: 60 * scale,
        backgroundColor: colors.white,
        borderRadius: 30 * scale,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: colors.lightGrey,
        elevation: 0.5
    },
    activityIcon: {
        width: 40 * scale,
        height: 40 * scale
    },
    activityLabel: {
       marginTop:2
    }
})