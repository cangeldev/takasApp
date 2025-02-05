import { StyleSheet, Dimensions, PixelRatio } from 'react-native'

// Ekran boyutlarını almak için kullanılır
const { width, height } = Dimensions.get('window')

// Ölçekleme faktörü
const scale = Math.min(width / 375, height / 667) // iPhone 6 baz alınarak

export default StyleSheet.create({
  boxStyle: {
    backgroundColor: "transparent",
    marginVertical: 10 * scale
  },
  textStyle: {
    fontWeight: "600",
    fontSize: PixelRatio.getFontScale() * 15,
    color: "#505050"
  }
})
