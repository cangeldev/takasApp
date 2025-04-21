import React from 'react'
import IconA from 'react-native-vector-icons/AntDesign'
import IconO from 'react-native-vector-icons/Octicons'
import IconI from 'react-native-vector-icons/Ionicons'
import IconF from 'react-native-vector-icons/Fontisto'
import IconFE from 'react-native-vector-icons/Feather'
import IconFA from 'react-native-vector-icons/FontAwesome'
import IconF5 from 'react-native-vector-icons/FontAwesome5'
import IconF6 from 'react-native-vector-icons/FontAwesome6'
import IconM from 'react-native-vector-icons/MaterialIcons'
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons'
import IconE from 'react-native-vector-icons/Entypo'
import IconEV from 'react-native-vector-icons/EvilIcons'

interface IconProps {
    type: 'AntDesign' | 'Octicons' | 'Ionicons' | 'Fontisto' | "Feather" | 'FontAwesome6' | "MaterialIcons" | "Entypo" | "EvilIcons" | "FontAwesome" | "MaterialCommunityIcons" | "FontAwesome5"
    name: string
    style?: any
    onPress?: () => void
    disabled?: boolean
}

/**
 * `Icon` bileşeni, belirtilen simge türüne göre uygun simge bileşenini render eder.
 * Bu, uygulamadaki farklı simgeleri tek bir bileşende yönetmeyi sağlar.
 */
export const Icon: React.FC<IconProps> = React.memo(({ type, name, style, onPress, disabled }) => {
    const IconComponent = React.useMemo(() => {
        const iconMap = {
            AntDesign: IconA,
            Octicons: IconO,
            Ionicons: IconI,
            Fontisto: IconF,
            FontAwesome5: IconF5,
            FontAwesome6: IconF6,
            FontAwesome: IconFA,
            MaterialIcons: IconM,
            MaterialCommunityIcons: IconMC,
            EvilIcons: IconEV,
            Feather: IconFE,
            Entypo: IconE
        }
        return iconMap[type] || IconA
    }, [type])

    return <IconComponent name={name} style={style} onPress={onPress} disabled={disabled} />
})
