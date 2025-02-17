import { View, Text } from 'react-native'
import React, { useCallback } from 'react'
import style from './style'
import { Icon } from 'components/index'
import { useNavigation } from '@react-navigation/native'

export const ApplicationLanguageAndThemePage = () => {

    const navigation = useNavigation<any>()
    const goBack = useCallback(() => navigation.goBack(), [navigation])

    return (
        <View style={style.container}>
            <View style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}>
                <Icon onPress={goBack} name="chevron-back-sharp" type="Ionicons" style={style.backIcon} />
                <Text style={{ fontSize: 20, fontWeight: "600" }}>Uygulama Dili ve Tema</Text>
            </View>
            <View>
                <Text>
                    Seçili Tema
                </Text>
            </View>
        </View>
    )
}