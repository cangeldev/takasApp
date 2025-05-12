import { useTheme } from 'hooks/useTheme'
import { StyleSheet } from 'react-native'
import { verticalScale, moderateScale } from "theme/scale"

const getStyles = () => {
    const theme = useTheme()

    return StyleSheet.create({
        container: {
            backgroundColor: theme.backgroundColor
        },
        advert: {
            width: '92%',
            height: verticalScale(120),
            backgroundColor: 'yellow',
            borderRadius: moderateScale(10),
            alignSelf: "center"
        }
    })
}
export default getStyles
