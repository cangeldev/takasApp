import { StyleSheet } from 'react-native'
import { colors } from 'assets/colors/colors'
import { horizontalScale, scaleFont, verticalScale } from "theme/scale"

const getStyles = () => {

  return StyleSheet.create({
    headerBackground: {
      height: verticalScale(180),
      justifyContent: 'flex-end'
    },
    profileSection: {
      position: 'absolute',
      bottom: verticalScale(-40),
      left: horizontalScale(15),
      flexDirection: 'row'
    },
    backIcon: {
      fontSize: scaleFont(28),
      color: colors.base.white,
      flex: 1,
      marginTop: verticalScale(45),
      marginHorizontal: horizontalScale(15)
    }
  })
}
export default getStyles
