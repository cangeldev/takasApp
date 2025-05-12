import colors from 'assets/colors/colors'
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
      marginVertical: verticalScale(15),
      elevation: 3
    },
    sectionTitle: {
      fontSize: scaleFont(18),
      fontWeight: '600',
      marginBottom: verticalScale(12),
      color: theme.textColor
    },
    faqItem: {
      marginBottom: verticalScale(15)
    },
    faqQuestion: {
      fontWeight: 'bold',
      fontSize: scaleFont(15),
      color: theme.textColor
    },
    faqAnswer: {
      color: colors.secondaryText,
      marginTop: verticalScale(4),
      fontSize: scaleFont(14)
    }
  })
}
export default getStyles
