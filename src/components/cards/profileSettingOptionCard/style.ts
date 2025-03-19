import { StyleSheet, useWindowDimensions } from "react-native"

const getStyles = () => {

    const { width } = useWindowDimensions()
    const scaleFactor = width / 375

    return StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: scaleFactor * 10
        },
        icon: {
            fontSize: scaleFactor * 18,
            color: '#323136'
        },
        rightIcon: {
            fontSize: scaleFactor * 15,
            color: '#323136'
        },
        title: {
            marginLeft: scaleFactor * 10,
            flex: 1,
            fontSize: scaleFactor * 15
        }
    })
}
export default getStyles