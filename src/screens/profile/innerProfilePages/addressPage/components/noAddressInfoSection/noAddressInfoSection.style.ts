import { StyleSheet } from 'react-native'
import { useTheme } from 'hooks/useTheme'
import { horizontalScale, verticalScale, moderateScale, scaleFont } from "theme/scale"

const getStyles = () => {
  const theme = useTheme()

  return StyleSheet.create({
    infoView: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
    },
    infoImage: {
      width: horizontalScale(160),
      height: verticalScale(160)
    },
    infoText: {
      fontSize: scaleFont(17),
      fontWeight: "600",
      marginVertical: verticalScale(15),
      color: theme.textColor
    },
    button: {
      padding: moderateScale(10),
      borderRadius: moderateScale(20),
      paddingHorizontal: horizontalScale(110)
    },
    buttonText: {
      fontWeight: "600",
      fontSize: scaleFont(15)
    }
  })
}
export default getStyles
