import { StyleSheet } from 'react-native'
import { useTheme } from 'hooks/useTheme'
import { horizontalScale, verticalScale, scaleFont } from 'theme/scale'

const getStyles = () => {
    const theme = useTheme()

    return StyleSheet.create({

        noItemImage: {
            marginTop: verticalScale(200),
            width: horizontalScale(150),
            height: verticalScale(150),
            resizeMode: 'center',
            alignSelf: "center"
        },
        noListText: {
            fontSize: scaleFont(17),
            fontWeight: '600',
            marginTop: verticalScale(15),
            color: theme.textColor,
            textAlign: "center"
        }
    })
}
export default getStyles
