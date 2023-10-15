import React, { useState, useEffect } from 'react';
import { StatusBar, Button } from "react-native";
import styled from "styled-components/native";
import { useDispatch } from 'react-redux';
import MapComponent from "../../../components/MapComponent/MapComponent";
import * as Location from 'expo-location';
import LocationMenu from './LocationMenu';
import { getBankData } from '../../../store/actions/bankActions';


const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const HomeScreen = () => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 55.755826,
    longitude: 37.6173,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [myRegion, setMyRegion] = useState({
    latitude: 55.755826,
    longitude: 37.6173,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const dispatch = useDispatch();

  const getUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
    }
    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
    // setMyRegion({
    //   latitude: location.coords.latitude,
    //   longitude: location.coords.longitude,
    //   latitudeDelta: 0.0922,
    //   longitudeDelta: 0.0421,
    // });
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
    dispatch(getBankData(location.coords.latitude, location.coords.longitude));
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <Container>
      <MapComponent region={mapRegion} myRegion={myRegion} onMarkerPress={getUserLocation} />
      <LocationMenu changeRegion={setMapRegion} />
    </Container>
  );
};

export default HomeScreen;