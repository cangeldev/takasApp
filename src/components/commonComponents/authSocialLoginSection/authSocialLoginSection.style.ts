import { StyleSheet } from "react-native"
import { horizontalScale, moderateScale, scaleFont, verticalScale } from "theme/scale"

const getStyles = () => {

  return StyleSheet.create({
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
      marginHorizontal: moderateScale(-10),
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
    authText: {
      fontSize: scaleFont(14),
      color: "#666"
    },
    authNowText: {
      fontSize: scaleFont(14),
      color: "#2e64e5",
      fontWeight: "600"
    }
  })
}
export default getStyles
