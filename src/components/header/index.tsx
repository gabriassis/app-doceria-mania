import React from "react";
import { Dimensions, Image, View } from "react-native";
import { Container } from "./styles"; // Seu componente de estilo

const { width } = Dimensions.get("window");
const isMobile = width < 768;

const Header: React.FC = () => {
  return (
    <Container>
      <View
        style={{
          marginLeft: isMobile ? 18 : 80,
          marginTop: isMobile ? 15 : 0, 
          alignItems: "center",
        }}
      >
        <Image
          source={require("./../../assets/img/logo2.jpg")} 
          style={{
            width: isMobile ? 50 : 50, 
            height: isMobile ? 50 : 50,
            resizeMode: "contain",
          }}
        />
      </View>
    </Container>
  );
};

export default Header;
