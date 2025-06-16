import { StyleSheet } from "react-native"
import { horizontalScale, verticalScale, scaleFont, moderateScale } from "theme/scale"
import { useTheme } from "hooks/useTheme"
import { colors } from "assets/colors/colors"

const getStyles = () => {

  const theme = useTheme()

  return StyleSheet.create({
    container: {
      width: '50%',
      backgroundColor: theme.backgroundColor,
      borderWidth: 0.8,
      borderColor: colors.border.lightDivider,
      paddingVertical: verticalScale(10),
      overflow: 'hidden'
    },
    badgeIcon: {
      position: 'absolute',
      top: verticalScale(-5),
      left: horizontalScale(2),
      width: horizontalScale(60),
      height: verticalScale(60)
    },
    favoriteIcon: {
      fontSize: scaleFont(19),
      color: colors.base.white
    },
    favoriteIconSelected: {
      fontSize: scaleFont(19),
      color: colors.text.primary
    },
    imageWrapper: {
      alignItems: "center",
      height: verticalScale(220)
    },
    productImage: {
      width: '93%',
      height: '100%',
      borderRadius: moderateScale(7)
    },
    likeWrapper: {
      position: 'absolute',
      top: verticalScale(8),
      right: horizontalScale(12),
      alignItems: "center"
    },
    likeCount: {
      fontSize: scaleFont(13),
      color: colors.base.white
    },
    productTitle: {
      fontSize: scaleFont(14),
      color: theme.textColor,
      fontWeight: '500',
      marginHorizontal: horizontalScale(8),
      marginVertical: verticalScale(4),
      marginBottom: verticalScale(10)
    },
    priceContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: horizontalScale(8),
      marginBottom: verticalScale(8)
    },
    priceView: {
      flexDirection: "row"
    },
    oldPrice: {
      fontSize: scaleFont(14),
      textDecorationLine: 'line-through',
      color: '#888',
      marginRight: horizontalScale(6)
    },
    newPrice: {
      fontSize: scaleFont(14),
      color: 'green',
      fontWeight: 'bold'
    }
  })
}
export default getStyles
