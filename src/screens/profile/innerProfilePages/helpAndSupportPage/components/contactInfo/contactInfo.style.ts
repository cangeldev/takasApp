import { useTheme } from 'hooks/useTheme'
import { StyleSheet } from 'react-native'
import { horizontalScale, verticalScale, scaleFont, moderateScale } from "theme/scale"

const getStyles = () => {
  const theme = useTheme()

  return StyleSheet.create({
    container: {
      paddingHorizontal: horizontalScale(12),
      backgroundColor: theme.backgroundColor
    },
    card: {
      backgroundColor: theme.backgroundColor,
      borderRadius: moderateScale(12),
      paddingHorizontal: horizontalScale(16),
      paddingVertical: verticalScale(10),
      marginBottom: verticalScale(10),
      elevation: 3
    },
    contactLabel: {
      fontWeight: "600",
      fontSize: scaleFont(16),
      marginBottom: verticalScale(5),
      color: theme.textColor
    },
    contactLink: {
      color: '#007bff',
      textDecorationLine: 'underline',
      fontSize: scaleFont(14)
    },
    phoneRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: verticalScale(10)
    },
    phoneNumber: {
      marginLeft: horizontalScale(5),
      color: theme.textColor,
      fontSize: scaleFont(14)
    },
    phoneIcon: {
      fontSize: scaleFont(20),
      color: theme.textColor
    }
  })
}
export default getStyles
