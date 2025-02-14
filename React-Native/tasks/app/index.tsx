import { Text, View, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Modal, TouchableHighlight, TextInput } from "react-native";
import React, { useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar'

export default function Index() {

  const image = require('../resource/bg.jpg');

  const [tarefas, setTarefas] = useState([
    {
      id: 0,
      tarefa: "Preparar marmita",
    },
  ]);

  const [tarefaAtual, setTarefaAtual] = useState("");

  const [modal, setModal] = useState(false);

  function deletarTarefa(id) {
    setTarefas(tarefas.filter(function (val) {
      return val.id != id;
    }))
  }

  function addTarefas() {

    setModal(!modal);

    alert(tarefaAtual);

    setTarefas([...tarefas, { id: tarefas.length + 1, tarefa: tarefaAtual }]);
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <StatusBar hidden />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          alert('Modal has been closed.');
          setModal(!modal);
        }}>

        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TextInput onChangeText={(text) => setTarefaAtual(text)} autoFocus={true}></TextInput>

            <TouchableHighlight
              onPress={() => addTarefas()} style={{ ...styles.button }}>
              <Text style={{color: "black", fontWeight: "bold", fontSize: 18}}>Adicionar Tarefa</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <ImageBackground source={image} style={styles.image}>
        <View style={styles.coverView}>
          <Text style={styles.textHeader}>To-Do List</Text>
        </View>
      </ImageBackground>

      {tarefas.map(function (val) {
        return (<View style={styles.tarefasSingle}>
          <View style={{ flex: 1, width: "100%", padding: 10 }}>
            <Text>{val.tarefa}</Text>
          </View>
          <View style={{ alignItems: "flex-end", flex: 1, padding: 10 }}>
            <TouchableOpacity onPress={() => deletarTarefa(val.id)}><AntDesign name="minuscircleo" size={24} color="black" /></TouchableOpacity>
          </View>
        </View>
        )
      })}

      <TouchableOpacity style={styles.addButton} onPress={() => setModal(true)} >
        <Text style={{ flex: 1, padding: 10, fontSize: 18, fontWeight: "bold",}}>ADICIONAR TAREFA</Text>  
        <AntDesign name="pluscircleo" size={43} color="black" />
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 95,
    resizeMode: "cover",
    justifyContent: "center",
  },
  coverView: {
    width: "100%",
    height: 95,
    resizeMode: "cover",
    backgroundColor: "rgba(0,0,0,0.4)"
  },
  textHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginTop: 40,
  },
  tarefasSingle: {
    width: "100%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 10
  },
  addButton: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 13,
    backgroundColor: "#ccc"  
  },
  // ESTILOS MODAL
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})