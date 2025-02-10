import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

export default function Index() {

  const [estado, setEstado] = useState('leitura');
  const [anotacao, setAnotacao] = useState('Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quia, repellat omnis provident cum doloremque sed eveniet, enim cupiditate incidunt amet, magnam porro atque a odit libero reiciendis deleniti alias.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ducimus ullam laudantium, molestias nihil esse delectus, dolorem adipisci cumque repudiandae numquam iusto quis nostrum tenetur assumenda unde minus facilis quasi?');

  if (estado == 'leitura') {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}><Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>APLICATIVO ANOTAÇÃO</Text></View>
        
        <View style={styles.anotacao}><Text style={{fontSize: 13, textAlign: 'justify'}}>{anotacao}</Text></View>

        <TouchableOpacity style={styles.btnAnotacao} onPress={() => setEstado('atualizando')}><Text style={{color: 'white', fontSize: 35}}>+</Text></TouchableOpacity>

      </View>
    );
  }else if(estado == 'atualizando'){
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.header}><Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>APLICATIVO ANOTAÇÃO</Text></View>
        

        <TouchableOpacity style={styles.btnAnotacao} onPress={() => setEstado('leitura')}><Text style={{color: 'white', fontSize: 11, fontWeight: 'bold'}}>SALVAR</Text></TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    width: '100%',
    padding: 10,
    backgroundColor: '#069',
  }, 
  anotacao:{
    padding: 20,
  },
  btnAnotacao:{
    backgroundColor: '#069',
    borderRadius: 50,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    position: 'absolute',
    bottom: 20,
    right: 20
  }
});