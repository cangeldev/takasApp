import { StyleSheet, useWindowDimensions } from 'react-native'
import colors from 'assets/colors/colors'
import { useTheme } from 'hooks/useTheme'

const shadowStyle = {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.2,
  shadowRadius: 1.41,
  elevation: 3
}

const getStyles = () => {
  
  const theme = useTheme()
  const { width } = useWindowDimensions()
  const scaleFactor = width / 375

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.backgroundColor
    },
    headerBackground: {
      height: 180 * scaleFactor,
      justifyContent: 'flex-end'
    },
    profileSection: {
      position: 'absolute',
      bottom: -40 * scaleFactor,
      left: 15 * scaleFactor,
      flexDirection: 'row'
    },
    profileImageContainer: {
      width: 80 * scaleFactor,
      height: 80 * scaleFactor,
      padding: 3 * scaleFactor,
      backgroundColor: theme.backgroundColor,
      borderRadius: 40 * scaleFactor,
      ...shadowStyle
    },
    cameraIcon: {
      fontSize: scaleFactor * 14,
      color: colors.textInactiveColor,
      backgroundColor: theme.backgroundColor,
      position: 'absolute',
      borderRadius: 25 * scaleFactor,
      padding: 4 * scaleFactor,
      elevation: 1,
      bottom: 0 * scaleFactor,
      right: 5 * scaleFactor
    },
    memberInfoIcon: {
      fontSize: scaleFactor * 12,
      color: colors.bottomTabIconInactiveColor
    },
    descriptionContainer: {
      backgroundColor: colors.lightGrey,
      borderRadius: 5 * scaleFactor,
      marginHorizontal: 15 * scaleFactor,
      padding: 10 * scaleFactor,
      ...shadowStyle
    },
    descriptionText: {
      color: '#686868',
      marginBottom: 10 * scaleFactor
    },
    memberInfoText: {
      fontSize: scaleFactor * 11
    },
    inputSection: {
      paddingHorizontal: scaleFactor * 15,
      marginTop: 80 * scaleFactor,
    },
    memberInfoRow: {
      alignSelf: 'flex-end',
      marginLeft: scaleFactor * 10
    },
    backIcon: {
      fontSize: scaleFactor * 28,
      color: theme.backgroundColor,
      flex: 1,
      marginTop: 45 * scaleFactor,
      marginHorizontal: 15 * scaleFactor
    }
  })
}
export default getStyles