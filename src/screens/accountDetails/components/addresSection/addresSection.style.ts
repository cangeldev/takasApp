import { StyleSheet } from "react-native"
import { moderateScale, verticalScale } from "theme/scale"

const getStyles = () => {

  return StyleSheet.create({
    pickerWrapper: {
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: moderateScale(8),
      backgroundColor: "#f9f9f9",
      marginBottom: verticalScale(20)
    },
    picker: {
      height: verticalScale(54),
      width: '100%'
    }
  })
}
export default getStyles
