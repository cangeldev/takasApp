import { StyleSheet } from 'react-native'
import colors from 'assets/colors/colors'
import { useTheme } from 'hooks/useTheme'
import { horizontalScale, moderateScale, scaleFont, verticalScale } from "utils/scale"

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
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor
    },
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
      color: colors.textInactiveColor,
      backgroundColor: theme.backgroundColor,
      position: 'absolute',
      borderRadius: moderateScale(25),
      padding: moderateScale(4),
      elevation: 1,
      bottom: verticalScale(0),
      right: horizontalScale(5)
    },
    memberInfoIcon: {
      fontSize: scaleFont(12),
      color: colors.bottomTabIconInactiveColor
    },
    descriptionContainer: {
      backgroundColor: colors.lightGrey,
      borderRadius: moderateScale(5),
      marginHorizontal: horizontalScale(15),
      padding: moderateScale(10),
      ...shadowStyle
    },
    descriptionText: {
      color: '#686868',
      marginBottom: verticalScale(10)
    },
    memberInfoText: {
      fontSize: scaleFont(11)
    },
    inputSection: {
      paddingHorizontal: horizontalScale(15),
      marginTop: verticalScale(80)
    },
    memberInfoRow: {
      alignSelf: 'flex-end',
      marginLeft: horizontalScale(10)
    },
    backIcon: {
      fontSize: scaleFont(28),
      color: theme.backgroundColor,
      flex: 1,
      marginTop: verticalScale(45),
      marginHorizontal: horizontalScale(15)
    }
  })
}

export default getStyles
