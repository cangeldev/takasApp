import colors from 'assets/colors/colors'
import { useTheme } from 'hooks/useTheme'
import { StyleSheet } from 'react-native'
import { horizontalScale, verticalScale, scaleFont, moderateScale } from "theme/scale"

const getStyles = () => {
  const theme = useTheme()

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
      paddingHorizontal: horizontalScale(16),
    },
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
    faqItem: {
      marginBottom: verticalScale(15)
    },
    faqQuestion: {
      fontWeight: 'bold',
      fontSize: scaleFont(15),
      color: theme.textColor
    },
    faqAnswer: {
      color: colors.textGrey,
      marginTop: verticalScale(4),
      fontSize: scaleFont(14)
    },
    input: {
      borderWidth: 1,
      borderColor: theme.inputBorder || "#ddd",
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
      backgroundColor: colors.bottomTabIconActiveColor,
      padding: verticalScale(15),
      borderRadius: moderateScale(12),
      alignItems: 'center',
      elevation: 4
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: scaleFont(16)
    },
    contactLabel: {
      fontWeight: "600",
      fontSize: scaleFont(16),
      marginBottom: verticalScale(5),
      color: theme.textColor
    },
    contactLink: {
      color: theme.primary || '#007bff',
      textDecorationLine: 'underline'
    },
    phoneRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: verticalScale(10)
    },
    phoneNumber: {
      marginLeft: horizontalScale(5),
      color: theme.textColor
    },
    phoneIcon: {
      fontSize: scaleFont(20)
    }
  })
}

export default getStyles
