import { View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import getStyles from './mapsSection.style'

/**
 * MapsSection: Ürünün ilan konumunu bir harita üzerinde görselleştiren ve kullanıcının bu konuma erişimi/yönlendirmeyi başlatmasını sağlayan bileşendir.
 *
 * MapView bileşenini kullanarak belirtilen koordinatları (Marker) harita üzerinde işaretler.
 * Kullanıcıya, ürünün yaklaşık bulunduğu yeri görme ve potansiyel olarak harita uygulamaları aracılığıyla rota oluşturma imkanı sunar.
 */
export const MapsSection = () => {
    const styles = getStyles()

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 41.0082,
                    longitude: 28.9784,
                    latitudeDelta: 0.05,
                    longitudeDelta: 0.05,
                }}>
                <Marker
                    coordinate={{ latitude: 41.0082, longitude: 28.9784 }}
                    title="İstanbul"
                    description="Taksim Meydanı"
                />
            </MapView>
        </View>
    )
}