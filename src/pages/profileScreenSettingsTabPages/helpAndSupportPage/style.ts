import colors from 'assets/colors/colors'
import { useTheme } from 'hooks/useTheme'
import { StyleSheet, useWindowDimensions } from 'react-native'

const getStyles = () => {
  const { width } = useWindowDimensions()
  const scaleFactor = width / 375
  const theme = useTheme()

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
      paddingHorizontal: 16 * scaleFactor,
    },
    card: {
      backgroundColor: theme.backgroundColor,
      borderRadius: 12,
      paddingHorizontal: 16 * scaleFactor,
      paddingVertical: 10 * scaleFactor,
      marginBottom: 10 * scaleFactor,
      elevation: 3
    },
    sectionTitle: {
      fontSize: 18 * scaleFactor,
      fontWeight: '600',
      marginBottom: 12 * scaleFactor,
      color: theme.textColor
    },
    faqItem: {
      marginBottom: 15 * scaleFactor
    },
    faqQuestion: {
      fontWeight: 'bold',
      fontSize: 15 * scaleFactor,
      color: theme.textColor
    },
    faqAnswer: {
      color: colors.textGrey,
      marginTop: 4 * scaleFactor,
      fontSize: 14 * scaleFactor
    },
    input: {
      borderWidth: 1,
      borderColor: theme.inputBorder || "#ddd",
      borderRadius: 8,
      padding: 12 * scaleFactor,
      marginBottom: 12 * scaleFactor,
      color: theme.textColor
    },
    textArea: {
      height: 100,
      textAlignVertical: 'top'
    },
    button: {
      backgroundColor: colors.bottomTabIconActiveColor,
      padding: 15 * scaleFactor,
      borderRadius: 12,
      alignItems: 'center',
      elevation: 4
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16 * scaleFactor
    },
    contactLabel: {
      fontWeight: "600",
      fontSize: 16 * scaleFactor,
      marginBottom: 5 * scaleFactor,
      color: theme.textColor
    },
    contactLink: {
      color: theme.primary || '#007bff',
      textDecorationLine: 'underline'
    },
    phoneRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10 * scaleFactor
    },
    phoneNumber: {
      marginLeft: 5 * scaleFactor,
      color: theme.textColor
    },
    phoneIcon: {
      fontSize: 20
    }
  })
}

export default getStyles
