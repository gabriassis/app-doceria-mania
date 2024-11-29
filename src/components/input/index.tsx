import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, Dimensions, View } from "react-native";
import styled from "styled-components/native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const isMobile = width < 768;

interface Props {
  onChangeText: (region: string) => void;
  label: string;
  searchName: string[];
  selectedRegion: (region: string) => void;
  detail: boolean;
  dataRest: string[];
  selectedName: string;
}

const SearchInput = ({ label, searchName, selectedRegion, detail }: Props) => {
  console.log(searchName)
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const navigation = useNavigation();
  const [isClearButtonPressed, setIsClearButtonPressed] = useState(false);

  const handleRegionChange = (region: string) => {
    setName(region);
    selectedRegion(region);
  };

  useEffect(() => {
    if (isClearButtonPressed) {
      setName("");
      selectedRegion("");
      setIsClearButtonPressed(false);
    }
  }, [isClearButtonPressed]);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const renderDropdown = () => {
    console.log(visible)
    if (visible) {
      return (
        <View>
          <Dropdown>
            <TouchableOpacity onPress={() => setIsClearButtonPressed(true)} style={{ padding: 20 }}>
              <Text>Limpar campo</Text>
            </TouchableOpacity>

            {searchName.map((item) => (
              <TouchableOpacity
                style={{ marginBottom: 20 }}
                key={item}
                onPress={() => {
                  handleRegionChange(item);
                  setVisible(false);
                }}
              >
                <ButtonText style={{ color: "#0C1013" }}>{item}</ButtonText>
                <Line />
              </TouchableOpacity>
            ))}
          </Dropdown>
        </View>
      );
    }
  };

  return (
    <SearchInputContainer>
      {detail === true ? (
        <ContainerDetail onPress={() => navigation.goBack()}>
          {renderDropdown()}
          <Icon
            type="font-awesome"
            name="chevron-left"
            color={"#474545"}
            size={12}
          />
          <ButtonText>{label}</ButtonText>
        </ContainerDetail>
      ) : (
        <>
          <InputField
            value={name}
            placeholder="Pesquise uma categoria"
            onChangeText={(text) => setName(text)}
          />
          <FilterButton onPress={toggleDropdown}>
            {renderDropdown()}
            <ButtonText>{label}</ButtonText>
            <View style={{ left: 5 }}>
              <Icon
                type="font-awesome"
                name="chevron-down"
                color={"#474545"}
                size={12}
              />
            </View>
          </FilterButton>
        </>
      )}
    </SearchInputContainer>
  );
};

export default SearchInput;

const Line = styled.View`
  height: 2px;
  background-color: "#e1e4e6";
`;

const Dropdown = styled.View`
  position: absolute;
  background-color: white;
  top: 30px;
  z-index: 999999;
  elevation: 1;
  shadow-color: #474545;
  shadow-opacity: 1;
  shadow-radius: 2px;
  border-color:#FFBDCF;
  border-width:2px;

`;

const SearchInputContainer = styled.View`
  flex-direction: ${isMobile ? "column" : "row"};
  align-items: center;
  width: ${isMobile ? "92%" : "80%"};
  justify-content: space-between;
  margin-left: ${isMobile ? "16px" : "83px"};
  margin-top: ${isMobile ? "30px" : "80px"};
`;

const ContainerDetail = styled.TouchableOpacity`
  border-width: 1px;
  border-color: #ccc;
  border-radius: 5px;
  font-size: 16px;
  background-color: #f9f9f9;
  height: 54px;
  width: ${isMobile ? "150px" : "10%"};
  font-family: "NunitoRegular";
  font-weight: normal;
  font-style: normal;
  align-items: center;
  align-self: center;
  justify-content: space-evenly;
  flex-direction: row;
  margin-left: ${isMobile ? "150px" : "0px"};
  margin-right: ${isMobile ? "350px" : "0px"};
  color: #474545;
`;

const InputField = styled.TextInput`
  padding: 10px;
  margin-right: ${isMobile ? "0" : "12px"};
  margin-bottom: ${isMobile ? "12px" : "0"};
  border-width: 1px;
  border-color: #FEDAE2;
  border-radius: 5px;
  font-size: 16px;
  background-color: white;
  height: 54px;
  width: ${isMobile ? "92%" : "42%"};
  font-family: "NunitoRegular";
  border-bottom-width: 0.5px;
  justify-content: center;
  shadow-offset: {
    width: 0;
    height: 2px;
  }
  shadow-opacity: 0.25;
  shadow-radius: 4;
  elevation: 5;
`;

const ButtonText = styled(Text)`
  color: #474545;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  font-family: "NunitoRegular";
`;

const FilterButton = styled(TouchableOpacity)`
  border-radius: 4px;
  align-items: center;
  align-self: center;
  justify-content: center;
  padding-horizontal: 16px;
  left: ${isMobile ? "60px" : " 105px"};
  height: 54px;
  flex-direction: row;
  text-align: center;
  elevation: 1;
  shadow-color: #FFBDCF;
  shadow-opacity: 0.5;
  shadow-radius: 2px;
`;
