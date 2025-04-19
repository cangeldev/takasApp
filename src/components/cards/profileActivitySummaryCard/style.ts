import { StyleSheet } from "react-native"
import colors from "assets/colors/colors"
import { horizontalScale, verticalScale, scaleFont } from "utils/scale"

const getStyles = () => {
    return StyleSheet.create({
        container: {
            alignItems: 'center',
            marginVertical: verticalScale(10),
        },
        activityIcon: {
            width: horizontalScale(30),
            height: verticalScale(30),
        },
        activityLabel: {
            marginTop: verticalScale(2),
            color: colors.bottomTabIconInactiveColor,
            fontSize: scaleFont(13),
        }
    })
}

export default getStyles
