import { Image } from 'react-native'
import React from 'react'
import style from './profileImage.style'
import images from 'assets/index'

// `ProfileImage` componenti, , kullanıcının belirlediği profil fotoğrafını gösteren bir bileşendir.
export const ProfileImage = () => {
    return (
        <Image
            source={images.profile.defaultProfileImage}
            style={style.profileImage}
        />
    )
}