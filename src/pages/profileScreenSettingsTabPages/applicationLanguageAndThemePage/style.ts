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
    header: {
      flexDirection: 'row',
      marginTop: 10 * scaleFactor,
      alignItems: 'center'
    },
    headerTitle: {
      fontSize: 22 * scaleFactor,
      fontWeight: '600',
      color:  theme.textColor
    },
    sectionTitle: {
      fontSize: 20 * scaleFactor,
      fontWeight: 'bold',
      marginTop: 15 * scaleFactor,
      marginBottom: 2 * scaleFactor,
      marginLeft: 5 * scaleFactor,
      color:  theme.textColor
    }
  })
}

export default getStyles
