import React, { FC, useState, useCallback } from 'react'
import { View, Text, TouchableOpacity, Modal, ScrollView, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { AddressPageTextInput } from 'components/addressPageTextInput/addressPageTextInput'
import { Icon } from 'components/icon/icon'
import getStyles from './style'

interface IAddAddressModal {
    isModalVisible: boolean
    onCloseModal: () => void
}

/*
  AddAddressModal, bu yapı bir açılır penceredir.
  Bu bileşen, kullanıcıya adres bilgilerini ve kendi bilgilerini girmesi için açılan penceredir alınan bilgiler önce redux Toolkit'e kaydedilir daha sonrasında ilerleyen süreçte kullanılmak üzere veri tabanına aktarılır.
*/
export const AddAddressModal: FC<IAddAddressModal> = ({ onCloseModal, isModalVisible }) => {

    const styles = getStyles()
    const [form, setForm] = useState({
        identifier: '', firstName: '', lastName: '', company: '',
        street: '', phone: '', city: '', state: '', zip: ''
    })

    const handleChange = useCallback((key: keyof typeof form, value: string) => {
        setForm(prev => ({ ...prev, [key]: value }))
    }, [])

    const handleSave = () => {
        console.log('Saved Address:', form)
    }

    const renderInput = (label: string, key: keyof typeof form) => (
        <AddressPageTextInput label={`${label} *`} value={form[key]} onInputChange={text => handleChange(key, text)} />
    )

    return (
        <Modal statusBarTranslucent visible={isModalVisible} onRequestClose={onCloseModal}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} >
                    <ScrollView keyboardShouldPersistTaps="handled">
                        <View style={styles.container}>
                            <Icon onPress={onCloseModal} name="closecircleo" type="AntDesign" style={styles.closeIcon} />
                            {renderInput('Address Identifier', 'identifier')}
                            <View style={styles.row}>
                                <View style={styles.halfInputContainer}>{renderInput('First name', 'firstName')}</View>
                                <View style={styles.halfInputContainer}>{renderInput('Last name', 'lastName')}</View>
                            </View>
                            {renderInput('Phone', 'phone')}
                            {renderInput('Company', 'company')}
                            {renderInput('State', 'state')}
                            {renderInput('Street address', 'street')}
                            {renderInput('Town / City', 'city')}
                            {renderInput('Postcode / ZIP', 'zip')}
                            <TouchableOpacity style={styles.button} onPress={handleSave}>
                                <Text style={styles.buttonText}>Save address</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </Modal>
    )
}