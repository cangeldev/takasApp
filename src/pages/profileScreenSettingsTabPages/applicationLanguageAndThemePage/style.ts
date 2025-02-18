import { StyleSheet, Dimensions, PixelRatio } from 'react-native'
import colors from 'assets/colors/colors'

// Ekran boyutlarını almak için kullanılır
const { width, height } = Dimensions.get('window')

// Ölçekleme faktörü
const scale = Math.min(width / 375, height / 667) // iPhone 6 baz alınarak

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 10 * scale
  },
  backIcon: {
    fontSize: PixelRatio.getFontScale() * 22,
    marginRight: 10 * scale
  },
  header: {
    flexDirection: "row",
    marginTop: 10 * scale,
    alignItems: "center"
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "600"
  },
  sectionTitle: {
    fontSize: PixelRatio.getFontScale() * 20,
    fontWeight: "bold",
    marginTop: 15 * scale,
    marginBottom: 2 * scale,
    marginLeft: 5 * scale
  }
})
