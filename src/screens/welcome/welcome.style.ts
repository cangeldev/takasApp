import { colors } from "assets/colors/colors"
import { StyleSheet } from "react-native"
import { horizontalScale, moderateScale, scaleFont, verticalScale } from "theme/scale"

const getStyles = () => {

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.base.white,
      justifyContent: "space-around",
      paddingHorizontal: horizontalScale(16),
      paddingTop: horizontalScale(60)
    },
    image: {
      width: "100%",
      height: verticalScale(250)
    },
    title: {
      fontSize: scaleFont(28),
      fontWeight: "700",
      color: colors.base.black,
      alignSelf: "center"
    },
    subtitle: {
      fontSize: scaleFont(14),
      color: "#666",
      textAlign: "center",
      marginTop: verticalScale(10)
    },
    loginBtn: {
      width: "100%",
      padding: moderateScale(15),
      backgroundColor: "#5A4FCF",
      borderRadius: moderateScale(30),
      alignItems: "center",
      marginBottom: verticalScale(15)
    },
    loginText: {
      color: colors.base.white,
      fontSize: scaleFont(16),
      fontWeight: "600"
    },
    signUpBtn: {
      width: "100%",
      padding: moderateScale(15),
      borderRadius: moderateScale(30),
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#5A4FCF",
      marginBottom: verticalScale(30)
    },
    signUpText: {
      color: "#5A4FCF",
      fontSize: scaleFont(16),
      fontWeight: "600"
    }
  })
}
export default getStyles
