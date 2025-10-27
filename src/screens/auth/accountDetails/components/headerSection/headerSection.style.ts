import { StyleSheet } from "react-native"
import { horizontalScale, moderateScale, scaleFont, verticalScale } from "theme/scale"

const getStyles = () => {

  return StyleSheet.create({
    backButtonView: {
      backgroundColor: "#f2f5fc",
      borderRadius: moderateScale(20),
      width: horizontalScale(40),
      height: verticalScale(40),
      marginBottom: verticalScale(10),
      justifyContent: "center",
      paddingLeft: horizontalScale(10)
    },
    backButton: {
      fontSize: scaleFont(20),
    },
    title: {
      fontSize: scaleFont(20),
      fontWeight: "700"
    }
  })
}
export default getStyles
