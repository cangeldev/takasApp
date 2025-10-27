import { colors } from "assets/colors/colors"
import { StyleSheet } from "react-native"
import { moderateScale, scaleFont, verticalScale } from "theme/scale"

const getStyles = () => {

  return StyleSheet.create({

    imageView: {
      width: "24%",
      height: "11.7%",
      borderRadius: moderateScale(100),
      borderWidth: 2,
      borderColor: "#2e64e5",
      padding: moderateScale(2),
      alignSelf: "center",
      marginVertical: verticalScale(15)
    },
    image: {
      width: "100%",
      height: "100%"
    },
    imageAddIcon: {
      fontSize: scaleFont(14),
      position: "absolute",
      right: 0,
      bottom: 0,
      borderRadius: moderateScale(100),
      backgroundColor: "#2e64e5",
      color: colors.base.white,
      padding: moderateScale(4)
    }
  })
}
export default getStyles
