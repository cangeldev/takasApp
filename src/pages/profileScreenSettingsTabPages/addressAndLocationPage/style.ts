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
      paddingHorizontal: 10 * scaleFactor
    },
    backIcon: {
      fontSize: 22 * scaleFactor,
      marginRight: 10 * scaleFactor
    },
    infoView: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    infoImage: {
      width: 160 * scaleFactor,
      height: 160 * scaleFactor,
    },
    infoText: {
      fontSize: 17 * scaleFactor,
      fontWeight: "600",
      marginVertical: 15 * scaleFactor,
      color: theme.textColor
    },
    button: {
      backgroundColor: colors.bottomTabIconActiveColor,
      padding: 10 * scaleFactor,
      borderRadius: 20,
      paddingHorizontal: 110 * scaleFactor
    },
    buttonText: {
      color: colors.white,
      fontWeight: "600",
      fontSize: 15 * scaleFactor
    }
  })
}
export default getStyles
