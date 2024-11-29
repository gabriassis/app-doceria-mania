import React from "react";
import { Dimensions, SafeAreaView, ScrollView, TouchableOpacity, Linking, View } from "react-native";
import styled from "styled-components/native";
import Header from "src/components/header";
import SearchInput from "src/components/input";
import { useNavigation } from '@react-navigation/native';

interface Props {
  title: string;
}

const { width } = Dimensions.get("window");
const isMobile = width < 768;

const DetailItems: React.FC<Props> = ({ route }: any) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleOrder = () => {
    const message = `Olá! Gostaria de fazer um pedido do item ${route?.params?.item.nome}.`;
    const phoneNumber = "+5521983945639";
    const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    Linking.openURL(url).catch(err => console.error("Não foi possível abrir o WhatsApp", err));
  };
  
  return (
    <Container>
      {/* <Header /> */}
      <SearchInput
        detail={true}
        label="Voltar"
        onChangeText={handleGoBack}
        searchName={[]}
        selectedRegion={() => {}}
        dataRest={[]}
        selectedName={""}
      />
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <RowContainer>
            <ImageContainer
              source={route?.params?.item.imagem }
            />
            <Title>{route?.params?.item.nome}</Title>

            {route?.params?.item.tamanhos.map((tamanho: any, index: number) => (
              <RowContainerInfo key={index}>
                 <InfoText>
                  <SubtitleText>Preço:</SubtitleText> {tamanho.preco} 
                </InfoText>
                <InfoText>
                  <SubtitleText>Peso:</SubtitleText> {tamanho.peso} kg
                </InfoText>
                <InfoText>
                  <SubtitleText>Fatias:</SubtitleText> {tamanho.fatias}
                </InfoText>
              </RowContainerInfo>
            ))}
            <OrderButton onPress={handleOrder}>
              <OrderButtonText>Fazer Pedido</OrderButtonText>
            </OrderButton>
          </RowContainer>
        </ScrollView>
        <View style={{height:80}}/>
      </SafeAreaView>
    </Container>
  );
};

export default DetailItems;


const Container = styled.View`
  background-color: white;
  height: 100%;
  padding: 20px;
  align-items: center;
`;

const RowContainer = styled.View`
  flex-direction: ${isMobile ? "column" : "row"};
  justify-content: ${isMobile ? "center" : "flex-start"};
  margin-top: 30px;
  width: 100%;
  padding: 0 20px;
`;

const ImageContainer = styled.Image`
  height: ${isMobile ? "200px" : "300px"};
  width: ${isMobile ? "350px" : "400px"};
  border-radius: 12px;
  // border: 3px solid #FEDAE2
  margin-bottom: 20px;
  align-self: center;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #0C1013;
  text-align: center;
  margin-top: 20px;

`;

const RowContainerInfo = styled.View`
  flex-direction: ${isMobile ? "column" : "row"};
  justify-content: space-between;
  margin-top: 16px;
  padding: 1px;
  background-color: rgba(255, 225, 232, 0.5);
  border-radius: 8px;
  shadow-color: #000;
  shadow-opacity: 0.1;
  shadow-radius: 10px;
  elevation: 5;
  margin-bottom: 10px;
  height:100px;
  padding-bottom:10px;
  padding-top:10px;
  padding-left:20px;
`;


const InfoText = styled.Text`
  font-size: 18px;
  font-weight: normal;
  color: #0C1013;

`;

const SubtitleText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #E3AD66; 

`;

const OrderButton = styled.TouchableOpacity`
  background-color: #DECDB3;
  padding: 15px 30px;
  border-radius: 8px;
  margin-top: 0px;
  align-self: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const OrderButtonText = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

