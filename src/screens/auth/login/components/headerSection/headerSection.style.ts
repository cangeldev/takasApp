import { StyleSheet } from "react-native"
import { horizontalScale, moderateScale, scaleFont, verticalScale } from "theme/scale"

const getStyles = () => {

  return StyleSheet.create({
    backButtonView: {
      backgroundColor: "#f2f5fc",
      borderRadius: moderateScale(20),
      width: horizontalScale(40),
      height: verticalScale(40),
      marginBottom: verticalScale(15),
      justifyContent: "center",
      paddingLeft: horizontalScale(10)
    },
    backButton: {
      fontSize: scaleFont(24)
    },
    title: {
      fontSize: scaleFont(30),
      fontWeight: "600"
    },
    image: {
      width: "100%",
      height: verticalScale(170),
      marginVertical: verticalScale(20)
    }
  })
}
export default getStyles
