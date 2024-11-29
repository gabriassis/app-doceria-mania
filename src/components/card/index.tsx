import React, { useState, useEffect } from "react";
import { FlatList, TouchableOpacity, ActivityIndicator, Dimensions, View, Text } from "react-native";
import styled from "styled-components/native";
import { cardapioData } from "../../services/cardapio";
import { CardapioData } from "src/screens";

interface CardapioListProps {
  data: CardapioData[];  // Filtrados já
  loadMoreData: () => void;
  loading: boolean;
  navigation: any; 
}

const { width } = Dimensions.get('window');

const CardapioList: React.FC<CardapioListProps> = ({ loadMoreData, loading, navigation, data }) => {
  const [page, setPage] = useState(1);
  const [displayData, setDisplayData] = useState<any[]>([]);
  
  const itemsPerPage = 4;  
  const totalPages = Math.ceil(data.length / itemsPerPage); 

  useEffect(() => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const nextData = data.slice(startIndex, endIndex);  
    setDisplayData(nextData);
  }, [page, data]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(prevPage => prevPage + 1);
    }
  };

  const handleCardPress = (item: CardapioData) => {
    navigation.navigate('DetailItem', { item }); 
  };

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity onPress={() => handleCardPress(item)}>
      <StyledView>
        <StyledImage source={item.imagem} />
        <StyledText>{item.nome}</StyledText>
        <StyledText style={{ color: "#E3AD66" }}>{item.descricao}</StyledText>
      </StyledView>
    </TouchableOpacity>
  );

  return (
    <View style={{ height: "100%" }}>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={displayData}  
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={{ paddingBottom: 20 }}
        scrollEnabled={!loading}
        ListFooterComponent={loading ? <ActivityIndicator size="large" color="#FFBDCF" /> : null}
      />

      <PaginationWrapper>
        <PaginationButton onPress={handlePreviousPage} disabled={page === 1}>
          <PaginationButtonText style={page === 1 ? { color: "#ccc" } : {}}>Anterior</PaginationButtonText>
        </PaginationButton>

        <PaginationText>{`Página ${page} de ${totalPages}`}</PaginationText>

        <PaginationButton onPress={handleNextPage} disabled={page === totalPages}>
          <PaginationButtonText style={page === totalPages ? { color: "#ccc" } : {}}>Próxima</PaginationButtonText>
        </PaginationButton>
      </PaginationWrapper>

      <View style={{ height: 240 }} />
    </View>
  );
};

export default CardapioList;

const StyledView = styled.View`
  background-color: rgba(255, 225, 232, 0.5);
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  shadow-color: #000;
  shadow-offset: { width: 0, height: 2px };
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
  width: ${(width - 40) / 2}px;
`;

const StyledImage = styled.Image`
  height: 150px;
  width: 100%;
  border-radius: 8px;
`;

const StyledText = styled.Text`
  font-size: 14px;
  color: #A3BAA6;
  margin-top: 5px;
  text-align: center;
`;

const PaginationWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  padding: 0 20px;
`;

const PaginationButton = styled.TouchableOpacity`
  background-color: #DECDB3;
  padding: 10px;
  border-radius: 5px;
  width: 100px;
  align-items: center;
  justify-content: center;
`;

const PaginationButtonText = styled.Text`
  color: red;
  font-size: 16px;
`;

const PaginationText = styled.Text`
  font-size: 16px;
  color: #474545;
  font-weight: bold;
`;
