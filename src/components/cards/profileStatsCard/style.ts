import { StyleSheet, PixelRatio } from 'react-native'
import colors from 'assets/colors/colors'

export default StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    count: {
        fontWeight: '700',
        fontSize: PixelRatio.getFontScale() * 14
    },
    title: {
        color: colors.textInactiveColor,
        fontSize: PixelRatio.getFontScale() * 13
    }
})
