import colors from 'assets/colors/colors'
import { useTheme } from 'hooks/useTheme'
import { StyleSheet } from 'react-native'
import { horizontalScale, moderateScale, scaleFont, verticalScale } from "theme/scale"

const getStyles = () => {
  const theme = useTheme()

  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: moderateScale(12),
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
    },
    avatar: {
      width: horizontalScale(40),
      height: verticalScale(40),
      borderRadius: moderateScale(30),
      marginRight: horizontalScale(12),
    },
    name: {
      flex: 1,
      fontSize: scaleFont(16),
      color: theme.textColor,
    },

    // Base Styles
    baseButton: {
      borderRadius: moderateScale(20),
      paddingHorizontal: horizontalScale(20),
      paddingVertical: verticalScale(6),
    },
    baseIcon: {
      fontWeight: 'bold',
      fontSize: scaleFont(16),
    },

    // Followed (checked state)
    followedButton: {
      backgroundColor: colors.primaryText,
    },
    followedIcon: {
      color: colors.white,
    },

    // Follow (plus/minus state)
    followButton: {
      borderWidth: 2,
      borderColor: colors.primaryText,
    },
    followIcon: {
      color: colors.primaryText,
    },
  })
}

export default getStyles
