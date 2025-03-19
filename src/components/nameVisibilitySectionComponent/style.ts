import { StyleSheet, useWindowDimensions } from "react-native"

const getStyles = () => {

  const { width } = useWindowDimensions()
  const scaleFactor = width / 375
  
  return StyleSheet.create({
    boxStyle: {
      backgroundColor: "transparent",
      marginVertical: 10 * scaleFactor
    },
    textStyle: {
      fontWeight: "600",
      fontSize: scaleFactor * 14,
      color: "#505050"
    }
  })
}
export default getStyles