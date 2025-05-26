import { Text, Image } from 'react-native'
import React, { FC } from 'react'
import images from 'assets/index'
import getStyles from './emptyListComponent.style'

interface IEmptyListComponentProps {
    text: string
}

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