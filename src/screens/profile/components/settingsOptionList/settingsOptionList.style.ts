import { StyleSheet } from 'react-native'
import { useTheme } from 'hooks/useTheme'
import { horizontalScale, verticalScale, moderateScale } from "theme/scale"

const shadowStyle = {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 3
}

const getStyles = () => {
    const theme = useTheme()

    return StyleSheet.create({
        container: {
            backgroundColor: theme.backgroundColor
        },
        innerContainer: {
            backgroundColor: theme.backgroundColor,
            borderRadius: moderateScale(10),
            marginVertical: verticalScale(15),
            paddingHorizontal: horizontalScale(10),
            marginHorizontal: horizontalScale(15),
            ...shadowStyle
        }
    })
}
export default getStyles
