import { StyleSheet } from "react-native"
import { horizontalScale, verticalScale, scaleFont, moderateScale } from "theme/scale"
import { useTheme } from "hooks/useTheme"
import { colors } from "assets/colors/colors"

const getStyles = () => {

  const theme = useTheme()

  return StyleSheet.create({
    container: {
      backgroundColor: theme.backgroundColor,
      paddingHorizontal: horizontalScale(15),
      paddingBottom: verticalScale(10)
    },
    headerContainer: {
      flexDirection: 'row',
      paddingVertical: verticalScale(7),
      alignItems: 'center'
    },
    appTitleText: {
      flex: 1,
      fontFamily: 'Pacifico-Regular',
      fontSize: scaleFont(24),
      color: colors.text.primary
    },
    addressContainer: {
      flexDirection: "row",
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: moderateScale(20),
      paddingHorizontal: horizontalScale(15),
      paddingVertical: verticalScale(5),
      alignItems: "center"
    },
    locationIcon: {
      fontSize: scaleFont(16),
      color: colors.text.primary
    },
    locationText: {
      fontSize: scaleFont(13),
      fontWeight: "700",
      marginHorizontal: horizontalScale(5),
      color: theme.textColor
    },
    downIcon: {
      fontSize: scaleFont(12),
      color: colors.text.primary,
      marginLeft: horizontalScale(10)
    },
    iconButton: {
      fontSize: scaleFont(22),
      color: colors.text.disabled,
      marginLeft: horizontalScale(15)
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: moderateScale(10),
      paddingHorizontal: horizontalScale(10)
    },
    searchIcon: {
      fontSize: scaleFont(17),
      color: colors.text.primary
    }
  })
}
export default getStyles
