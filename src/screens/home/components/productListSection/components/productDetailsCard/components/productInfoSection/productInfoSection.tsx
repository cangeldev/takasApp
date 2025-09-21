import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { FC } from 'react'
import getStyles from './productInfoSection.style'
import { Icon } from 'components/commonComponents'

interface IProductInfoSection {
    toggleFavorite: () => void
    isFavorite: boolean
}

const productFeatures = [
    "Şişme Yatak",
    "Az kullanılmış",
    "Defosuz",
]
/*
  ProductInfoSection, ProductDetailsCard içindeki ürün bilgisini göstermek için kullanılan bileşendir.
*/
export const ProductInfoSection: FC<IProductInfoSection> = ({ isFavorite, toggleFavorite }) => {
    const styles = getStyles()

    return (
        <View style={styles.container}>
            <View style={styles.productHeaderRow}>
                <View style={styles.productInfoWrapper}>
                    <Text style={styles.productTitleText}>
                        Kamp Yatağı Katlanabilir ve Taşınabilir
                    </Text>

                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {productFeatures.map((feature, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.featureTag}
                            >
                                <Text style={styles.featureTagText}>{feature}</Text>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
                <View style={styles.favoriteContainer}>
                    <Icon
                        onPress={toggleFavorite}
                        name={isFavorite ? 'heart' : 'heart-outline'}
                        type="Ionicons"
                        style={isFavorite ? styles.favoriteIconActive : styles.favoriteIconInactive}
                    />
                    <Text style={styles.favoriteCountText}>155</Text>
                </View>
            </View>

            {/* Açıklama */}
            <View style={styles.descriptionSection}>
                <Text style={styles.sectionTitleText}>Açıklama</Text>
                <Text style={styles.descriptionText} numberOfLines={4}>
                    KAMP YATAĞI katlanır günlük kullanım ve kamp gibi aktiviteler için uygundur. Hafif,
                    taşınabilir ve kolay kurulabilir. İçinde tamir kiti bulunur. Daha fazla detay ve kullanım
                    talimatı ürün açıklamasının tam metninde yer alır.
                </Text>
            </View>
        </View>
    )
}
