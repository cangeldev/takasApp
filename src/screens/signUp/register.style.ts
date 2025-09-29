import { colors } from "assets/colors/colors"
import { StyleSheet } from "react-native"
import { horizontalScale, moderateScale, scaleFont, verticalScale } from "theme/scale"

const getStyles = () => {

  return StyleSheet.create({
    container: {
      flex: 1,
      padding: moderateScale(20),
      backgroundColor: colors.base.white,
    },
    backButton: {
      marginBottom: verticalScale(30),
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
    },
    input: {
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: moderateScale(10),
      padding: moderateScale(15),
      marginBottom: verticalScale(15),
      fontSize: scaleFont(14),
      backgroundColor: "#f9f9f9",
    },
    passwordContainer: {
      flexDirection: "row",
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: moderateScale(10),
      paddingHorizontal: horizontalScale(15),
      alignItems: "center",
      backgroundColor: "#f9f9f9",
      marginBottom: verticalScale(15)
    },
    passwordInput: {
      flex: 1,
      paddingVertical: verticalScale(12),
      fontSize: scaleFont(14),
    },
    eyeIcon: {
      fontSize: scaleFont(20)
    },
    loginButton: {
      padding: moderateScale(15),
      borderRadius: moderateScale(10),
      marginBottom: verticalScale(25),
    },
    loginText: {
      fontSize: scaleFont(16),
      fontWeight: "600",
    },
    dividerContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: verticalScale(25),
    },
    divider: {
      flex: 1,
      height: 1,
      backgroundColor: "#ddd",
    },
    orText: {
      marginHorizontal: horizontalScale(10),
      color: "#666",
      fontSize: scaleFont(13)
    },
    socialContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    socialButton: {
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: moderateScale(10),
      padding: moderateScale(12),
      marginHorizontal: horizontalScale(10),
      backgroundColor: "#fff",
      width: horizontalScale(100),
      height: verticalScale(60),
      alignItems: "center",
      justifyContent: "center"
    },
    icon: {
      width: horizontalScale(30),
      height: verticalScale(30)
    },
    registerContainer: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: verticalScale(25)
    },
    registerText: {
      fontSize: scaleFont(14),
      color: "#666"
    },
    registerNow: {
      fontSize: scaleFont(14),
      color: "#2e64e5",
      fontWeight: "600"
    }
  })
}
export default getStyles
