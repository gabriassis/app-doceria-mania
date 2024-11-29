import React, { useEffect } from "react";
import styled from "styled-components/native";
import { StatusBar, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { StackNavigationProp } from "@react-navigation/stack";


type RootStackParamList = {
    Home: undefined;
};


type HomeProps = StackNavigationProp<RootStackParamList, 'Home'>;


export default function Login() {

    const navigation = useNavigation<HomeProps>();


    useEffect(() => {

        StatusBar.setBarStyle('dark-content');
        StatusBar.setBackgroundColor('white');

        return () => {
            StatusBar.setBarStyle('light-content');
            StatusBar.setBackgroundColor('transparent');
        };
    }, []);

    const handleLogin = () => {
        navigation.navigate('Home');
    };
    return (
        <Container>
            <View style={{ paddingLeft: 10, paddingRight: 10, flex: 1, justifyContent: "center" }}>
                <Logo source={require('../../assets/img/logo2.jpg')} />
                <LoginButton onPress={handleLogin}>
                    <ButtonText>Entrar</ButtonText>
                </LoginButton>
            </View>
        </Container>
    );
}



const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center; 
  align-items: center;
  background-color:white;
`;

const Logo = styled.Image`
  width: 200px; 
  height: 200px;
`;

const LoginButton = styled.TouchableOpacity`
     background-color: #DECDB3;
     border-radius: 5px;
     top:30px;
     align-items: center;
     height:40px;
     justify-content:center;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
  align-self:center;
`;