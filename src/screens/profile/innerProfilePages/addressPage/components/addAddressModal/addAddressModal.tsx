import React, { FC, useState, useCallback } from 'react'
import { View, Alert, Text, TouchableOpacity, Modal, ScrollView, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native'
import getStyles from './addAddressModal.style'
import { Icon } from 'components/commonComponents'
import { AddressModalTextInput } from './components/addressModalTextInput/addressModalTextInput'

interface IAddAddressModalProps {
    isModalVisible: boolean
    onCloseModal: () => void
}

/**
 * AddAddressModal: Kullanıcıdan adres bilgilerini almayı sağlayan bir modal bileşenidir.
 * Alınan bilgiler, önce Redux Toolkit'e kaydedilir ve daha sonra veritabanına aktarılır.
 */
export const AddAddressModal: FC<IAddAddressModalProps> = ({ onCloseModal, isModalVisible }) => {

    const styles = getStyles()

    const [form, setForm] = useState({
        identifier: '',
        firstName: '',
        lastName: '',
        company: '',
        street: '',
        phone: '',
        city: '',
        state: '',
        zip: ''
    })

    const handleChange = useCallback((key: keyof typeof form, value: string) => {
        setForm(prev => ({ ...prev, [key]: value }))
    }, [])

    // Form doğrulama işlemi: Tüm gerekli alanların dolu olup olmadığını kontrol eder
    const validateForm = () => {
        const { identifier, firstName, lastName, phone, street, city, state, zip } = form;
        if (!identifier || !firstName || !lastName || !phone || !street || !city || !state || !zip) {
            Alert.alert('Please fill in all required fields.');
            return false
        }
        return true
    }

    // Adres verilerini kaydeden fonksiyon ileride doldur burayı unutma nereye kaydediceksen
    const handleSave = () => {
        if (validateForm()) {
            console.log('Saved Address:', form);
            onCloseModal()
        }
    }

    const renderInput = (label: string, key: keyof typeof form) => (
        <AddressModalTextInput label={`${label} *`} value={form[key]} onInputChange={text => handleChange(key, text)} />
    )

    return (
        <Modal animationType="slide" statusBarTranslucent visible={isModalVisible} onRequestClose={onCloseModal}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <KeyboardAvoidingView >
                    <ScrollView keyboardShouldPersistTaps="handled">
                        <View style={styles.container}>
                            <Icon onPress={onCloseModal} name="closecircleo" type="AntDesign" style={styles.closeIcon} />
                            {renderInput('Address Identifier', 'identifier')}
                            <View style={styles.row}>
                                <View style={styles.halfWidthInput}>
                                    {renderInput('First name', 'firstName')}
                                </View>
                                <View style={styles.halfWidthInput}>
                                    {renderInput('Last name', 'lastName')}
                                </View>
                            </View>
                            {renderInput('Phone', 'phone')}
                            {renderInput('Company', 'company')}
                            {renderInput('State', 'state')}
                            {renderInput('Street address', 'street')}
                            {renderInput('Town / City', 'city')}
                            {renderInput('Postcode / ZIP', 'zip')}
                            <TouchableOpacity style={styles.button} onPress={handleSave}>
                                <Text style={styles.saveButtonText}>Save address</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </Modal>
    )
}