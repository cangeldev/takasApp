import { View, Image } from 'react-native'
import React, { useState } from 'react'
import getStyles from './userInfoSection.style'
import { AuthInput, Icon } from 'components/commonComponents'
import images from 'assets/index'

/**
 * UserInfoSection: Kullanıcının kayıt (sign-up) veya hesap detayları (AccountDetails) sırasında ad, soyad ve kullanıcı adı gibi temel kişisel bilgileri girdiği formu temsil eden bileşendir.
 *
 * Kullanıcıların bir profil resmi yüklemesine/seçmesine olanak tanıyan bir alan (imageView) içerir.
 * Temel metin girişleri (AuthInput) aracılığıyla kullanıcı adı (username), ad (name) ve soyadı (surname) bilgilerini toplar ve bu bilgileri component'in yerel state'inde yönetir.
 */
export const UserInfoSection = () => {
    const styles = getStyles()
    const [form, setForm] = useState({ "image": Image, username: "", name: "", surname: "" })

    return (
        <>
            <View style={styles.imageView}>
                <Image source={images.profile.defaultProfileImage} style={styles.image} resizeMode='stretch' />
                <Icon name="camera" type="Entypo" style={styles.imageAddIcon} />
            </View>
            <AuthInput placeholder="username" onInputChange={(text) => setForm({ ...form, username: text })} />
            <AuthInput placeholder="name" onInputChange={(text) => setForm({ ...form, name: text })} />
            <AuthInput placeholder="surname" onInputChange={(text) => setForm({ ...form, surname: text })} />
        </>
    )
}