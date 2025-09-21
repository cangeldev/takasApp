import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React, { useState } from 'react'
import getStyles from './imageSection.style'
import ImageView from 'react-native-image-viewing'

/*
  ImageSection, Bu bileşen ProductDetailsCard yapısındaki ürünün resimlerinin görüntülenebilmesi için kullanılan bileşendir.
*/
export const ImageSection = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)
    const [isImageViewerVisible, setIsImageViewerVisible] = useState(false)
    const styles = getStyles()

    const productImages = [
        { uri: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4' },
        { uri: 'https://images.unsplash.com/photo-1573273787173-0eb81a833b34' },
        { uri: 'https://images.unsplash.com/photo-1569569970363-df7b6160d111' },
    ]

    const renderImageFooter = () => (
        <View style={styles.imageFooter}>
            <Text style={styles.imageFooterText}>
                {selectedImageIndex + 1} / {productImages.length}
            </Text>
        </View>
    )

    return (
        <View>
            <TouchableWithoutFeedback onPress={() => setIsImageViewerVisible(true)}>
                <View>
                    <Image
                        source={{ uri: productImages[selectedImageIndex].uri }}
                        style={styles.productImage}
                        resizeMode="stretch"
                    />
                    <Text style={styles.imageCounter}>
                        {selectedImageIndex + 1}/{productImages.length}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
            <ImageView
                images={productImages}
                imageIndex={selectedImageIndex}
                visible={isImageViewerVisible}
                onRequestClose={() => setIsImageViewerVisible(false)}
                onImageIndexChange={setSelectedImageIndex}
                FooterComponent={renderImageFooter}
            />
        </View>
    )
}