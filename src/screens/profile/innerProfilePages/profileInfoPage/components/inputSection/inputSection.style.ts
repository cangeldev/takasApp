import { StyleSheet } from 'react-native'
import { horizontalScale, verticalScale } from "theme/scale"

const getStyles = () => {

  return StyleSheet.create({
    inputSection: {
      paddingHorizontal: horizontalScale(15),
      marginTop: verticalScale(80)
    }
  })
}
export default getStyles
