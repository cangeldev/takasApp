import { View, Text, Modal, Image, Alert } from 'react-native'
import React, { FC, useState } from 'react'
import { ProfileInfoPageTxtInput } from '../profileInfoPageTxtInput/profileInfoPageTxtInput'
import { useTranslation } from 'react-i18next'
import getStyles from './changePasswordModal.style'
import { CustomButton, Icon } from 'components/commonComponents'
import images from 'assets/index'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useAppNavigation } from 'hooks/useAppNavigation'
import { changePassword } from 'api/authService'

interface IChangePasswordModalProps {
    isModalVisible: boolean
    onCloseModal: () => void
}

/**
 * ChangePasswordModal: Kullanıcının şifresini güncellemesini sağlayan modaldır.
 *
 * Gerekli tüm şifre bileşenlerini (eski şifre, yeni şifre, yeni şifreyi onaylama vb.) almak için 'ProfileInfoPageTxtInput' bileşenlerini kullanır.
 * Formun geçerliliğini kontrol eden (validateForm) ve başarılı olması durumunda verileri kaydetme (handleSave) aksiyonunu tetikleyen işlevselliğe sahiptir.
 * Kapatma (close) ikonu ve modal dışına dokunma (TouchableWithoutFeedback) ile klavyeyi gizleme özelliği içerir.
 * şifre kaydedildiğinde, verilerin veritabanına aktarılması hedeflenir ve kullanıcı yeniden giriş yapması için welcome sayfasına yönlendirilir.
 */
export const ChangePasswordModal: FC<IChangePasswordModalProps> = ({ isModalVisible, onCloseModal }) => {

    const { t } = useTranslation()
    const styles = getStyles()

    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState<string | null>(null)
    const navigation = useAppNavigation()

    const showError = (message: string) => {
        setErrorMessage(message)
        setTimeout(() => {
            setErrorMessage(null)
        }, 2000)
    }

    const validate = () => {
        if (!currentPassword || !newPassword || !confirmPassword) {
            showError(t('passwordErrorEmpty'))
            return false;
        }

        if (currentPassword == newPassword) {
            showError(t('passwordErrorSame'))
            return false;
        }
        if (newPassword.length < 8) {
            showError(t("passwordErrorRule"))
            return false;
        }

        if (newPassword !== confirmPassword) {
            showError(t('passwordError'))
            return false;
        }

        return true;
    };
    const handleChangePassword = async () => {
        const errorKey = validate();
        if (!errorKey) return;

        try {
            await changePassword(currentPassword, newPassword);

            Alert.alert(
                t("success"),
                t("passwordChangedRelogin")
            );

            await AsyncStorage.removeItem("userToken");

            onCloseModal();
            navigation.reset({
                index: 0,
                routes: [{ name: "Welcome" }],
            });

        } catch (error: any) {
            Alert.alert(
                t("error"),
                error?.response?.data?.message ||
                error?.message ||
                t("unknownError")
            );
        }
    };
    return (
        <Modal animationType="slide" statusBarTranslucent visible={isModalVisible} onRequestClose={onCloseModal}>
            <View style={styles.container}>
                <Icon
                    name="arrow-back"
                    type="Ionicons"
                    style={styles.backIcon}
                    onPress={onCloseModal}
                />
                <Text style={styles.title}>
                    {t("changePassword")}
                </Text>
                <Image source={images.profile.changePassword} style={styles.image} />
                <View style={{ minHeight: 90 }}>
                    {errorMessage && (
                        <View style={styles.errorContainer}>
                            <Icon
                                name="do-not-disturb-alt"
                                type="MaterialIcons"
                                style={styles.errorIcon}
                            />
                            <Text style={styles.errorText}>
                                {errorMessage}
                            </Text>
                        </View>
                    )}
                </View>
                <ProfileInfoPageTxtInput
                    title={t('currentPassword')}
                    placeHolder="******"
                    secureTextEntry={true}
                    onInputChange={setCurrentPassword}
                />
                <ProfileInfoPageTxtInput
                    title={t('newPassword')}
                    placeHolder="******"
                    secureTextEntry={true}
                    onInputChange={setNewPassword}
                />
                <ProfileInfoPageTxtInput
                    title={t('confirmNewPassword')}
                    placeHolder="******"
                    secureTextEntry={true}
                    onInputChange={setConfirmPassword}
                />
                <CustomButton
                    title={t("updatePassword")}
                    variant="primary"
                    style={styles.submitButton}
                    textStyle={styles.submitText}
                    onPress={handleChangePassword}
                />
            </View>
        </Modal >
    )
}