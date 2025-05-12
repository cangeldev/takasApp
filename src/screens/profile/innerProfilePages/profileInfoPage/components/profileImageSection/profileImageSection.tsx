import React from 'react'
import { View } from 'react-native'
import { Icon, ProfileImage } from 'components/commonComponents'
import getStyles from './profileImageSection.style'

/*
  Bu bileşen, kullanıcının mevcut profil fotoğrafını gösterir ve fotoğraf üzerine eklenen kamera simgesi aracılığıyla,
  kullanıcıya profil fotoğrafını değiştirme imkanı sunar.
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
