import { StyleSheet } from "react-native"
import { horizontalScale, verticalScale } from "theme/scale"
import { colors } from "assets/colors/colors"

const getStyles = () => {

    return StyleSheet.create({
        container: {
            width: "100%",
            height: verticalScale(300),
            paddingHorizontal: horizontalScale(16),
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: colors.border.lightDivider,
            paddingVertical: verticalScale(15)
        },
        map: {
            width: '100%',
            height: '100%'
        }
    })
}
export default getStyles
