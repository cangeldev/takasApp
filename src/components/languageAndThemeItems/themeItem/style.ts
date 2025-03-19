import { useTheme } from 'hooks/useTheme'
import { StyleSheet, useWindowDimensions } from 'react-native'

const getStyles = () => {

  const { width } = useWindowDimensions()
  const scaleFactor = width / 375
  const theme = useTheme()

  return StyleSheet.create({
    themeItem: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.backgroundColor,
      padding: 8 * scaleFactor,
      marginVertical: 5 * scaleFactor,
      borderRadius: 10,
      elevation: 4,
      margin: 5 * scaleFactor
    },
    themeText: {
      flex: 1,
      fontSize: scaleFactor * 16,
      color: theme.textColor
    },
    themeImage: {
      width: 20 * scaleFactor,
      height: 20 * scaleFactor,
      marginRight: 10 * scaleFactor
    }
  })
}
export default getStyles
