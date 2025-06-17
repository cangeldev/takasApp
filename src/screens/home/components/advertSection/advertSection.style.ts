import { StyleSheet } from "react-native"
import { verticalScale } from "theme/scale"

const getStyles = () => {

  return StyleSheet.create({
    advertImage: {
      width: "100%",
      height: verticalScale(70),
      resizeMode: "stretch"
    }
  })
}
export default getStyles
