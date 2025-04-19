import { useTheme } from 'hooks/useTheme'
import { StyleSheet } from 'react-native'
import { horizontalScale, verticalScale, scaleFont } from "utils/scale"

const getStyles = () => {

  const theme = useTheme()

  return StyleSheet.create({
    icon: {
      fontSize: scaleFont(22),
      color: "red"
    },
    settingRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: verticalScale(12),
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    settingText: {
      fontSize: scaleFont(16),
      flex: 1,
      marginLeft: horizontalScale(10),
      color: '#333',
    }
  })
}

export default getStyles
