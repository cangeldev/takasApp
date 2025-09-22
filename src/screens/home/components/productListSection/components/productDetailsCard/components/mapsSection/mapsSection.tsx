import { View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import getStyles from './mapsSection.style'

/*
  MapsSection, Bu bileşen ürünün konumunun haritada nerde olduğunun görüntülenebilmesi için ve istenildiği taktirde rota oluşturulabilmesi için kullanılan bileşendir.
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