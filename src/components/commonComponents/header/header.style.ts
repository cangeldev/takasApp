import { StyleSheet } from 'react-native'
import { useTheme } from 'hooks/useTheme'
import colors from 'assets/colors/colors'
import { horizontalScale, verticalScale, scaleFont } from "theme/scale"

const getStyles = () => {
  const theme = useTheme()

  return StyleSheet.create({
    headerContainer: {
      flexDirection: "row",
      backgroundColor: theme.backgroundColor,
      paddingVertical: verticalScale(15),
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: horizontalScale(5)
    },
    titleText: {
      fontSize: scaleFont(17),
      flex: 1,
      fontWeight: "600",
      paddingLeft: horizontalScale(10),
      color: theme.textColor
    },
    addAddressText: {
      color: colors.primaryText,
      fontWeight: "600"
    },
    backButtonIcon: {
      fontSize: scaleFont(22),
      marginRight: horizontalScale(10),
      color: theme.textColor
    }
  })
}

export default getStyles
