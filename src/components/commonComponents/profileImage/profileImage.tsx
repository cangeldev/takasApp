import { Image } from 'react-native'
import React from 'react'
import { defaultProfileImage } from 'assets/index'
import style from './profileImage.style'

/*
 `ProfileImage` componenti, , kullanıcının belirlediği profil fotoğrafını gösteren bir bileşendir.
 */
export const ProfileImage = () => {
    return (
        <Image
            source={defaultProfileImage}
            style={style.profileImage}
        />
    )
}