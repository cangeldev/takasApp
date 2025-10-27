import { Text, Image } from 'react-native'
import React, { FC } from 'react'
import images from 'assets/index'
import getStyles from './emptyListComponent.style'

interface IEmptyListComponentProps {
    text: string
}

/**
 * EmptyListComponent: Bir listenin (FlatList) veya veri kümesinin boş olduğu durumlarda kullanıcıya bilgi vermek ve ilgili eyleme yönlendirmek için kullanılan genel amaçlı bir yer tutucu (placeholder) bileşenidir.
 *
 * Durumu temsil eden sabit bir görsel (Image - images.other.addFriends) ve boş listenin nedenini veya kullanıcının ne yapması gerektiğini belirten dinamik bir metin (text prop'u) görüntüler.
 * Kullanıcının listeye veri eklemesi veya başka bir eylem gerçekleştirmesi için görsel bir ipucu sağlar.
 */
export const EmptyListComponent: FC<IEmptyListComponentProps> = ({ text }) => {
    const styles = getStyles()

    return (
        <>
            <Image source={images.other.addFriends} style={styles.noItemImage} />
            <Text style={styles.noListText}>
                {text}
            </Text>
        </>
    )
}