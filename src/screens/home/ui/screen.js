import React, { useState, useEffect } from 'react';
import { StatusBar, Button } from "react-native";
import styled from "styled-components/native";
import MapComponent from "../../../components/MapComponent/MapComponent";
import * as Location from 'expo-location';
import LocationMenu from './LocationMenu';
import ButtonStyled from '../../../components/ButtonStyled/ButtonStyled';

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const Title = styled.Text`
  padding: 10px;
  width: 100%;
  color: black;
  font-weight: bold;
  font-size: 20px;
`;

const Text = styled.Text`
  color: black;
  font-weight: medium;
  font-size: 14px;
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
      <MapComponent region={mapRegion} onMarkerPress={getUserLocation} />
      {/* <StatusBar style="auto" /> */}
      {/* <Button title='Get User Location' onPress={getUserLocation} /> */}
      <LocationMenu />
      
    </Container>
  );
};

export default HomeScreen;
