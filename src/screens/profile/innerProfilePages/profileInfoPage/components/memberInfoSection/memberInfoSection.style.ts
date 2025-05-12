import { StyleSheet } from 'react-native'
import colors from 'assets/colors/colors'
import { useTheme } from 'hooks/useTheme'
import { horizontalScale, scaleFont } from "theme/scale"

const getStyles = () => {
  const theme = useTheme()

  return StyleSheet.create({
    memberInfoIcon: {
      fontSize: scaleFont(12),
      color: colors.disabledText
    },
    memberInfoText: {
      fontSize: scaleFont(11),
      color: theme.textColor
    },
    memberInfoRow: {
      alignSelf: 'flex-end',
      marginLeft: horizontalScale(10)
    }
  })
}
export default getStyles
