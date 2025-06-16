import { StyleSheet } from "react-native"
import { verticalScale } from "theme/scale"
import { useTheme } from "hooks/useTheme"

const getStyles = () => {

  const theme = useTheme()

  return StyleSheet.create({
    container: {
      backgroundColor: theme.backgroundColor,
      paddingTop: verticalScale(10)
    }
  })
}
export default getStyles
