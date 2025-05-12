import colors from 'assets/colors/colors'
import { useTheme } from 'hooks/useTheme'
import { StyleSheet } from 'react-native'
import { horizontalScale, verticalScale, scaleFont, moderateScale } from "theme/scale"

const getStyles = () => {
  const theme = useTheme()

  return StyleSheet.create({
    card: {
      backgroundColor: theme.backgroundColor,
      borderRadius: moderateScale(12),
      paddingHorizontal: horizontalScale(16),
      paddingVertical: verticalScale(10),
      marginBottom: verticalScale(10),
      elevation: 3
    },
    sectionTitle: {
      fontSize: scaleFont(18),
      fontWeight: '600',
      marginBottom: verticalScale(12),
      color: theme.textColor
    },
    input: {
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: 8,
      padding: moderateScale(12),
      marginBottom: verticalScale(12),
      color: theme.textColor
    },
    textArea: {
      height: verticalScale(100),
      textAlignVertical: 'top'
    },
    button: {
      backgroundColor: colors.primaryText,
      padding: verticalScale(15),
      borderRadius: moderateScale(12),
      alignItems: 'center',
      elevation: 4
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: scaleFont(16)
    }
  })
}
export default getStyles
