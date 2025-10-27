import { View, Text } from 'react-native'
import React, { FC } from 'react'
import getStyles from './addressCard.style'
import { Icon } from 'components/commonComponents'

interface IAddressCardProps {
    title?: string
    addressDetails: string[]
}

/**
 * AddressCard: Kayıtlı Adresler Bölümü (SavedAddressesSection) içinde, kullanıcının kaydettiği tek bir adresin tüm detaylarını düzenli bir formatta gösteren kart bileşenidir.
 *
 * Adres tipini belirten bir başlık (title) ve adresin bileşenlerini (ad, soyad, telefon, sokak, şehir vb. içeren addressDetails dizisi) içerir.
 * Kartın solunda adres türünü simgeleyen bir konum ikonu (locationIcon) ve sağında, adresi düzenleme aksiyonunu tetikleyen bir düzenleme ikonu (editIcon) bulunur.
 * Bu yapı, kullanıcının kayıtlı adreslerine hızlıca göz atmasını ve gerektiğinde bu adresleri düzenlemesini sağlar.
 */
export const AddressCard: FC<IAddressCardProps> = ({ title, addressDetails }) => {
    const styles = getStyles()

    return (
        <View style={styles.cardContainer}>
            <Icon name="location" type="Entypo" style={styles.locationIcon} />
            <View style={styles.addressDetails}>
                <Text style={styles.cardTitle}>{title}</Text>
                {addressDetails.map((text, index) => (
                    <Text key={index} style={styles.addressText}>{text}</Text>
                ))}
            </View>
            <Icon name="pencil" type="MaterialCommunityIcons" style={styles.editIcon} />
        </View>
    )
}