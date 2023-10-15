import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Logo from "../../../../assets/vectors/Logo";
import Way from "../../../../assets/vectors/Way";
import styled from "styled-components/native";

const LocationMenuItem = ({ contentProp, onPress }) => {
  return (
    <MenuItemContainer onPress={onPress}>
      <Logo />
      <ContentContainer>
        <AddressText>{contentProp?.address}</AddressText>
        <NameText>{contentProp?.salepointname}</NameText>
        <StatusText>
          {contentProp?.status == "открытая" ? "Открыт до 22:00" : "Закрыт"}
        </StatusText>
        <StatusLoadText time={contentProp?.totalTime}>
          {contentProp.totalTime < 80
            ? "Низкая загрузка"
            : contentProp.totalTime >= 80 && contentProp.totalTime < 160
            ? "Средняя загрузка"
            : "Высокая загрузка"}
        </StatusLoadText>
      </ContentContainer>
      <Div>
        <Way />
        <TextWay>{`${contentProp.distance} км`}</TextWay>
      </Div>
    </MenuItemContainer>
  );
};

const Div = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TextWay = styled.Text`
  color: #3a83f1;
  text-align: center;
  margin-top: 5px;
`;
const MenuItemContainer = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  padding: 14px;
  padding-horizontal: 10px;
  padding-top: 8px;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 8px;
  border-width: 1px;
  border-color: #f7f7f7;
  background-color: #fff;
  margin-top: 8px;
`;
const ContentContainer = styled.View`
  align-self: stretch;
  width: 50%;
`;
const AddressText = styled.Text`
  color: #1c1b1e;
  font-family: "VTB Group";
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 9px;
`;
const NameText = styled.Text`
  color: #4a4a4a;
  font-family: "VTB Group";
  font-size: 15px;
  font-weight: 300;
  letter-spacing: -0.408px;
  margin-bottom: 9px;
`;
const StatusText = styled.Text`
  color: #4a4a4a;
  font-family: "VTB Group";
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 9px;
`;
const StatusLoadText = styled.Text`
  color: ${(props) => {
    if (props.time < 80) {
      return "green";
    } else if (props.time >= 80 && props.time < 160) {
      return "#4A4A4A";
    } else {
      return "red";
    }
  }};
  font-family: "VTB Group";
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 9px;
`;

export default LocationMenuItem;
