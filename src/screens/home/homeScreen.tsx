import { ScrollView, View } from 'react-native'
import React from 'react'
import { AdvertSection, HeaderSection, ProductListSection } from './components'

/**
 * HomeScreen: Uygulamanın ana sayfasını temsil eden, ürün keşfi, duyurular ve listeleme işlevlerini birleştiren ekran bileşenidir.
 *
 * En üstte, arama ve navigasyon işlevlerini içeren bir başlık bölümü (HeaderSection) bulunur.
 * Ekranın ana içeriği (duyurular ve ürün listeleri), dikey olarak kaydırılabilir (ScrollView) bir yapıda sunulur.
 * İçerik bölümleri:
 * 1. AdvertSection: Kullanıcılara bilgi görsellerini, tanıtımları veya duyuruları gösteren alandır.
 * 2. ProductListSection: Çeşitli başlıklar altında (örneğin, "Öne Çıkanlar", "Yeni Eklenenler") ürünleri listeleyen ve görüntüleyen bölümdür.
 * Bu ekran, kullanıcıya uygulama içindeki ana içeriğe erişimi ve hızlı arama yapma imkanı sağlar.
 */
export const HomeScreen = () => {
    return (
        <View>
            <HeaderSection />
            <ScrollView showsVerticalScrollIndicator={false}>
                <AdvertSection />
                <ProductListSection />
            </ScrollView>
        </View>
    )
}
