
import { Dimensions, PixelRatio } from 'react-native'
const { width, height } = Dimensions.get('window')

// Tasarımda baz alınan referans boyutlar (örneğin: iPhone 11 Pro ölçüleri)
const guidelineBaseWidth = 375
const guidelineBaseHeight = 812

// Genişlik bazlı ölçek
export const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size

// Yükseklik bazlı ölçek
export const verticalScale = (size: number) => (height / guidelineBaseHeight) * size

// Oranlı esnek ölçek — (font, padding gibi) genelde en çok bu kullanılır.
export const moderateScale = (size: number, factor = 0.5) =>
    size + (horizontalScale(size) - size) * factor

// Font boyutları için esnek ölçekleme
export const scaleFont = (size: number) => {
    const scale = width / guidelineBaseWidth
    const newSize = size * scale
    return PixelRatio.roundToNearestPixel(newSize)
}