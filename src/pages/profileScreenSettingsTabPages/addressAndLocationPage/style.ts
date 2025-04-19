import colors from 'assets/colors/colors'
import { useTheme } from 'hooks/useTheme'
import { StyleSheet } from 'react-native'
import { horizontalScale, verticalScale, moderateScale, scaleFont } from "utils/scale"

const getStyles = () => {

  const theme = useTheme()

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor,
      paddingHorizontal: horizontalScale(10),
    },

    infoView: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    infoImage: {
      width: horizontalScale(160),
      height: verticalScale(160),
    },
    infoText: {
      fontSize: scaleFont(17),
      fontWeight: "600",
      marginVertical: verticalScale(15),
      color: theme.textColor,
    },
    button: {
      backgroundColor: colors.bottomTabIconActiveColor,
      padding: moderateScale(10),
      borderRadius: moderateScale(20),
      paddingHorizontal: horizontalScale(110),
    },
    buttonText: {
      color: colors.white,
      fontWeight: "600",
      fontSize: scaleFont(15),
    },
    SavedAddressesSectionContainer: {
      flex: 1,
      backgroundColor: "#f5f5f5",
    }
  })
}

export default getStyles
