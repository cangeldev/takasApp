import { useTheme } from 'hooks/useTheme'
import { StyleSheet } from 'react-native'
import { scaleFont, verticalScale } from "theme/scale"

const getStyles = () => {
  const theme = useTheme()

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
      paddingTop: verticalScale(5)
    },
    tabContainer: {
      flexDirection: 'row',
      justifyContent: 'center'
    },
    tab: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: verticalScale(10)
    },
    activeTab: {
      borderBottomWidth: 2,
      borderBottomColor: '#ff3b30'
    },
    tabText: {
      color: '#888',
      fontSize: scaleFont(16)
    },
    activeTabText: {
      color: theme.textColor,
      fontWeight: 'bold',
      fontSize: scaleFont(16)
    }
  })
}
export default getStyles
