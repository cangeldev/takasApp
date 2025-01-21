import { Dimensions, StyleSheet, PixelRatio } from 'react-native'
import colors from 'assets/colors/colors'

// Ekran boyutlarını almak için kullanılır
const { width, height } = Dimensions.get('window')

// Ölçekleme faktörü
const scale = Math.min(width / 375, height / 667) // iPhone 6 baz alınarak
const spacing = 5 * scale // Sabit boşluk değeri

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        marginVertical: spacing,
    },
    activityIcon: {
        width: 30 * scale,
        height: 30 * scale
    },
    activityLabel: {
        marginTop: 2,
        color: colors.bottomTabIconInactiveColor,
        fontSize: PixelRatio.getFontScale() * 13
    }
})
