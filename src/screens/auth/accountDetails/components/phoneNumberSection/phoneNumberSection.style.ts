import { StyleSheet } from "react-native"
import { horizontalScale, moderateScale, scaleFont, verticalScale } from "theme/scale"

const getStyles = () => {

  return StyleSheet.create({
    phoneContainer: {
      flexDirection: "row",
      backgroundColor: "#f9f9f9",
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: moderateScale(10),
      marginBottom: verticalScale(15)
    },
    countryContainer: {
      flexDirection: "row",
      marginLeft: horizontalScale(6),
      paddingVertical: moderateScale(10)
    },
    countryFlag: {
      fontSize: scaleFont(22),
      textAlignVertical: "center",
      marginHorizontal: horizontalScale(10)
    },
    icon: {
      fontSize: scaleFont(20),
      alignSelf: "center"
    },
    phoneNumberInput: {
      paddingLeft: horizontalScale(10),
      marginLeft: horizontalScale(20),
      fontSize: scaleFont(15),
      flex: 1,
      borderLeftWidth: 1,
      borderColor: "#ddd"
    }
  })
}
export default getStyles
