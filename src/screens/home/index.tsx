import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Input from "../../components/input";
import CardapioList from "../../components/card";
import Header from "../../components/header";
import { cardapioData } from "../../services/cardapio";
import { useNavigation } from '@react-navigation/native';

interface Tamanho {
  tamanho: string;
  peso: number;
  preco: number;
  fatias: number;
}

export interface CardapioData {
  id: number;
  nome: string;
  descricao?: string;
  preco: number;
  imagem: string;
  categoria: string;
  tamanhos: Tamanho[];
}

export default function Home() {
  const [data, setData] = useState<CardapioData[]>([]);
  const [filteredData, setFilteredData] = useState<CardapioData[]>([]);
  const [searchName, setSearchName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  
  const loadMoreData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const categories = [
    { name: "Bolo" },
    { name: "Torta" },
    { name: "DocesFinos" }
  ];

  const categoryJoin = categories.map((item) => item.name);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const cardapio = cardapioData;
        const validCardapio = cardapio.filter(
          (item) => item.id && item.nome && item.preco && item.imagem
        );

        if (validCardapio.length !== cardapio.length) {
          console.error("Alguns dados estão ausentes ou inválidos");
        }

        setData(validCardapio);
        await AsyncStorage.setItem("cardapio", JSON.stringify(validCardapio));
      } catch (error) {
        console.error("Erro ao carregar o cardápio:", error);
      }
      setLoading(false);
    };

    loadData();
  }, []);

  console.log(selectedCategory,"selectedCategory")

  console.log(filteredData,"filteredData")
 
  useEffect(() => {
    if (selectedCategory === "" && searchName === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter(
        (item) =>
       
          item.nome.toLowerCase().includes(searchName.toLowerCase()) &&

          (selectedCategory === "" || item.categoria.toLowerCase().includes(selectedCategory.toLowerCase()))
      );
      setFilteredData(filtered);
    }
  }, [data, searchName, selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <Container>
      <Header />
      <View style={{ position: "relative", zIndex: 99999, backgroundColor: "#ffffff" }}>
        <Input
          label={selectedCategory || "Filtrar por Categoria"}
          searchName={categoryJoin}
          selectedRegion={handleCategoryChange}
          detail={false}
          onChangeText={(text) => setSearchName(text)}
          dataRest={[]}
          selectedName={selectedCategory}
        />
      </View>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : filteredData.length === 0 ? (
        <NoResultsText>Nenhum resultado encontrado</NoResultsText>
      ) : (
        <View style={{ zIndex: 1, backgroundColor: "#ffffff" }}>
          <CardapioList data={filteredData} loading={loading} loadMoreData={loadMoreData} navigation={navigation} />
        </View>
      )}
      <StatusBar style="auto" />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  width: 100%;
  background-color: #ffffff;
  height: 100%;
`;

const NoResultsText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #555;
  text-align: center;
  margin-top: 20px;
  font-family: "NunitoRegular";
`;
