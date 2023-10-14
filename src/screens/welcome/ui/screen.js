import { StatusBar } from "react-native";
import styled from "styled-components/native";
import Svg, { Path } from "react-native-svg";

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 22px;
  height: 100%;
`;

const Header = styled.View`
  width: 100%;
  padding: 20px 18px;
`;

const Close = styled.TouchableOpacity`
  margin-left: auto;
`;

const Image = styled.Image`
  margin: 0 auto;
  width: 309px;
  height: 389px;
`;

const Title = styled.Text`
  margin: 16px 0 8px 0;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  color: #08151e;
`;

const Text = styled.Text`
  font-size: 17px;
  font-weight: 300;
  color: #08151e;
`;

const Arrow = styled.View`
  flex: 1;
  align-items: flex-end;
  justify-content: center;
  margin: 0 32px 0 0;
  height: 100%;
`;

const Button = styled.TouchableOpacity`
  display: flex;
  padding: 10px 12px;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  width: 100%;
  border-radius: 8px;
  border: 0.5px solid #3a83f1;
  background: #3a83f1;
`;

const BtnText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
`;

const WelcomeScreen = ({ navigation }) => {
  return (
    <Container>
      <Header>
        <Close onPress={() => navigation.navigate("Home")}>
          <Svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M18 6L6 18"
              stroke="#626F84"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M6 6L18 18"
              stroke="#626F84"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
        </Close>
      </Header>
      <Image source={require("../../../../assets/welcome.webp")} />
      <Title>Поможем найти оптимальный офис для вашего удобства</Title>
      <Text>
        Мы ценим ваше время и предоставляем уникальную онлайн-возможность
        находить офисы, учитывая их текущую загруженность
      </Text>
      <Arrow>
        <Svg
          width="25"
          height="71"
          viewBox="0 0 25 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <Path
            d="M6.44361 4.63701L5.6781 5.92697L6.44361 4.63701ZM2.76551 0.710045C2.05309 0.287266 1.13282 0.522068 0.710042 1.23449C0.287261 1.94692 0.522064 2.86718 1.23449 3.28996L2.76551 0.710045ZM0.61797 63.4169C0.295939 64.1802 0.653637 65.06 1.41691 65.382L13.8552 70.6298C14.6185 70.9519 15.4983 70.5942 15.8203 69.8309C16.1423 69.0676 15.7846 68.1878 15.0214 67.8658L3.96512 63.2011L8.62983 52.1448C8.95186 51.3815 8.59416 50.5017 7.83089 50.1797C7.06762 49.8577 6.1878 50.2154 5.86577 50.9786L0.61797 63.4169ZM7.20912 3.34705L2.76551 0.710045L1.23449 3.28996L5.6781 5.92697L7.20912 3.34705ZM2.56494 65.3895C29.1605 54.5768 31.8985 17.9987 7.20912 3.34705L5.6781 5.92697C28.2349 19.3131 25.7334 52.7317 1.43506 62.6105L2.56494 65.3895Z"
            fill="#626F84"
          />
        </Svg>
      </Arrow>
      <Button onPress={() => navigation.navigate("Home")}>
        <BtnText>Оптимальный офис</BtnText>
      </Button>
      <StatusBar style="auto" />
    </Container>
  );
};

export default WelcomeScreen;
