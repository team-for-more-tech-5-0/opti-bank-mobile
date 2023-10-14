import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Logo from '../../../../assets/vectors/Logo';
import Way from '../../../../assets/vectors/Way';
import styled from 'styled-components/native';

const LocationMenuItem = ({ title, onPress }) => {
  return (
    <MenuItemContainer onPress={onPress}>
      <Logo />
      <ContentContainer>
        <AddressText>г. Москва, ул. Долгоруковская д. 40</AddressText>
        <NameText>Банк ВТБ Филиал №7716</NameText>
        <StatusText>Открыт до 22:00</StatusText>
        <StatusLoadText>Средняя загрузка</StatusLoadText>
      </ContentContainer>
      <Div>
        <Way />
        <TextWay>1021,7 км</TextWay>
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
  color: #3A83F1;
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
  border-color: #F7F7F7;
  background-color: #FFF;
  margin-top: 8px;
`;
const ContentContainer = styled.View`
  align-self: stretch;
  width: 50%;
`;
const AddressText = styled.Text`
  color: #1C1B1E;
  font-family: 'VTB Group';
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 9px;
`;
const NameText = styled.Text`
  color: #4A4A4A;
  font-family: 'VTB Group';
  font-size: 15px;
  font-weight: 300;
  letter-spacing: -0.408px;
  margin-bottom: 9px;
`;
const StatusText = styled.Text`
  color: #4A4A4A;
  font-family: 'VTB Group';
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 9px;
`;
const StatusLoadText = styled.Text`
  color: orange;
  font-family: 'VTB Group';
  font-size: 13px;
  font-weight: 400;
  margin-bottom: 9px;
`;

export default LocationMenuItem;