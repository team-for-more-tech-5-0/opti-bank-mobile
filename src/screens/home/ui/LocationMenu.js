import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Easing,
  FlatList,
} from "react-native";
import InputText from "./InputText";
import ButtonStyled from "../../../components/ButtonStyled/ButtonStyled";
import LocationMenuItem from "./LocationMenuItem";
import { useSelector } from "react-redux";

const LocationMenu = ({ changeRegion }) => {
  const bankData = useSelector((state) => state.bankData);
  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnimation = new Animated.Value(0);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    // console.log(bankData)
  }, [bankData]);

  useEffect(() => {
    if (menuVisible) {
      Animated.timing(slideAnimation, {
        toValue: 1,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(slideAnimation, {
        toValue: 0,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: false,
      }).start();
    }
  }, [menuVisible]);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.menu,
          {
            height: slideAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [120, 500],
            }),
          },
        ]}
      >
        <InputText
          value={searchText}
          onChangeText={setSearchText}
          placeholder={"Город, район, улица, метро"}
        />
        <ButtonStyled
          title="Оптимальный офис"
          onPress={toggleMenu}
          style={styles.searchBtn}
        />
        <FlatList
          data={bankData}
          renderItem={({ item }) => (
            <LocationMenuItem
              key={item.bank_id}
              contentProp={item}
              onPress={() => {
                changeRegion({
                  latitude: item.latitude,
                  longitude: item.longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                });
              }}
            />
          )}
          keyExtractor={(item) => item.title}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBtn: {
    position: "absolute",
    left: 16,
    bottom: 5,
    width: "100%",
  },
  menu: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    width: "100%",
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 50,
  },
});

export default LocationMenu;
