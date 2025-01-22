import { StyleSheet, Dimensions, PixelRatio } from 'react-native'
import colors from 'assets/colors/colors'

// Ekran boyutlarını almak için kullanılır
const { width, height } = Dimensions.get('window')

// Ölçekleme faktörü
const scale = Math.min(width / 375, height / 667) // iPhone 6 baz alınarak
const spacing = 10 * scale // Sabit boşluk değeri

const shadowStyle = {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 1.41,
  elevation: 3
}

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  headerBackground: {
    height: 180 * scale,
    justifyContent: 'flex-end'
  },
  profileSection: {
    position: 'absolute',
    bottom: -40,
    left: 15,
    flexDirection: 'row'
  },
  profileImageContainer: {
    width: 80 * scale,
    height: 80 * scale,
    padding: 3 * scale,
    backgroundColor: colors.white,
    borderRadius: 40 * scale,
    ...shadowStyle
  },
  cameraIcon: {
    fontSize: PixelRatio.getFontScale() * 14,
    color: colors.textInactiveColor,
    backgroundColor: colors.white,
    position: 'absolute',
    borderRadius: 25 * scale,
    padding: 4 * scale,
    elevation: 1,
    bottom: 0,
    right: 5 * scale
  },
  memberInfoIcon: {
    fontSize: PixelRatio.getFontScale() * 12,
    color: colors.bottomTabIconInactiveColor
  },
  descriptionContainer: {
    backgroundColor: colors.lightGrey,
    borderRadius: 5 * scale,
    marginHorizontal: spacing * 1.3,
    padding: spacing,
    ...shadowStyle
  },
  descriptionText: {
    color: '#686868',
  },
  memberInfoText: {
    fontSize: PixelRatio.getFontScale() * 11
  },
  inputSection: {
    paddingHorizontal: spacing * 1.3,
    marginTop: 80 * scale,
  },
  memberInfoContainer: {
    alignSelf: 'flex-end',
    marginLeft: spacing
  },
  backIcon: {
    fontSize: PixelRatio.getFontScale() * 28,
    color: colors.white,
    flex: 1,
    marginTop: 45 * scale,
    marginHorizontal: 15 * scale
  }
})
