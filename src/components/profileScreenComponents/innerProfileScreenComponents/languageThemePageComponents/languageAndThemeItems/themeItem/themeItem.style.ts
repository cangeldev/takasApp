import { useTheme } from 'hooks/useTheme'
import { StyleSheet } from 'react-native'
import { horizontalScale, verticalScale, scaleFont,moderateScale } from "theme/scale"

const getStyles = () => {

  const theme = useTheme()

  return StyleSheet.create({
    themeItem: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.backgroundColor,
      padding: moderateScale(8),
      marginVertical: verticalScale(5),
      borderRadius: moderateScale(10),
      elevation: 4,
      margin: moderateScale(5)
    },
    themeText: {
      flex: 1,
      fontSize: scaleFont(16),
      color: theme.textColor
    },
    themeImage: {
      width: horizontalScale(20),
      height: verticalScale(20),
      marginRight: horizontalScale(10)
    }
  })
}
export default getStyles
