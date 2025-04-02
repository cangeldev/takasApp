import { useTheme } from 'hooks/useTheme'
import { StyleSheet, useWindowDimensions } from 'react-native'

const getStyles = () => {

  const { width } = useWindowDimensions()
  const scaleFactor = width / 375
  const theme = useTheme()

  return StyleSheet.create({
    icon: {
      fontSize: 22 * scaleFactor,
      color: "red"
    },
    settingRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 12 * scaleFactor,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    settingText: {
      fontSize: 16 * scaleFactor,
      flex: 1,
      marginLeft: 10 * scaleFactor,
      color: '#333',
    }
  })
}
export default getStyles
