import { View, Text, Image } from 'react-native'
import React from 'react'
import { image } from 'assets/index'
import style from './style'

/**
 * `ProfileImage` componenti, , kullanıcının belirlediği profil fotoğrafını gösteren bir bileşendir.
 */
export const ProfileImage = () => {
    return (
        <Image source={image} style={style.profileImage} />
    )
}