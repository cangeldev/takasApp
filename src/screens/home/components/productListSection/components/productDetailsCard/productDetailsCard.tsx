import { View, Text, TouchableWithoutFeedback, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import getStyles from './productDetailsCard.style'
import { Icon } from 'components/commonComponents'
import { useNavigation } from '@react-navigation/native'
import ImageView from 'react-native-image-viewing'
import Stars from 'react-native-stars'
import images from 'assets/index'
import { useTranslation } from 'react-i18next'
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
    const { t } = useTranslation()
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
            <View style={styles.header}>
                <Icon
                    name="arrow-back"
                    type="Ionicons"
                    style={styles.backIcon}
                    onPress={() => navigation.goBack()}
                />

                <Icon name="share" type="Entypo" style={styles.shareIcon} />
                <Icon
                    onPress={toggleFavorite}
                    name={isFavorite ? 'heart' : 'heart-outline'}
                    type="Ionicons"
                    style={isFavorite ? styles.favoriteIconActive : styles.favoriteIcon}
                />

            </View>
            <View style={styles.userInfoContainer}>
                <Image source={images.profile.defaultProfileImage} style={styles.avatar} />
                <View style={styles.userDetails}>
                    <Text style={styles.usernameText}>cangel81</Text>
                    <Stars
                        default={2.5}
                        count={5}
                        half={true}
                        fullStar={<Icon name={'star'} type='FontAwesome' style={styles.starFilled} />}
                        emptyStar={<Icon name={'star-o'} type='FontAwesome' style={[styles.starFilled, styles.starEmpty]} />}
                        halfStar={<Icon name={'star-half-empty'} type='FontAwesome' style={[styles.starFilled]} />}
                    />
                </View>
                <TouchableOpacity style={styles.askSellerButton}>
                    <Text style={styles.askSellerButtonText}>{t("askTheSeller")}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.productInfoContainer}>
                <View style={styles.productDetails}>
                    <Text numberOfLines={2} style={styles.productTitle}>
                        KAMP YATAĞI KATLANABİLİR VE TAŞINABİLİR
                    </Text>
                    <Text numberOfLines={3} style={styles.productInfoText}>
                        KAMP YATAĞI katlanır günlük kullanım ve kampsd gibi aktiviteler için uygundur.
                    </Text>
                </View>
                <View style={styles.likeWrapper}>
                    <Icon
                        onPress={toggleFavorite}
                        name={isFavorite ? 'heart' : 'heart-outline'}
                        type="Ionicons"
                        style={isFavorite ? styles.favoriteIconActive : styles.favoriteIcon}
                    />
                    <Text style={styles.likeCount}>155</Text>
                </View>
            </View>
        </View>
    );
};
