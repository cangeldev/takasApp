import { StyleSheet } from "react-native"
import { horizontalScale, scaleFont, verticalScale } from "theme/scale"
import { useTheme } from "hooks/useTheme"

const getStyles = () => {

  const theme = useTheme()

  return StyleSheet.create({
    container: {
      backgroundColor: theme.backgroundColor,
      paddingBottom: verticalScale(120)
    },
    title: {
      paddingHorizontal: horizontalScale(10),
      paddingBottom: verticalScale(7),
      paddingTop: verticalScale(15),
      fontWeight: "600",
      fontSize: scaleFont(16)
    }
  })
}
export default getStyles
