import { StyleSheet } from 'react-native'
import { useTheme } from 'hooks/useTheme'
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
      marginBottom: verticalScale(20),
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
      padding: verticalScale(15),
      borderRadius: moderateScale(12),
      elevation: 4
    },
    buttonText: {
      fontWeight: 'bold',
      fontSize: scaleFont(16)
    },
    text1Style: {
      fontSize: scaleFont(16)
    },
    text2Style: {
      fontSize: scaleFont(13)
    }
  })
}
export default getStyles
