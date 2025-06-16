import { StyleSheet } from 'react-native'
import { useTheme } from 'hooks/useTheme'
import { verticalScale, moderateScale, horizontalScale } from "theme/scale"
import { colors } from 'assets/colors/colors'

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
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical: verticalScale(15),
            marginHorizontal: horizontalScale(15),
            backgroundColor: theme.backgroundColor,
            borderRadius: moderateScale(10),
            paddingVertical: verticalScale(10),
            ...shadowStyle
        },
        cardDivider: {
            width: 1,
            backgroundColor: colors.background.lightGrey,
            height: '80%',
            alignSelf: 'center'
        }
    })
}
export default getStyles
