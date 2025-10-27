import { Image } from 'react-native'
import React from 'react'
import style from './profileImage.style'
import images from 'assets/index'

/**
 * ProfileImage: Uygulama genelinde (Profil Sayfası, Ayarlar, Yorumlar vb.) kullanıcının profil fotoğrafını standartlaştırılmış bir boyutta ve stilde gösteren temel bir bileşendir.
 *
 * Kullanıcının yüklediği fotoğrafı veya mevcut değilse bir varsayılan profil görselini (defaultProfileImage) gösterir.
 * Bu bileşen, sadece görselin render edilmesinden sorumludur ve fotoğrafı güncelleme gibi ek işlevler (ProfileImageSection gibi) başka bileşenler tarafından yönetilir.
 */
export const ProfileImage = () => {
    return (
        <Image
            source={images.profile.defaultProfileImage}
            style={style.profileImage}
        />
    )
}