import { Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";

export default function Botao(props) {

  return (
    <View style={{ width: '33.3%', backgroundColor: 'rgb(20,20,20)', justifyContent: 'center', alignItems: 'center', height: '25%'}}>
      <TouchableOpacity onPress={() => props.calculo(props.number)} ><Text>{props.number}</Text></TouchableOpacity>
    </View>
  );
}
