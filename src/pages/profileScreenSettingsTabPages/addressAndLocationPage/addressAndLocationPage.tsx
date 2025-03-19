import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import getStyles from './style'
import { HeaderSection } from 'components/index'
import { useTranslation } from 'react-i18next'
import { address } from 'assets/index'
import { AddAddressModal } from 'components/modals'

/*
  AddressAndLocationPage, kullanıcının adres bilgisini ekleyebildiği, adresleri arasında seçim yapabilidiği veya buluşmak istediği konumu belirleyebildiği sayfadır. 
  Bu ekran, kullanıcıya adres bilgilerini ve harita üzerinden buluşma lokasyonunu seçebilmesine olanak tanır.
*/
export const AddressAndLocationPage = () => {

    const styles = getStyles()
    const { t } = useTranslation()
    const [isModalVisible, setIsModalVisible] = useState(false)
    const handleModalClose = () => setIsModalVisible(false)

    return (
        <View style={styles.container}>
            {/* <HeaderSection headerTitle={"addressAndLocationInformation"} />
            <InfoSection styles={styles} t={t} /> */}
            <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                <Text>
                    deneme
                </Text>
            </TouchableOpacity>
            <AddAddressModal closeModal={handleModalClose} visibleModal={isModalVisible} />

        </View>
    )
}

const InfoSection = ({ styles, t }: { styles: any, t: any }) => {
    return (
        <View style={styles.infoView}>
            <Image source={address} style={styles.infoImage} />
            <Text style={styles.infoText}>{t("NoSavedAddressInformationFound")}</Text>
            <TouchableOpacity onPress={() => console.log("first")} style={styles.button}>
                <Text style={styles.buttonText}>{t("addNewAddress")}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default AddressAndLocationPage