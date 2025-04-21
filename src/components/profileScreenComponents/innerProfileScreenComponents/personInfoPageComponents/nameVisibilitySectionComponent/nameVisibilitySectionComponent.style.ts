import { StyleSheet } from "react-native"
import { verticalScale, scaleFont } from "theme/scale"

const getStyles = () => {

  return StyleSheet.create({
    boxStyle: {
      backgroundColor: "transparent",
      marginVertical: verticalScale(10)
    },
    textStyle: {
      fontWeight: "600",
      fontSize: scaleFont(14),
      color: "#505050"
    }
  })
}
export default getStyles
