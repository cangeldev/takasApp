import React from 'react'
import { View } from 'react-native'
import getStyles from './savedAddressesSection.style'
import { AddressCard } from './components/addressCard/addressCard'

/*
  `SavedAddressesSection`, 
  kullanıcının kaydedilmiş adreslerini görüntülediği ve gerektiğinde yeni adres ekleyebileceği bölümü temsil eder.
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
