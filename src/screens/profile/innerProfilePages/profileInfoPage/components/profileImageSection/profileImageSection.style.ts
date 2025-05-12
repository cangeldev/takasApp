import { StyleSheet } from 'react-native'
import colors from 'assets/colors/colors'
import { useTheme } from 'hooks/useTheme'
import { horizontalScale, moderateScale, scaleFont, verticalScale } from "theme/scale"

const shadowStyle = {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 1.41,
  elevation: 3
}

const getStyles = () => {
  const theme = useTheme()

  return StyleSheet.create({
    profileImageContainer: {
      width: horizontalScale(80),
      height: verticalScale(80),
      padding: moderateScale(3),
      backgroundColor: theme.backgroundColor,
      borderRadius: moderateScale(40),
      ...shadowStyle
    },
    cameraIcon: {
      fontSize: scaleFont(14),
      color: colors.disabledText,
      backgroundColor: theme.backgroundColor,
      position: 'absolute',
      borderRadius: moderateScale(25),
      padding: moderateScale(4),
      elevation: 1,
      bottom: verticalScale(0),
      right: horizontalScale(5)
    }
  })
}

export default getStyles
