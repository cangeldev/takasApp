import React from 'react'
import { View } from 'react-native'
import getStyles from './savedAddressesSection.style'
import { AddressCard } from './components/addressCard/addressCard'

/**
 * SavedAddressesSection: Kullanıcının daha önce kaydettiği tüm adresleri (teslimat veya fatura adresleri) listeleyen ve yönettiği bölümdür.
 *
 * Her bir kayıtlı adresi göstermek için AddressCard bileşenini kullanır.
 * Bu bölüm, adreslerin düzenlenmesi, silinmesi veya yeni bir adres eklenmesi gibi işlemleri kapsayan bir arayüzün parçasıdır.
 * Şu an için örnek bir 'Ev Adresim' kartı statik verilerle gösterilmektedir.
 */
export const SavedAddressesSection = () => {
    const styles = getStyles()

    return (
        <View style={styles.container}>
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
export default SavedAddressesSection
