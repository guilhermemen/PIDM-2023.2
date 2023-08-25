import { View, Text, Image } from "react-native";
import Questao3 from "./questao3";
import { Button } from "react-native-web";
// import { useState } from "react";

const Questao1 = () =>{
    
    return (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            title="Alterar imagem"
            onPress={() => {
              trocarImagem();
            }}
          />
    
          {/* <Image
            id="imagem"
            source={{
              uri: imageSource,
            }}
            style={{ height: 300, width: 300}}
          /> */}
    
          <Text style={{ fontWeight: "bold" }}>Antonio Guilherme Mendes Sampaio</Text>
          <Text style={{ fontWeight: "bold" }}>Canindé - Ceará</Text>
          <Text style={{ fontWeight: "bold", color: "green" }}>Design Digital</Text>
          <Text style={{ fontWeight: "bold", color: "green" }}>Oitavo Semestre</Text>
          <br />
          <Questao3 cor="blue" />
        </View>
      )
}

export default Questao1