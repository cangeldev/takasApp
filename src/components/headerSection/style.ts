import { useTheme } from 'hooks/useTheme'
import { StyleSheet, useWindowDimensions } from 'react-native'

const getStyles = () => {

  const { width } = useWindowDimensions()
  const scaleFactor = width / 375
  const theme = useTheme()

  return StyleSheet.create({

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
      color: theme.textColor
    }
  })
}

export default getStyles
