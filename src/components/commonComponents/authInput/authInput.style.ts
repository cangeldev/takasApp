import { colors } from "assets/colors/colors"
import { StyleSheet } from "react-native"
import { horizontalScale, moderateScale, scaleFont, verticalScale } from "theme/scale"

const getStyles = () => {

    return StyleSheet.create({
        inputContainer: {
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: moderateScale(10),
            padding: moderateScale(5),
            backgroundColor: "#f9f9f9",
            marginBottom: verticalScale(15)
        },
        input: {
            fontSize: scaleFont(14),
            paddingRight: horizontalScale(40),
            paddingLeft: horizontalScale(10)
        },
        eyeButton: {
            position: "absolute",
            right: horizontalScale(15)
        },
        eyeIcon: {
            fontSize: scaleFont(20),
            color: colors.border.darkDivider
        }
    })
}
export default getStyles
