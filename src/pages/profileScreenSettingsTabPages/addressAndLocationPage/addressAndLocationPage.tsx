import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import getStyles from './style'
import { HeaderSection, Icon } from 'components/index'
import { useTranslation } from 'react-i18next'
import { address } from 'assets/index'
import { AddAddressModal } from 'components/modals'
import { useNavigation } from '@react-navigation/native'
import { AddressCard } from 'components/cards'

/*
  AddressAndLocationPage, kullanıcının adres bilgisini ekleyebildiği, adresleri arasında seçim yapabilidiği veya buluşmak istediği konumu belirleyebildiği sayfadır. 
  Bu ekran, kullanıcıya adres bilgilerini ve harita üzerinden buluşma lokasyonunu seçebilmesine olanak tanır.
*/
export const AddressAndLocationPage = () => {

    const styles = getStyles()
    const [isModalVisible, setIsModalVisible] = useState(false)
    const handleModalClose = () => setIsModalVisible(false)
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            {/* <HeaderSection headerTitle={"addressAndLocationInformation"} />
            <InfoSection onPress={() => setIsModalVisible(true)} /> */}
            <AddAddressModal onCloseModal={handleModalClose} isModalVisible={isModalVisible} />
            <AddressListSection navigation={navigation} />
        </View>
    )
}

const InfoSection = ({ onPress }: { onPress: () => void }) => {

    const styles = getStyles()
    const { t } = useTranslation()

    return (
        <View style={styles.infoView}>
            <Image source={address} style={styles.infoImage} />
            <Text style={styles.infoText}>{t("NoSavedAddressInformationFound")}</Text>
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <Text style={styles.buttonText}>{t("addNewAddress")}</Text>
            </TouchableOpacity>
        </View>
    )
}

const AddressListSection = ({ navigation }: { navigation: any }) => {

    const styles = getStyles()
    const { t } = useTranslation()

    return (
        <View style={styles.addressListSectionContainer}>
            <View style={styles.addressListSectionHeader}>
                <Icon onPress={navigation.goBack} name="arrow-back" type="Ionicons" style={styles.backIcon} />
                <Text style={styles.headerTitle}>{t("addressInformation")}</Text>
                <Text style={styles.addAddress}>{t("addAddress")}</Text>
            </View>
            <AddressCard
                title="Ev Adresim"
                addressDetails={[
                    "Can GEL",
                    "0535 237 71 92",
                    "Merkez, Düzce",
                    "Kirazlı Köyü Sapağı, Halkmar Market Üstü No:2",
                ]}
            />
        </View>
    )
}
export default AddressAndLocationPage