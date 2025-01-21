import { Dimensions, StyleSheet, PixelRatio } from 'react-native'
import colors from 'assets/colors/colors'

// Ekran boyutlarını al
const { width, height } = Dimensions.get('window')

// Ölçekleme faktörü
const scale = Math.min(width / 375, height / 667) // iPhone 6 baz alınarak
const spacing = 10 * scale // Sabit boşluk değeri

const shadowStyle = {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 3
}

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: spacing * 1.3
    },
    profileImageWrapper: {
        width: 60 * scale,
        height: 60 * scale,
        padding: 3 * scale,
        backgroundColor: colors.white,
        borderRadius: 30 * scale,
        ...shadowStyle
    },
    header: {
        flexDirection: 'row',
        marginVertical: spacing,
        alignItems: 'center'
    },
    logoText: {
        flex: 1,
        fontFamily: 'Pacifico-Regular',
        fontSize: PixelRatio.getFontScale() * 24,
        color: colors.bottomTabIconActiveColor,
    },
    icon: {
        fontSize: PixelRatio.getFontScale() * 22,
        color: colors.textInactiveColor,
        marginLeft: spacing * 2
    },
    cameraIcon: {
        fontSize: PixelRatio.getFontScale() * 14,
        color: colors.textInactiveColor,
        backgroundColor: colors.white,
        position: 'absolute',
        borderRadius: 25 * scale,
        padding: 4 * scale,
        bottom: 0,
        right: spacing * 0.5,
        ...shadowStyle
    },
    profileName: {
        marginTop: spacing / 2,
        fontWeight: '600',
        alignSelf: 'center'
    },
    statsContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    profileSection: {
        marginBottom: spacing * 1.5,
        flexDirection: 'row'
    },
    activitySummarySection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: spacing * 1.5,
        backgroundColor: colors.white,
        borderRadius: 10,
        paddingVertical: spacing,
        ...shadowStyle
    },
    divider: {
        width: 1,
        backgroundColor: colors.lightGrey,
        height: '80%',
        alignSelf: 'center'
    },
    advert: {
        width: '100%',
        height: 120 * scale,
        backgroundColor: 'yellow',
        borderRadius: 10
    },
    settingsListContainer: {
        backgroundColor: colors.white,
        borderRadius: 10,
        marginVertical: spacing * 1.5,
        paddingHorizontal: spacing,
        ...shadowStyle
    }
})
