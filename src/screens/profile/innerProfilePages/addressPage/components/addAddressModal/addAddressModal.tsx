import React, { FC, useState, useCallback } from 'react'
import { View, Alert, Modal, ScrollView, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native'
import getStyles from './addAddressModal.style'
import { CustomButton, Icon } from 'components/commonComponents'
import { AddressModalTextInput } from './components/addressModalTextInput/addressModalTextInput'
import { useTranslation } from 'react-i18next'

interface IAddAddressModalProps {
    isModalVisible: boolean
    onCloseModal: () => void
}

/**
 * AddAddressModal: Kullanıcının yeni bir teslimat veya fatura adresi eklemesini sağlayan, tam ekran kaydırılabilir (ScrollView) ve klavye etkileşimini yönetebilen (KeyboardAvoidingView) modaldır.
 *
 * Gerekli tüm adres bileşenlerini (ad, soyad, telefon, sokak, şehir vb.) almak için 'AddressModalTextInput' bileşenlerini kullanır.
 * Formun geçerliliğini kontrol eden (validateForm) ve başarılı olması durumunda verileri kaydetme (handleSave) aksiyonunu tetikleyen işlevselliğe sahiptir.
 * Kapatma (close) ikonu ve modal dışına dokunma (TouchableWithoutFeedback) ile klavyeyi gizleme özelliği içerir.
 * Adres kaydedildiğinde, verilerin Redux Toolkit'e ve ardından veritabanına aktarılması hedeflenir.
 */
export const AddAddressModal: FC<IAddAddressModalProps> = ({ onCloseModal, isModalVisible }) => {

    const styles = getStyles()
    const { t } = useTranslation()

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
                            <CustomButton title="saveAddress" variant="primary" style={styles.button} textStyle={styles.saveButtonText} onPress={handleSave} />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </Modal>
    )
}