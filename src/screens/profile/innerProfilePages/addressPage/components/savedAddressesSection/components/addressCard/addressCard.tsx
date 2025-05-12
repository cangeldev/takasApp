import { View, Text } from 'react-native'
import React, { FC } from 'react'
import getStyles from './addressCard.style'
import { Icon } from 'components/commonComponents'

interface IAddressCardProps {
    title?: string
    addressDetails: string[]
}

/*
  `AddressCard`, kullanıcının kaydettiği adres bilgilerini görüntülemek için kullanılan bileşendir. 
  Bu kart yapısı, kullanıcının daha sonra kolayca erişebileceği adres bilgilerini düzenli bir şekilde sunar. 
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