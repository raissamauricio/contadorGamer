//importa o React e o useState
//useState serve para criar valores que podem mudar na tela
import React, {useState} from "react";
//importa componentes nativos do react native
import {
  View, // caixa / área da tela
  Text, // textos
  Button, // botao
  StyleSheet, // estilos
  TouchableOpacity //botao customizavel
 } from "react-native-web";

// componente principal APP
export default function Jogador1(){
  //cria um estado (variavel php) chamado pontos = valor atual
  //setPontos = função para alterar o valor
  //0 = valor inicial
  const [pontos, setPontos] = useState (0);

  //função para aumentar 1 ponto
  function aumentar(){
    // pega o valor auto e soma +1
    setPontos(pontos+1);
  }

  //função para diminuir -1 ponto
  function diminuir(){
    //pega o valor e subtrai por -1
    setPontos(pontos-1);
  }

  // função para resetar o contador
  function resetar(){
    //volta o valor para zero
    setPontos(0);
  }
  //tudo que esta dentro do return aparece na tela principal
  return(
    //view peincipal do APP
    <View style={styles.container}>

      <Text style={styles.titulo}>
        🎮 Contador Gamer 😛
      </Text>
      {/* mostra o valor dos pontos */}

      <Text style={styles.pontos}>{pontos}</Text>
      {/* area dos botoes +1, -1 e resetar */}
      <View style={styles.areaBotoes}>
       <TouchableOpacity
        onPress={aumentar}
       style={styles.botao}>
        <Text style={styles.textoBotao}>+1</Text>
       </TouchableOpacity>

         <TouchableOpacity
        onPress={diminuir}
       style={styles.botao}>
        <Text style={styles.textoBotao}>-1</Text>
       </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={resetar}
       style={styles.botaoReset}>
        <Text style={styles.textoBotao}>resetar</Text>
       </TouchableOpacity>
    </View>
  );
}
// Área de estilo do APP
const styles = StyleSheet.create({
  //Estilo da tela principal
  container: {
    //Ocupa toda a tela
    flex: 1,
    //cor de fundo
    backgroundColor: '#121212',
    // Centraliza horizontalmente
    alignItems: 'center',
    //Centraliza verticalmente 
    justifyContent: 'center',
    //Espaçamento Interno
    padding: 20,
  },
//Estilo do titilo
  titulo: {
    //Tamanho da fonte
    fontSize: 32,
    //Cor de texto
    color: '#00ff88',
    //Texto em negrito
    fontWeight: 'bold',
    //Espaço abaixo
    marginBottom: 30,
  },
//Estilo dos pontos
  pontos: {
    //tamanho gigante
    fontSize: 80,

    color: '#ffffff',
    marginBottom: 40,
    fontWeight: 'bold',
  },
  //area dos botoes
  areaBotoes: {
    //deixa um botao do lado do  outro
    flexDirection: 'row',
    //espaço abaixo
    marginBottom: 20,
  },
// estilo dos botoes
  botao: {
    //cor do botao
    backgroundColor: '#00ff88',
    //espaçamento vertical
    paddingVertical: 15,
    //espaçamento horizontal
    paddingHorizontal: 30,
    //arredonda as bordas
    borderRadius: 12,
    //espaço entre os botoes
    marginHorizontal: 10,
  },
  // estilo dos botoes
  botaoReset: {
    //cor do texto
    backgroundColor: '#ff3b30',
    //espaçamento verticaal
    paddingVertical: 15,
    //espaçamento horizontal
    paddingHorizontal: 40,
    //bordas arredondadas
    borderRadius: 12,
  },
 //estilo do texto dos botoes
  textoBotao: {
    //tamanho da letra
    fontSize: 22,
    // cor do texto
    color: '#000',
    // negrito
    fontWeight: 'bold',
  },
});