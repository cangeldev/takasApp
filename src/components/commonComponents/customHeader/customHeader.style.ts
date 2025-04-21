import { StyleSheet } from 'react-native'
import { useTheme } from 'hooks/useTheme'
import colors from 'assets/colors/colors'
import { horizontalScale, verticalScale, scaleFont } from "theme/scale"

const getStyles = () => {

  const theme = useTheme()

  return StyleSheet.create({
    header: {
      flexDirection: "row",
      backgroundColor: theme.backgroundColor,
      paddingVertical: verticalScale(15),
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: horizontalScale(5)
    },
    headerTitle: {
      fontSize: scaleFont(17),
      flex: 1,
      fontWeight: "600",
      paddingLeft: horizontalScale(10)
    },
    addAddress: {
      color: colors.bottomTabIconActiveColor,
      fontWeight: "600"
    },
    backIcon: {
      fontSize: scaleFont(22),
      marginRight: horizontalScale(10)
    }
  })
}

export default getStyles
