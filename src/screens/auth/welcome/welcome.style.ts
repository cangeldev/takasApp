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
    buttonContainer: {
      gap: 15
    },
    button: {
      width: "100%",
      padding: moderateScale(15),
      borderRadius: moderateScale(30)
    },
    buttonText: {
      fontSize: scaleFont(16),
      fontWeight: "600"
    }
  })
}
export default getStyles
