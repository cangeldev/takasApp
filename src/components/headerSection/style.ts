import colors from 'assets/colors/colors'
import { useTheme } from 'hooks/useTheme'
import { StyleSheet, useWindowDimensions } from 'react-native'

const getStyles = () => {

  const { width } = useWindowDimensions()
  const scaleFactor = width / 375
  const theme = useTheme()

  return StyleSheet.create({
    header: {
      flexDirection: "row",
      backgroundColor: theme.backgroundColor,
      paddingVertical: 15 * scaleFactor,
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 5 * scaleFactor
    },
    headerTitle: {
      fontSize: 17*scaleFactor,
      flex: 1,
      fontWeight: "600",
      paddingLeft: 10*scaleFactor
    },
    addAddress: {
      color: colors.bottomTabIconActiveColor,
      fontWeight: "600"
    },
    backIcon: {
      fontSize: 22 * scaleFactor,
      marginRight: 10 * scaleFactor
    }
  })
}

export default getStyles
