import { StyleSheet } from "react-native"
import { horizontalScale, verticalScale, scaleFont } from "utils/scale"

const getStyles = () => {

    return StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: verticalScale(10)
        },
        icon: {
            fontSize: scaleFont(18),
            color: '#323136'
        },
        rightIcon: {
            fontSize: scaleFont(15),
            color: '#323136'
        },
        title: {
            marginLeft: horizontalScale(10),
            flex: 1,
            fontSize: scaleFont(15)
        }
    })
}
export default getStyles
