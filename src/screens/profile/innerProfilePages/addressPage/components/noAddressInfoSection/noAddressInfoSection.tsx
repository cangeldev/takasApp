import React from 'react'
import { View, Text, Image } from 'react-native'
import { useTranslation } from 'react-i18next'
import images from 'assets/index'
import getStyles from './noAddressInfoSection.style'
import { CustomButton } from 'components/commonComponents'

/**
 * NoAddressInfoSection: Kullanıcının sistemde kayıtlı hiçbir adresi bulunmadığında Adres ve Konum (AddressAndLocation) sayfasında gösterilen bilgilendirme ve yönlendirme bileşenidir.
 *
 * Durumu açıklayan bir görsel (Image), çeviri destekli bir bilgilendirme metni (NoSavedAddressInformationFound) ve kullanıcıyı yeni bir adres ekleme akışına (onPress prop'u aracılığıyla modal veya sayfa açılması) yönlendiren bir ana buton (CustomButton) içerir.
 * Bu kart, kullanıcıyı gerekli bilgileri girmeye teşvik eder.
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
