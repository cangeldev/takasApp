import { StyleSheet } from "react-native"
import colors from "assets/colors/colors"
import { useTheme } from "hooks/useTheme"
import { horizontalScale, verticalScale, scaleFont, moderateScale } from "theme/scale"

const getStyles = () => {

    const theme = useTheme()

    return StyleSheet.create({
        cardContainer: {
            marginTop: verticalScale(10),
            borderRadius: moderateScale(10),
            flexDirection: "row",
            backgroundColor: theme.backgroundColor,
            padding: moderateScale(15),
            justifyContent: "space-between",
            marginHorizontal: horizontalScale(10),
            paddingBottom: verticalScale(25)
        },
        cardTitle: {
            fontSize: scaleFont(17),
            paddingBottom: verticalScale(10),
            fontWeight: "600",
            color: theme.textColor
        },
        addressText: {
            color: "grey",
            fontSize: scaleFont(13)
        },
        locationIcon: {
            fontSize: scaleFont(20),
            color: colors.bottomTabIconActiveColor
        },
        editIcon: {
            fontSize: scaleFont(20),
            color: "grey"
        },
        addressDetails: {
            paddingLeft: horizontalScale(10)
        }
    })
}

export default getStyles
