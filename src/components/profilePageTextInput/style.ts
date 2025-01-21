import colors from 'assets/colors/colors'
import { StyleSheet, Dimensions, PixelRatio } from 'react-native'

// Ekran boyutunu almak için Dimensions API'si kullanılır
const { width, height } = Dimensions.get('window')

// Ekran genişliğine göre ölçeklendirme faktörü
const scale = Math.min(width / 375, height / 667)// Hem genişlik hem yükseklik baz alınarak
const spacing = 13 * scale // Sabit boşluk değeri

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginBottom: 20 * scale
    },
    txtInput: {
        borderRadius: 6,
        paddingHorizontal: spacing,
        borderWidth: 1,
        borderColor: colors.lightGrey
    },
    title: {
        position: 'absolute',
        backgroundColor: colors.white,
        top: -10,
        left: 6,
        paddingHorizontal: 6 * scale,
        fontSize: PixelRatio.getFontScale() * 12,
        color: colors.black
    },
    icon: {
        fontSize: PixelRatio.getFontScale() * 20,
        color: colors.black,
        position: 'absolute',
        right: 10
    }
})
