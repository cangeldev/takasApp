import React, { FC, useState } from 'react'
import { View, Text, TouchableOpacity, Modal } from 'react-native'
import { AddressPageTextInput } from 'components/addressPageTextInput/addressPageTextInput'
import { Icon } from 'components/icon/icon'
import getStyles from './style'

interface IAddAddressModal {
    visibleModal: boolean
    closeModal: () => void
}

/*
  AddAddressModal, bu yapı bir açılır penceredir.
  Bu bileşen, kullanıcıya adres bilgilerini ve kendi bilgilerini girmesi için açılan penceredir alınan bilgiler önce redux Toolkit'e kaydedilir daha sonrasında ilerleyen süreçte kullanılmak üzere veri tabanına aktarılır.
*/
export const AddAddressModal: FC<IAddAddressModal> = ({ closeModal, visibleModal }) => {

    const styles = getStyles()
    const [form, setForm] = useState({
        identifier: '', firstName: '', lastName: '', company: '',
        street: '', phone: '', city: '', state: '', zip: ''
    })

    const handleChange = (key: keyof typeof form, value: string) => {
        setForm(prev => ({ ...prev, [key]: value }))
        console.log(form)
    }

    return (
        <Modal
            statusBarTranslucent
            visible={visibleModal}
            onRequestClose={closeModal}>
            <View style={styles.container}>
                <Icon onPress={closeModal} name="closecircleo" type="AntDesign" style={styles.closeIcon} />
                <AddressPageTextInput label='Address Identifier *' value={form.identifier} onInputChange={text => handleChange('identifier', text)} />
                <View style={styles.row}>
                    <View style={styles.halfInputContainer}>
                        <AddressPageTextInput label='First name *' value={form.firstName} onInputChange={text => handleChange('firstName', text)} />
                    </View>
                    <View style={styles.halfInputContainer}>
                        <AddressPageTextInput label='Last name *' value={form.lastName} onInputChange={text => handleChange('lastName', text)} />
                    </View>
                </View>
                <AddressPageTextInput label='Phone *' value={form.phone} onInputChange={text => handleChange('phone', text)} />
                <AddressPageTextInput label='Company *' value={form.company} onInputChange={text => handleChange('company', text)} />
                <AddressPageTextInput label='State *' value={form.state} onInputChange={text => handleChange('state', text)} />
                <AddressPageTextInput label='Street address *' value={form.street} onInputChange={text => handleChange('street', text)} />
                <AddressPageTextInput label='Town / City *' value={form.city} onInputChange={text => handleChange('city', text)} />
                <AddressPageTextInput label='Postcode / ZIP *' value={form.zip} onInputChange={text => handleChange('zip', text)} />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Save address</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}
