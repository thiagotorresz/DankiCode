import { Text, View, ScrollView, Button, Platform } from "react-native";
import React from "react";
import { Image } from 'expo-image';
import Header from "./components/Header";
import Body from "./components/Body";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    
  }

  mostrarConteudo() {
    return (
      <View>
        <Header></Header>
        <Body></Body>

      </View>
    )
  }
  render() {

    return (
      <ScrollView style={{ marginTop: 10, flex: 1 }}>
        {
          this.mostrarConteudo()
        }
      </ScrollView>
    );
  }
}
