import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector } from "react-redux";

const MapComponent = ({ region, onMarkerPress, myRegion }) => {
  const bankData = useSelector((state) => state.bankData);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} region={region}>
        <Marker coordinate={myRegion} title="Я тут" onPress={onMarkerPress}>
          <Icon name="map-marker" size={30} color="red" />
        </Marker>
        {bankData.map((bank) =>
          region.latitude == bank.latitude &&
          region.longitude == bank.longitude ? (
            <Marker
              key={bank.bank_id}
              coordinate={{
                latitude: bank.latitude,
                longitude: bank.longitude,
              }}
              title={bank.salepointname}
              onPress={onMarkerPress}
            >
              <Icon name="circle" size={30} color="green" />
            </Marker>
          ) : (
            <Marker
              key={bank.bank_id}
              coordinate={{
                latitude: bank.latitude,
                longitude: bank.longitude,
              }}
              title={bank.salepointname}
              onPress={onMarkerPress}
            >
              <Icon name="circle-thin" size={30} color="green" />
            </Marker>
          )
        )}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapComponent;
