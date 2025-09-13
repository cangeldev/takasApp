import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React, { useState } from 'react'
import getStyles from './productDetailsCard.style'
import { Icon, SearchBar } from 'components/commonComponents'
import { useNavigation } from '@react-navigation/native'
import ImageView from 'react-native-image-viewing'

/*
  ProductDetailsCard, Bu kart yapısı ürünlerin görüntülenmesi ve detay bilgilere ulaşılabilmesi için kullanılan bileşendir.  
  Bu ekran, kullanıcıya ürünlerin resimlerini, fiyatını, ürün bilgisini gibi bilgileri gösteririrken istediğimiz ürünün detayına ulaşmamıza olanak tanır.   
*/
export const ProductDetailsCard = () => {
    const styles = getStyles()
    const navigation = useNavigation()
    const [isFavorite, setIsFavorite] = useState(false)
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)
    const [isImageViewerVisible, setIsImageViewerVisible] = useState(false)

    const toggleFavorite = () => setIsFavorite(prev => !prev)

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
        <View style={styles.container}>
            <View style={styles.header}>
                <Icon
                    name="arrow-back"
                    type="Ionicons"
                    style={styles.headerIcon}
                    onPress={() => navigation.goBack()}
                />
                <View style={styles.searchBarWrapper}>
                    <SearchBar />
                </View>
                <Icon name="share" type="Entypo" style={styles.headerIcon} />
                <Icon
                    onPress={toggleFavorite}
                    name={isFavorite ? 'heart' : 'heart-outline'}
                    type="Ionicons"
                    style={isFavorite ? styles.favoriteIconActive : styles.favoriteIcon}
                />
            </View>
            <TouchableWithoutFeedback onPress={() => setIsImageViewerVisible(true)}>
                <View style={styles.imageWrapper}>
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
    );
};
