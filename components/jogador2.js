//Importa o React e o useState
//useState serve para criar valores que podem mudar a tela
import React, { useEffect, useState } from "react";
//importa componentes nativos do react native
import {
  View,                         // Caixa / Área da tela
  Text,                        // Textos
  Button,                     // Botão
  StyleSheet,                // Estilos
  TouchableOpacity,          // Botão customizável
  TextInput                 // Campo de texto para digitar
} from 'react-native';

// Componente principal APP

export default function Jogador2() {
  // Cria um estado (variável PHP) chamado "pontos"
  // pontos = valor atual 
  // setPontos = função para alterar o valor 
  // 0 = valor inicial
  const [pontos1, setPontos1] = useState(0);
  const [pontos2, setPontos2] = useState(0);
  const [nome1, setNome1] = useState('Jogador 1');
  const [nome2, setNome2] = useState('Jogador 2');
  const [lider, setLider] = useState('Empate');

  // executar alguma ação automaticamente quando algo mudar
  // nesse caso: toda vez que os pontos / nome mudarem
  // o codigo dentro do useEffect sera executado 
  useEffect(()=> {
      if(pontos1 > pontos2){
        setLider(nome1);
      }else if (pontos2 > pontos1){
        setLider(nome2);
      }else{
        setLider('empate');
      }
        
  }, [pontos1, pontos2, nome1, nome2])
    //dependencias que disparam o useeffect quando mudam

  // Função para aumentar 1 ponto
  function aumentar1() {
    // Pega o valor auto e soma +1
    setPontos1(pontos1 + 1);
  }

  // Função para aumentar 1 ponto
  function aumentar2() {
    // Pega o valor auto e soma +1
    setPontos2(pontos2 + 1);
  }

  // Função para diminuir 1 ponto
  function diminuir1() {
    // Pega o valor auto e subtrai -1
    if (pontos1 > 0) {
    setPontos1(pontos1 - 1);
    }
  }

  // Função para diminuir 1 ponto
  function diminuir2() {
    // Pega o valor auto e subtrai -1
        if (pontos2 > 0) {
    setPontos2(pontos2 - 1);
    }
  }

  // Função para resetar o contador
  function resetar() {
    // volta o valor para 0
    setPontos1(0);
    setPontos2(0);
    setLider('Empate');

  }

  // tudo que está no RETURN aparece na tela
  return (
    // View proncipal do APP
    <View style={styles.container}>
      {/* Título do APP */}
      <Text style={styles.titulo}>
        👾 Contador Gamer - Modo 2 Jogadores
      </Text>
      
        <text style={styles.lider}>
          🏆  lider: {lider}
        </text>

      {/* area dos jogadores */}
      <View style={styles.areaJogadores}>
        {/* Jogador 1 */}
        <View style={styles.areaJogador}>
            <TextInput 
            style={styles.input}
            placeholder="Nome do Jogador 1"
            placeholderTextColor="#999"
            value={nome1}
            onChangeText={setNome1}
            />

            <Text style={styles.nome}>{nome1}</Text>
        
          <Text style={styles.pontos}>{pontos1}</Text>
          {/* área dos botões +1 e -1 */}
          <View style={styles.areaBotoes}>
            <TouchableOpacity
              onPress={aumentar1}
              style={styles.botao}>
              <Text style={styles.textoBotao}>+1</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={diminuir1}
              style={styles.botao}>
              <Text style={styles.textoBotao}>-1</Text>
            </TouchableOpacity>
          </View>

        </View>
        {/* Jogador2 */}
        <View style={styles.areaJogador}>
          <TextInput 
            style={styles.input}
            placeholder="Nome do Jogador 2"
            placeholderTextColor="#999"
            value={nome2}
            onChangeText={setNome2}
            />

            <Text style={styles.nome}>{nome2}</Text>

          <Text style={styles.pontos}>{pontos2}</Text>
          {/* área dos botões +1 e -1 */}
          <View style={styles.areaBotoes}>
            <TouchableOpacity
              onPress={aumentar2}
              style={styles.botao}>
              <Text style={styles.textoBotao}>+1</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={diminuir2}
              style={styles.botao}>
              <Text style={styles.textoBotao}>-1</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>

      <TouchableOpacity
        onPress={resetar}
        style={styles.botaoReset}>
        <Text style={styles.textoBotao}>Reset</Text>
      </TouchableOpacity>

    </View>
  );
}


// ÁREA DE ESTILOS DO APP 
const styles = StyleSheet.create({
  // ESTILO DA TELA PRINCIPAL
  container: {
    // OCUPA A TELA TODA 
    flex: 1,
    // COR DE FUNDO
    backgroundColor: '#9df7e5ff',
    // CENTRALIZA HORIZONTALMENTE
    alignItems: 'center',
    // CENTRALIZA VERTICALMENTE
    justifyContent: 'center',
    // ESPAÇAMENTO INTERNO
    padding: 20,
  },

  // ESTILO DO TÍTULO
  titulo: {
    // TAMANHO DA FONTE
    fontSize: 32,
    // COR DO TEXTO
    color: '#ea7fd8ff',
    // TEXTO EM NEGRITO
    fontWeight: 'bold',
    // ESPAÇO ABAIXO
    marginBottom: 30,
  },

  // ESTILO DOS PONTOS
  pontos: {
    // TAMANHO GRANDE (¬‿¬)
    fontSize: 80,
    // COR BRANCA
    color: '#ffffffff',
    // ESPAÇO ABAIXO
    marginBottom: 40,
    // NEGRITO
    fontWeight: 'bold',
  },

  // ÁREA DOS BOTÕES 
  areaBotoes: {
    // DEIXA UM BOTÃO AO LADO DO OUTRO
    flexDirection: 'row',
    // ESPAÇO ABAIXO
    marginBottom: 20,
  },
  // ESTILOS DOS BOTÕES +1 E -1
  botao: {
    // COR DO BOTÃO 
    backgroundColor: '#00ff88',
    // ESPAÇAMENTO VERTICAL
    paddingVertical: 15,
    // ESPAÇAMENTO HORIZONTAL
    paddingHorizontal: 30,
    // ARREDONDA AS BORDAS
    borderRadius: 12,
    // ESPAÇO ENTRE OS BOTÕES
    marginHorizontal: 10,
  },

  //ESTILO DO BOTÃO RESETAR
  botaoReset: {
    // COR VERMELHA
    backgroundColor: '#ff3b30',
    // ESPAÇAMENTOS
    paddingVertical: 15,
    paddingHorizontal: 40,
    // ARREDONDA AS BORDAS
    borderRadius: 12,
  },

  // ESTILO DOS TEXTOS DOS BOTÕES 
  textoBotao: {
    // TAMANHO DA LETRA
    fontSize: 22,
    // COR DO TEXTO
    color: '#000',
    // NEGRITO
    fontWeight: 'bold',

  },
  // área de jogadores 
  areaJogadores: {
    flexDirection: 'row',
    // espaço entre eles
    grap: 15,

  },

  areaJogador: {
    backgroundColor: '#82b1dbff',
    width: 230,
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },

  input: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,

  },

  nome: {
    fontSize: 20,
    color: '#2253f6ff',
    fontWeight: 'bold',

  },

  lider: {
    fontSize: 22,
    color: '#fde10cff',
    marginBottom: 20,
    fontWeight: 'bold',
  }


});