import { StyleSheet } from 'react-native'
import { useTheme } from 'hooks/useTheme'
import { horizontalScale, moderateScale, scaleFont, verticalScale } from "theme/scale"

const getStyles = () => {
  const theme = useTheme()

  return StyleSheet.create({
    container: {
      paddingHorizontal: horizontalScale(15),
      marginTop: verticalScale(50),
    },
    errorContainer: {
      backgroundColor: "#F9D5CD",
      alignItems: "center",
      borderRadius: moderateScale(5),
      paddingVertical: verticalScale(10),
      marginBottom: verticalScale(20),
      marginTop: verticalScale(-35)
    },
    errorText: {
      textAlign: "center",
      padding: moderateScale(10),
      paddingHorizontal: horizontalScale(15)
    },
    backIcon: {
      fontSize: scaleFont(25),
    },
    errorIcon: {
      fontSize: scaleFont(25),
    },
    title: {
      fontSize: scaleFont(24),
      fontWeight: "600",
      marginTop: verticalScale(10),
      textAlign: "center"
    },
    image: {
      width: "100%",
      height: "40%"
    },
    submitButton: {
      padding: moderateScale(12),
      borderRadius: moderateScale(10),
      marginTop: verticalScale(30)
    },
    submitText: {
      fontSize: scaleFont(16),
      fontWeight: "600"
    },
    text1Style: {
      fontSize: scaleFont(16)
    },
    text2Style: {
      fontSize: scaleFont(13)
    }
  })
}
export default getStyles
