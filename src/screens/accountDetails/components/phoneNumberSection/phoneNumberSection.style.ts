import { StyleSheet } from "react-native"
import { verticalScale } from "theme/scale"

const getStyles = () => {

  return StyleSheet.create({
    phoneContainer: {
      backgroundColor: "#f9f9f9",
      marginBottom: verticalScale(15)
    }
  })
}
export default getStyles
