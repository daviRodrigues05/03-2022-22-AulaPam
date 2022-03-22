import { StyleSheet, Text, View } from "react-native";
import Cabecalho from "./src/components/cabecalho";
import botao from "./src/components/botao";


export default function App() {
  return (
    <View style={{backgroundColor:'#D3D3D3', flex:1}}>

      <Cabecalho></Cabecalho>

      <Botao

      Logo="game-controller"
      text="Games"
      cor="#40E0D0"
      Logo2="film"
      text2="Filmes"
      cor2="#9FE2BF"

      />

     </View>
  );
}
