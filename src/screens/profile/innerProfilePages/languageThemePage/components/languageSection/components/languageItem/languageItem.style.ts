import { useTheme } from 'hooks/useTheme'
import { StyleSheet } from 'react-native'
import { horizontalScale, scaleFont, moderateScale } from "theme/scale"

const getStyles = () => {
  const theme = useTheme()

  return StyleSheet.create({
    languageItem: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.backgroundColor,
      padding: moderateScale(8),
      margin: moderateScale(5),
      borderRadius: moderateScale(10),
      elevation: 3
    },
    flag: {
      fontSize: scaleFont(20),
      marginRight: horizontalScale(10)
    },
    languageText: {
      flex: 1,
      fontSize: scaleFont(16),
      color: theme.textColor
    }
  })
}
export default getStyles
