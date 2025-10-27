import React, { useState } from 'react'
import { View } from 'react-native'
import getStyles from './addresPage.style'
import { NoAddressInfoSection, SavedAddressesSection } from './components'
import { AddAddressModal } from './components/addAddressModal/addAddressModal'

/**
 * AddressPage: Kullanıcının kayıtlı adreslerini yönettiği, yeni adres eklediği veya buluşma konumlarını belirlediği sayfadır.
 *
 * Kayıtlı adresleri gösteren SavedAddressesSection ve henüz adres yoksa bilgilendirme yapan NoAddressInfoSection bileşenlerini içerir.
 * Yeni adres ekleme veya harita üzerinden konum seçimi işlemleri için bir modal (AddAddressModal) kullanır.
 * Bu sayfa, kullanıcının teslimat/buluşma lokasyonlarını yönetmesine olanak tanır.
 */
export const AddressPage = () => {
    const styles = getStyles()
    const [isModalVisible, setIsModalVisible] = useState(false)
    const handleModalClose = () => setIsModalVisible(false)

    return (
        <View style={styles.container}>
            <NoAddressInfoSection onPress={() => setIsModalVisible(true)} />
            <AddAddressModal onCloseModal={handleModalClose} isModalVisible={isModalVisible} />
            <SavedAddressesSection />
        </View>
    )
}
export default AddressPage