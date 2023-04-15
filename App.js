import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Picker, Button } from 'react-native';
import Constants from 'expo-constants';

export default function App(){
  const [valor, setValor] = useState(0.0);
  const [valorConvertido, setValorConvetido] = useState(0.0);
  const [origem, setOrigem] = useState('');
  const [destino, setDestino] = useState('');

  function pegaValor(valor){
    setValor(valor);
    document.getElementById("valor").style.display = "block";
  }

  function pegaOrigem(origem){
    setOrigem(origem);
    document.getElementById("origem").style.display = "block";
  }

  function pegaDestino(destino){
    setDestino(destino);
    document.getElementById("destino").style.display = "block";
  }

  function converterMoeda(valor, origem, destino) {
    const taxaConversao = {
      "Dólar": {
        "Real": 5.27,
        "Euro": 0.85
      },
      "Real": {
        "Dólar": 0.19,
        "Euro": 0.16
      },
      "Euro": {
        "Dólar": 1.18,
        "Real": 6.27
      }
    };
    const taxa = taxaConversao[origem][destino];
    return setValorConvetido(valor * taxa);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Conversor de Moedas 
      </Text>
      <Text style={styles.subtitle}>
        Dólar, Real e Euro
      </Text>

      <TextInput style={styles.inputs} placeholder="Digite o valor: " onChangeText={pegaValor}></TextInput>

      <Picker  style={styles.inputs} selectedValue={origem} onValueChange={pegaOrigem}>
        <Picker.Item key={1} value={""} label="Escolha uma moeda:"></Picker.Item>
        <Picker.Item key={2} value={"Dólar"} label="Dólar"></Picker.Item>
        <Picker.Item key={3} value={"Real"} label="Real"></Picker.Item>
        <Picker.Item key={4} value={"Euro"} label="Euro"></Picker.Item>
      </Picker>


      <Picker  style={styles.inputs} selectedValue={destino} onValueChange={pegaDestino}>
        <Picker.Item key={1} value={""} label="Escolha uma moeda:"></Picker.Item>
        <Picker.Item key={2} value={"Dólar"} label="Dólar"></Picker.Item>
        <Picker.Item key={3} value={"Real"} label="Real"></Picker.Item>
        <Picker.Item key={4} value={"Euro"} label="Euro"></Picker.Item>
      </Picker>

      <View style={styles.button}>
        <Button title="Converter" onPress={() => converterMoeda(valor, origem, destino)}></Button>
      </View>

      <Text style={styles.resultado}>Resultado: {valorConvertido.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#',
    padding: 10,
    marginTop: 20
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#da1a29',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#da1a29',
    marginBottom: 20,
  },
  inputs: {
    border: "solid thin gray",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20
  },
  button: {
    margin: 22,
  },
  resultado: {
    maxWidth: 300,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'green'
  }
});
