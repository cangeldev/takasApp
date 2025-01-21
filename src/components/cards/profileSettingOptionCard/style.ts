import { StyleSheet, Dimensions, PixelRatio } from 'react-native'

const { width } = Dimensions.get('window')

// Ekran genişliğine göre ölçeklendirme faktörü
const scale = Math.min(width / 375, 1) // iPhone 6 baz alınarak
const spacing = 15 * scale // Sabit boşluk değeri

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: spacing
    },
    icon: {
        fontSize: PixelRatio.getFontScale() * 18,
        color: '#323136'
    },
    rightIcon: {
        fontSize: PixelRatio.getFontScale() * 15,
        color: '#323136'
    },
    title: {
        marginLeft: spacing,
        flex: 1,
        fontSize: PixelRatio.getFontScale() * 16
    }
})
