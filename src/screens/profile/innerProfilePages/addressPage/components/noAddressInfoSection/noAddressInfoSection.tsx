import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { useTranslation } from 'react-i18next'
import images from 'assets/index'
import getStyles from './noAddressInfoSection.style'

/*
  `NoAddressInfoSection`, kullanıcının kaydedilmiş adresi olmadığı durumlarda görünen bilgi kartıdır. 
  Bu kart, kullanıcıyı yeni bir adres eklemeye yönlendirir.
*/
export const NoAddressInfoSection = ({ onPress }: { onPress: () => void }) => {
    const styles = getStyles()
    const { t } = useTranslation()

    return (
        <View style={styles.infoView}>
            <Image source={images.other.address} style={styles.infoImage} />
            <Text style={styles.infoText}>{t("NoSavedAddressInformationFound")}</Text>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text style={styles.buttonText}>{t("addNewAddress")}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default NoAddressInfoSection
