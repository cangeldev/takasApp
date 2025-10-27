import { StyleSheet } from "react-native"
import { moderateScale, scaleFont, verticalScale } from "theme/scale"

const getStyles = () => {
  return StyleSheet.create({
    loginButton: {
      padding: moderateScale(15),
      borderRadius: moderateScale(10),
      marginBottom: verticalScale(25)
    },
    loginText: {
      fontSize: scaleFont(16),
      fontWeight: "600"
    }
  })
}
export default getStyles
