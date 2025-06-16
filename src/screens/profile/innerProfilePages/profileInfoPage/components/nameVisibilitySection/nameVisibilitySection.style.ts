import { StyleSheet } from 'react-native'
import { colors } from 'assets/colors/colors'
import { horizontalScale, moderateScale, scaleFont, verticalScale } from "theme/scale"

const shadowStyle = {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 1.41,
  elevation: 3
}

const getStyles = () => {

  return StyleSheet.create({

    descriptionContainer: {
      backgroundColor: colors.background.lightGrey,
      borderRadius: moderateScale(5),
      marginHorizontal: horizontalScale(15),
      padding: moderateScale(10),
      ...shadowStyle
    },
    descriptionText: {
      color: '#686868',
      marginBottom: verticalScale(10),
      fontSize: scaleFont(14)
    }
  })
}
export default getStyles
