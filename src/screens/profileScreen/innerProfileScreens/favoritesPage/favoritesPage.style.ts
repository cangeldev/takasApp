import { StyleSheet } from 'react-native'
import colors from 'assets/colors/colors'
import { useTheme } from 'hooks/useTheme'
import { horizontalScale, verticalScale, scaleFont, moderateScale } from "theme/scale"

const getStyles = () => {

    const theme = useTheme()

    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.backgroundColor,
            paddingHorizontal: horizontalScale(15)
        },
        infoText: {
            fontSize: scaleFont(17),
            fontWeight: "600",
            marginTop: verticalScale(15),
            color: theme.textColor
        },
        infoTextTwo: {
            fontSize: scaleFont(14),
            marginBottom: verticalScale(10),
            color: theme.textColor,
        },
        button: {
            backgroundColor: colors.bottomTabIconActiveColor,
            padding: moderateScale(10),
            borderRadius: moderateScale(20),
            paddingHorizontal: horizontalScale(110)
        },
        buttonText: {
            color: theme.backgroundColor,
            fontWeight: "600",
            fontSize: scaleFont(15)
        },
        infoView: {
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-end",
            marginBottom: verticalScale(40)
        },
        infoImage: {
            width: horizontalScale(150),
            height: verticalScale(150),
            resizeMode: "center"
        },
        title: {
            marginTop: verticalScale(20),
            fontSize: scaleFont(19),
            fontWeight: "600",
            marginBottom: verticalScale(5),
            marginHorizontal: horizontalScale(5)
        }
    })
}
export default getStyles
