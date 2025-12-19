import { StyleSheet } from 'react-native'
import { horizontalScale, verticalScale } from "theme/scale"

const getStyles = () => {

  return StyleSheet.create({
    inputSection: {
      paddingHorizontal: horizontalScale(15),
      marginTop: verticalScale(80)
    },
    countryCode: {
      flex: 1
    },
    phoneNumber: {
      flex: 3,
      marginLeft: horizontalScale(10)
    }
  })
}
export default getStyles
