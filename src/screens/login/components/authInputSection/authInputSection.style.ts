import { StyleSheet } from "react-native"
import { moderateScale, scaleFont, verticalScale } from "theme/scale"

const getStyles = () => {

  return StyleSheet.create({
    forgotPassword: {
      alignSelf: "flex-end",
      marginTop: verticalScale(8),
      marginBottom: verticalScale(20),
    },
    forgotText: {
      color: "#666",
      fontSize: scaleFont(13),
    },
    loginButton: {
      padding: moderateScale(15),
      borderRadius: moderateScale(10),
      marginBottom: verticalScale(25),
    },
    loginText: {
      fontSize: scaleFont(16),
      fontWeight: "600"
    }
  })
}
export default getStyles
