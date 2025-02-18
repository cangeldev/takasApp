import { StyleSheet, Dimensions, PixelRatio } from 'react-native'
import colors from 'assets/colors/colors'

// Ekran boyutlarını almak için kullanılır
const { width, height } = Dimensions.get('window')

// Ölçekleme faktörü
const scale = Math.min(width / 375, height / 667) // iPhone 6 baz alınarak

export default StyleSheet.create({
  languageItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: 8 * scale,
    margin: 5 * scale,
    borderRadius: 10,
    elevation: 3
  },
  flag: {
    fontSize: PixelRatio.getFontScale() * 20,
    marginRight: 10 * scale,
  },
  languageText: {
    flex: 1,
    fontSize: PixelRatio.getFontScale() * 16
  }
})
