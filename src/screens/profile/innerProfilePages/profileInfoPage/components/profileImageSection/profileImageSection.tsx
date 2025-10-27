import React from 'react'
import { View } from 'react-native'
import { Icon, ProfileImage } from 'components/commonComponents'
import getStyles from './profileImageSection.style'

/**
 * ProfileImageSection: Kullanıcının profil sayfasında yer alan ve mevcut profil fotoğrafını gösteren, aynı zamanda fotoğrafı güncelleme işlevselliği sunan bölümdür.
 *
 * Ana fotoğrafı göstermek için ProfileImage alt bileşenini kullanır.
 * Fotoğrafın üzerine yerleştirilmiş bir kamera simgesi (camera-plus-outline) içerir; bu simge,
 * kullanıcıya dokunarak yeni bir profil fotoğrafı seçme veya çekme eylemini başlatma olanağı sağlar.
 */
export const ProfileImageSection = () => {
    const styles = getStyles()

    return (
        <View style={styles.profileImageContainer}>
            <ProfileImage />
            <Icon name="camera-plus-outline" type="MaterialCommunityIcons" style={styles.cameraIcon} />
        </View>
    )
}
export default ProfileImageSection
