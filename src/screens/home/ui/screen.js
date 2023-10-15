import React, { useState, useEffect } from "react";
import { StatusBar } from "react-native";
import { Map } from "../../../widgets";
import * as Location from "expo-location";
import LocationMenu from "./LocationMenu";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const HomeScreen = () => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const getUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
    }
    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    console.log(location.coords.latitude, location.coords.longitude);
  };
  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <Container>
      <Map region={mapRegion} onMarkerPress={getUserLocation} />
      <StatusBar style="auto" />
      <LocationMenu />
    </Container>
  );
};

export default HomeScreen;
