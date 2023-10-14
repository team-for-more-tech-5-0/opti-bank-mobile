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

const LocationMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnimation = new Animated.Value(0);
  const [searchText, setSearchText] = useState("");

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

  const locationMenuData = [
    { title: "title1", onPress: () => {} },
    { title: "title2", onPress: () => {} },
    { title: "title3", onPress: () => {} },
  ];

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
        <ButtonStyled title="Оптимальный офис" onPress={toggleMenu} style={styles.searchBtn} />
        <FlatList
          data={locationMenuData}
          renderItem={({ item }) => (
            <LocationMenuItem title={item.title} onPress={item.onPress} />
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
    left:16,
    bottom:5,
    width: '100%',
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