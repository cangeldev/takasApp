import { StyleSheet } from "react-native"
import { horizontalScale, verticalScale, scaleFont, moderateScale } from "theme/scale"
import { useTheme } from "hooks/useTheme"
import { colors } from "assets/colors/colors"

const getStyles = () => {
    const theme = useTheme()

    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: theme.backgroundColor,
        },

        // HEADER
        header: {
            position: "absolute",
            flexDirection: "row",
            paddingVertical: 10,
            paddingHorizontal: 13,
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
        },
        backIcon: {
            fontSize: scaleFont(22),
            color: theme.textColor,
            flex: 1
        },
        shareIcon: {
            paddingRight: 15,
            fontSize: scaleFont(22),
            color: theme.textColor
        },
        favoriteIcon: {
            fontSize: scaleFont(22),
            color: theme.textColor
        },
        favoriteIconActive: {
            fontSize: scaleFont(22),
            color: colors.text.primary,
        },

        // IMAGE
        productImage: {
            width: "100%",
            height: verticalScale(300),
        },
        imageCounter: {
            position: "absolute",
            bottom: 10,
            right: 10,
            backgroundColor: "rgba(0,0,0,0.5)",
            color: theme.backgroundColor,
            paddingHorizontal: horizontalScale(9),
            paddingVertical: verticalScale(3),
            borderRadius: moderateScale(10),
            fontSize: scaleFont(12),
        },
        imageFooter: {
            backgroundColor: "rgba(0,0,0,0.6)",
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
        },
        imageFooterText: {
            color: "#fff",
            fontSize: scaleFont(16),
        },

        // USER INFO
        userInfoContainer: {
            flexDirection: "row",
            paddingHorizontal: horizontalScale(10),
            paddingVertical: verticalScale(17),
            borderBottomWidth: 1,
            borderBottomColor: colors.border.grey,
            alignItems: "center",
        },
        avatar: {
            width: horizontalScale(50),
            height: verticalScale(50),
            borderRadius: moderateScale(30),
        },
        userDetails: {
            flex: 1,
            alignItems: "flex-start",
            marginLeft: 10,
        },
        usernameText: {
            fontSize: scaleFont(15),
            fontWeight: "600",
        },
        starFilled: {
            color: "yellow",
            fontSize: 16,
        },
        starEmpty: {
            color: theme.backgroundColor,
            fontSize: 16,
        },
        askSellerButton: {
            borderWidth: 1,
            paddingHorizontal: 15,
            justifyContent: "center",
            borderRadius: 6,
            paddingVertical: 5,
            borderColor: colors.text.primary,
        },
        askSellerButtonText: {
            fontSize: scaleFont(15),
            color: colors.text.primary,
            fontWeight: "500",
        },

        // PRODUCT INFO
        productInfoContainer: {
            flexDirection: "row",
            paddingHorizontal: horizontalScale(10),
            paddingVertical: verticalScale(10),
            justifyContent: "space-between",
        },
        productDetails: {
            width: "85%",
        },
        productTitle: {
            fontWeight: "700",
            fontSize: scaleFont(16),
        },
        productInfoText: {
            marginTop: 5,
            fontSize: scaleFont(14),
            color: theme.textColor,
        },
        likeWrapper: {
            alignItems: "center",
        },
        likeCount: {
            fontSize: scaleFont(13),
            color: theme.textColor,
        },
    })
}
export default getStyles
