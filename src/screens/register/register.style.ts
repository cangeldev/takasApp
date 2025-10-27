import { StyleSheet } from "react-native"
import { colors } from "assets/colors/colors"
import { moderateScale } from "theme/scale"

const getStyles = () => {

  return StyleSheet.create({
    container: {
      flex: 1,
      padding: moderateScale(20),
      backgroundColor: colors.base.white
    }
  })
}
export default getStyles
