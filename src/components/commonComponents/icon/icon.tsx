import React from 'react'
import { TextStyle } from 'react-native'
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
import { iconType } from 'utils/types'

/**
 * Icon: Uygulama genelinde kullanılan farklı simge kütüphanelerinden (AntDesign, Ionicons, MaterialIcons vb.) simgeleri tek bir arayüzde birleştiren merkezi bir bileşendir.
 *
 * Simge türü (type) ve adı (name) prop'larına göre uygun React Native Vector Icons bileşenini dinamik olarak seçer ve render eder.
 * Bu yapı, uygulama genelinde simge yönetimini ve kullanımını standartlaştırarak kod tekrarını azaltır.
 * Ayrıca performans için React.memo kullanılarak gereksiz yeniden render edilmelerin önüne geçilir.
 */

interface IconProps {
    type: iconType
    name: string
    style?: TextStyle | TextStyle[] | undefined
    onPress?: () => void
    disabled?: boolean
}

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

export const Icon: React.FC<IconProps> = React.memo(({ type, name, style, onPress, disabled }) => {
    const IconComponent = React.useMemo(() => { return iconMap[type] || IconA }, [type])

    return <IconComponent name={name} style={style} onPress={onPress} disabled={disabled} />
})
