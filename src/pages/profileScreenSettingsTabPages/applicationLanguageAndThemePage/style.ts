import { StyleSheet, Dimensions, PixelRatio } from 'react-native'
import colors from 'assets/colors/colors'

// Ekran boyutlarını almak için kullanılır
const { width, height } = Dimensions.get('window')

// Ölçekleme faktörü
const scale = Math.min(width / 375, height / 667) // iPhone 6 baz alınarak
const spacing = 10 * scale // Sabit boşluk değeri


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  backIcon: {
    fontSize: PixelRatio.getFontScale() * 22,
    color: colors.bottomTabIconInactiveColor,
    marginHorizontal: 15 * scale
  }
})
