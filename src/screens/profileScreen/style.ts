import { Dimensions, StyleSheet } from 'react-native'
import colors from 'assets/colors/colors'

// Ekran boyutunu almak için Dimensions API'si kullanılır
const { width, height } = Dimensions.get('window')

// Ekran genişliğine göre ölçeklendirme faktörü
const scale = width / 375

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 13 * scale
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
        marginVertical: 10 * scale,
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
        fontWeight: "600",
        alignSelf: "center"
    },
    statsContainer: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    profileSection: {
        marginBottom: 15 * scale,
        flexDirection: 'row'
    },
    activitySummarySection: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 15 * scale,
        backgroundColor: "white",
        elevation: 3,
        borderRadius: 10,
        paddingVertical: 10 * scale,
    },
    divider: {
        width: 1,
        backgroundColor: colors.lightGrey,
        height: '80%',
        alignSelf: "center"
    },
    advert: {
        width: "100%",
        height: 120 * scale,
        backgroundColor: "yellow",
        borderRadius: 10
    },
    settingsListContainer: {
        backgroundColor: colors.white,
        elevation: 3,
        borderRadius: 10,
        marginVertical: 15 * scale,
        paddingHorizontal: 10 * scale
    }
})
