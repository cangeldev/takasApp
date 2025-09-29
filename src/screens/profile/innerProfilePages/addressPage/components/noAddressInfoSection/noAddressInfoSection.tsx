import React from 'react'
import { View, Text, Image } from 'react-native'
import { useTranslation } from 'react-i18next'
import images from 'assets/index'
import getStyles from './noAddressInfoSection.style'
import { CustomButton } from 'components/commonComponents'

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
            <CustomButton title="addNewAddress" variant="primary" style={styles.button} textStyle={styles.buttonText} onPress={onPress} />
        </View>
    )
}
export default NoAddressInfoSection
