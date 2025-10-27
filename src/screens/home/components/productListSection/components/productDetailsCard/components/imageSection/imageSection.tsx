import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React, { useState } from 'react'
import getStyles from './imageSection.style'
import ImageView from 'react-native-image-viewing'
import { Icon } from 'components/commonComponents'

/**
 * ImageSection: Ürün Detay sayfasında (ProductDetailsCard) ürün görsellerini görüntülemekten ve görsel galeri (Image Viewer) işlevini sunmaktan sorumlu bileşendir.
 *
 * Ürünün ana görselini gösterir ve dokunulduğunda tam ekran bir görsel görüntüleyici (ImageViewer) açar.
 * Görseller arasında geçiş yapma ve aktif görsel sayısını gösterme özelliklerini içerir.
 * Ayrıca, "Kargo Bedava" veya "Fırsat Ürünü" gibi ürüne ait durum etiketlerini (tags) görselin üzerinde gösterir.
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

    const tags = [
        { label: 'Kargo Bedava', icon: 'cube' },
        { label: 'Fırsat Ürünü', icon: 'pricetag' },
        // { label: 'Yakınındaki Ürün', icon: 'location-sharp'},
        // { label: 'Acil Takas/Satış', icon: 'flash'},
    ]

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
            <View style={styles.tagContainer}>
                {tags.map((tag, index) => (
                    <View key={index} style={[styles.tag]}>
                        <Icon name={tag.icon} type='Ionicons' style={styles.tagIcon} />
                        <Text style={styles.tagText}>{tag.label}</Text>
                    </View>
                ))}
            </View>
        </View>
    )
}