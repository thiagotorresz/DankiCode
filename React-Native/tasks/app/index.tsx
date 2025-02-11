import { Text, View, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar'

export default function Index() {

  const image = require('../resource/bg.jpg');

  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      tarefa: "Preparar marmita",
    },
    {
      id: 2,
      tarefa: "Trocar de roupa",
    },
    {
      id: 3,
      tarefa: "Ir treinar",
    }
  ]);

  function deletarTarefa(id) {
    setTarefas(tarefas.filter(function (val) {
      return val.id != id;
    }))
  }
  return (
    <ScrollView style={{ flex: 1 }}>
      <StatusBar hidden />
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
  }
})