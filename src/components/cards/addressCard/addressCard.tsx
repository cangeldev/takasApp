import { View, Text } from 'react-native'
import React, { FC } from 'react'
import getStyles from './style'
import { Icon } from 'components/icon/icon'

interface IAddressCard {
    title?: string;
    addressDetails: string[]
}

/*  
 AddressCard, bu card yapısı kullanıcının  ayarladığı daha sonra kullanmak üzere kaydettiği adresleri görmesi için ve ulaşması için tasarlanan yapıdır. 
*/
export const AddressCard: FC<IAddressCard> = ({ title, addressDetails }) => {

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
