import { StyleSheet } from "react-native"
import { useTheme } from 'hooks/useTheme'
import colors from "assets/colors/colors"
import { horizontalScale, verticalScale, scaleFont ,moderateScale} from "theme/scale"

const getStyles = () => {

    const theme = useTheme()

    return StyleSheet.create({
        container: {
            flex: 1,
            padding: moderateScale(15),
            justifyContent: "center",
            marginTop: verticalScale(15)
        },
        row: {
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        halfInputContainer: {
            width: '48%'
        },
        button: {
            backgroundColor: '#2d7f6f',
            padding: moderateScale(15),
            borderRadius: moderateScale(8),
            alignItems: 'center',
            marginTop: verticalScale(10)
        },
        buttonText: {
            color: colors.white,
            fontSize: scaleFont(16),
            fontWeight: 'bold'
        },
        closeIcon: {
            fontSize: scaleFont(25),
            color: "grey",
            alignSelf: "flex-end",
            top: verticalScale(10),
            right: horizontalScale(10)
        }
    })
}
export default getStyles
