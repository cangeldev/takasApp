import { StyleSheet } from "react-native"
import { colors } from "assets/colors/colors"
import { moderateScale, scaleFont } from "theme/scale"

const getStyles = () => {

  return StyleSheet.create({
    container: {
      gap: 5,
      flex: 1,
      padding: moderateScale(20),
      backgroundColor: colors.base.white
    },
    submitButton: {
      padding: moderateScale(15),
      borderRadius: moderateScale(10)
    },
    submitText: {
      fontSize: scaleFont(16),
      fontWeight: "600"
    },
    text1Style: {
      fontSize: scaleFont(16)
    },
    text2Style: {
      fontSize: scaleFont(13)
    }
  })
}
export default getStyles
