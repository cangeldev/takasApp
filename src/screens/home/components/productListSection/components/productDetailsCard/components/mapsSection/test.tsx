import React, { useState } from "react"
import {  View,  StyleSheet,  Text,  TouchableOpacity,  Modal,} from "react-native"
import MapView, { Marker } from "react-native-maps"

//Geçiçi oluşturum test için kaldırmayı unutma!!!
export default function Test() {
  const [tempLocation, setTempLocation] = useState<{ latitude: number; longitude: number } | null>(null)
  const [savedLocation, setSavedLocation] = useState<{ latitude: number; longitude: number } | null>(null)
  const [modalVisible, setModalVisible] = useState(false);


  const handlePress = (event: any) => {
    const { latitude, longitude } = event.nativeEvent.coordinate
    setTempLocation({ latitude, longitude })
    setModalVisible(true)
  }

  const handleSaveLocation = () => {
    if (tempLocation) {
      setSavedLocation(tempLocation)
      setTempLocation(null)
    }
    setModalVisible(false)
  }

  const handleCancel = () => {
    setTempLocation(null)
    setModalVisible(false)
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 41.0082,
          longitude: 28.9784,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        onPress={handlePress}
      >

        {tempLocation && (
          <Marker coordinate={tempLocation} pinColor="orange" title="Geçici Seçim" />
        )}

   
        {savedLocation && (
          <Marker coordinate={savedLocation} pinColor="green" title="Kaydedilen Nokta" />
        )}
      </MapView>


      <Modal
        transparent
        animationType="slide"
        visible={modalVisible}
        onRequestClose={handleCancel}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Noktayı Kaydet?</Text>
            {tempLocation && (
              <Text style={styles.modalText}>
                Lat: {tempLocation.latitude.toFixed(5)}, Lng:{" "}
                {tempLocation.longitude.toFixed(5)}
              </Text>
            )}
            <View style={styles.buttonRow}>
              <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleSaveLocation}>
                <Text style={styles.buttonText}>Kaydet</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleCancel}>
                <Text style={styles.buttonText}>İptal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    width: "80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalText: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  saveButton: {
    backgroundColor: "green"
  },
  cancelButton: {
    backgroundColor: "red"
  },
  buttonText: {
    color: "white",
    fontWeight: "bold"
  }
})
