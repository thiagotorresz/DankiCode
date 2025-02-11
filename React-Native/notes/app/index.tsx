import { Text, View, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {

  const [estado, setEstado] = useState('leitura');
  const [anotacao, setAnotacao] = useState('');

  useEffect(() => {

    (async () => {
      try {
        const anotacaoLeitura = await AsyncStorage.getItem('anotacao');
        setAnotacao(anotacaoLeitura);
      } catch (error) { }
    })();

  }, [])

  setData = async () => {
    try {
      await AsyncStorage.setItem('anotacao', anotacao);

      alert('Anotação salva com sucesso!');
    } catch (e) {
      console.log('Erro ao salvar anotação');
    }
  }

  function atualizarAnotacao() {
    setEstado('leitura');
    setData();
  }

  if (estado == 'leitura') {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden />
        <View style={styles.header}><Text style={{ color: 'white', fontSize: 23, textAlign: 'center', fontWeight: 'bold' }}>APLICATIVO ANOTAÇÃO</Text></View>

        {
          (anotacao != '') ?
            <View style={styles.anotacao}><Text style={{ fontSize: 17, textAlign: 'justify' }}>{anotacao}</Text></View>
            :
            <View style={styles.anotacao}><Text style={{ fontSize: 17, opacity: 0.5 }}>Nenhuma anotação encontrada :(</Text></View>
        }

        {
          (anotacao != '') ?
            <TouchableOpacity style={styles.btnAdd} onPress={() => setEstado('atualizando')}><Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>EDITAR</Text></TouchableOpacity>
            :
            <TouchableOpacity style={styles.btnAdd} onPress={() => setEstado('atualizando')}><Text style={{ color: 'white', fontSize: 35 }}>+</Text></TouchableOpacity>
        }

      </View>
    );
  } else if (estado == 'atualizando') {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden />
        <View style={styles.header}><Text style={{ color: 'white', fontSize: 23, textAlign: 'center', fontWeight: 'bold' }}>APLICATIVO ANOTAÇÃO</Text></View>

        <TextInput autoFocus={true} onChangeText={(text) => setAnotacao(text)} multiline={true} value={anotacao} style={{ height: 300, verticalAlign: 'top', fontSize: 17, textAlign: 'justify', padding: 20 }}></TextInput>

        <TouchableOpacity style={styles.btnSave} onPress={() => atualizarAnotacao()} ><Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>SALVAR</Text></TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    padding: 25,
    backgroundColor: '#333',
  },
  anotacao: {
    padding: 20,
  },
  btnAdd: {
    backgroundColor: '#127',
    borderRadius: 50,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    position: 'absolute',
    bottom: 20,
    right: 20
  },
  btnSave: {
    backgroundColor: '#666',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 50,
    position: 'absolute',
    bottom: '40%',
    right: 20
  }
});