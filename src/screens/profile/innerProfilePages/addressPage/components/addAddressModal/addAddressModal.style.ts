import { StyleSheet } from "react-native"
import { useTheme } from 'hooks/useTheme'
import { horizontalScale, verticalScale, scaleFont, moderateScale } from "theme/scale"

const getStyles = () => {
    const theme = useTheme()

    return StyleSheet.create({
        container: {
            flex: 1,
            padding: moderateScale(15),
            justifyContent: "center",
            paddingTop: verticalScale(30),
            backgroundColor: theme.backgroundColor
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        halfWidthInput: {
            width: '48%'
        },
        button: {
            padding: moderateScale(15),
            borderRadius: moderateScale(8),
            marginTop: verticalScale(27)
        },
        saveButtonText: {
            fontSize: scaleFont(16),
            fontWeight: 'bold'
        },
        closeIcon: {
            fontSize: scaleFont(25),
            color: theme.textColor,
            alignSelf: "flex-end",
            top: verticalScale(10),
            right: horizontalScale(10)
        },
        errorContainer: {
            backgroundColor: "#F9D5CD",
            alignItems: "center",
            borderRadius: moderateScale(5),
            paddingVertical: verticalScale(5),
            marginTop: verticalScale(20)
        },
        errorText: {
            textAlign: "center",
            padding: moderateScale(5),
        },
        errorIcon: {
            fontSize: scaleFont(25),
        }
    })
}
export default getStyles
