import { useTheme } from 'hooks/useTheme'
import { StyleSheet, useWindowDimensions } from 'react-native'

const getStyles = () => {

  const { width } = useWindowDimensions()
  const scaleFactor = width / 375
  const theme = useTheme()

  return StyleSheet.create({
    languageItem: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.backgroundColor,
      padding: 8 * scaleFactor,
      margin: 5 * scaleFactor,
      borderRadius: 10,
      elevation: 3
    },
    flag: {
      fontSize: scaleFactor * 20,
      marginRight: 10 * scaleFactor,
    },
    languageText: {
      flex: 1,
      fontSize: scaleFactor * 16,
      color: theme.textColor
    }
  })
}
export default getStyles
