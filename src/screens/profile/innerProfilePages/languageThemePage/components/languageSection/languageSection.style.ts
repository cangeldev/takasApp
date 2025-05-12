import { useTheme } from 'hooks/useTheme'
import { StyleSheet } from 'react-native'
import { horizontalScale, verticalScale, scaleFont } from "theme/scale"

const getStyles = () => {
  const theme = useTheme()

  return StyleSheet.create({
    sectionTitle: {
      fontSize: scaleFont(20),
      fontWeight: 'bold',
      marginTop: verticalScale(15),
      marginBottom: verticalScale(2),
      marginLeft: horizontalScale(5),
      color: theme.textColor
    }
  })
}
export default getStyles
