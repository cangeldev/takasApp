import React, { useState } from 'react'
import { View } from 'react-native'
import getStyles from './addresPage.style'
import { Header } from 'components/commonComponents'
import { NoAddressInfoSection, SavedAddressesSection } from './components'
import { AddAddressModal } from './components/addAddressModal/addAddressModal'

/*
  AddressPage, kullanıcının adres bilgisini ekleyebildiği, adresleri arasında seçim yapabilidiği veya buluşmak istediği konumu belirleyebildiği sayfadır. 
  Bu ekran, kullanıcıya adres bilgilerini ve harita üzerinden buluşma lokasyonunu seçebilmesine olanak tanır.
*/
export const AddressPage = () => {

    const styles = getStyles()
    const [isModalVisible, setIsModalVisible] = useState(false)
    const handleModalClose = () => setIsModalVisible(false)

    return (
        <View style={styles.container}>
            <Header title={"addressAndLocationInformation"} />
            <NoAddressInfoSection onPress={() => setIsModalVisible(true)} />
            <AddAddressModal onCloseModal={handleModalClose} isModalVisible={isModalVisible} />
            <SavedAddressesSection />
        </View>
    )
}
export default AddressPage