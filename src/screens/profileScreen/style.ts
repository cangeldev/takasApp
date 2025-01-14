import { Dimensions, StyleSheet } from 'react-native'
import colors from 'assets/colors/colors'

// Ekran boyutunu almak için Dimensions API'si kullanılır
const { width, height } = Dimensions.get('window')

// Ekran genişliğine göre ölçeklendirme faktörü
const scale = width / 375

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    profileImageWrapper: {
        width: 60 * scale,
        height: 60 * scale,
        padding: 3 * scale,
        backgroundColor: colors.white,
        elevation: 2,
        borderRadius: 30 * scale
    },
    header: {
        flexDirection: 'row',
        margin: 10 * scale,
        alignItems: 'center'
    },
    logoText: {
        flex: 1,
        fontFamily: 'Pacifico-Regular',
        fontSize: 24 * scale,
        color: colors.bottomTabIconActiveColor
    },
    icon: {
        fontSize: 22 * scale,
        color: colors.textInactiveColor,
        marginLeft: 20 * scale
    },
    cameraIcon: {
        fontSize: 14 * scale,
        color: colors.textInactiveColor,
        backgroundColor: colors.white,
        position: 'absolute',
        borderRadius: 25 * scale,
        padding: 4 * scale,
        elevation: 1,
        bottom: 0,
        right: 5 * scale
    },
    profileName: {
        marginTop: 5 * scale,
        fontWeight: "600"
    },
    statsContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    profileSection: {
        marginBottom: 40 * scale,
        flexDirection: 'row'
    },
    profileInfoContainer: {
        alignItems: 'center',
        marginLeft: 10 * scale
    }
})
