import { StatusBar } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
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
  return (
    <Container>
      <StatusBar style="auto" />
    </Container>
  );
};

export default HomeScreen;
