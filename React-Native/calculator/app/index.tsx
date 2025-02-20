import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import Botao from "./Botao";

export default function Index() {

  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [signal, setSignal] = useState("");

  const [stringCalculo, setStringCalculato] = useState("0");

  var numbers = [];

  for (var i = 0; i <= 9; i++) {
    numbers.push(i);
  }

  function calculo(n) {
    if (signal == "") {
      setFirstNumber(parseInt(firstNumber.toString() + n.toString()));
      setStringCalculato(parseInt(firstNumber.toString() + n.toString()));
    }

    if ((n == "+" || n == "-" || n == "*" || n == "/") && secondNumber == 0) {
      setStringCalculato(firstNumber.toString() + n);
      setSignal(n);
    }

    if (signal != "") {
      setSecondNumber(parseInt(secondNumber.toString() + n.toString()));
      setStringCalculato(firstNumber + signal + parseInt(secondNumber.toString() + n.toString()));
    }

    if (n == "=") {
      let resultado = 0;
      if (signal == "+") {
        resultado = firstNumber + secondNumber;
      }
      if (signal == "-") {
        resultado = firstNumber - secondNumber;
      }
      if (signal == "*") {
        resultado = firstNumber * secondNumber;
      }
      if (signal == "/") {
        resultado = firstNumber / secondNumber;
      }
      setStringCalculato(resultado);
      setSignal("");
      setFirstNumber(resultado);
      setSecondNumber(0);
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <StatusBar hidden />
      <View style={styles.topo} >
        <Text style={{ fontSize: 50, color: 'white' }}>
          {stringCalculo}
        </Text>
      </View>

      <View style={{ flexDirection: 'row', height: '16%' }}>
        <TouchableOpacity onPress={() => calculo('+')} style={styles.bntCalculo} ><Text style={styles.btnText}>+</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => calculo('-')} style={styles.bntCalculo} ><Text style={{ fontSize: 40, color: "white" }}>-</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => calculo('/')} style={styles.bntCalculo} ><Text style={styles.btnText}>/</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => calculo('*')} style={styles.bntCalculo} ><Text style={styles.btnText}>*</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => calculo('=')} style={styles.bntCalculo} ><Text style={styles.btnText}>=</Text></TouchableOpacity>
      </View>

      <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', borderTopColor: 'white', borderTopWidth: 1, height: '66.8%' }}>
        {
          numbers.map(function (e) {
            return (<Botao calculo={calculo} number={e}></Botao>);
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topo: {
    backgroundColor: 'rgb(20,20,20)',
    height: '16.6%',
    justifyContent: 'center',
    paddingLeft: 20
  },
  bntCalculo: {
    width: '20%',
    backgroundColor: 'rgb(20,20,20)',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  btnText: {
    fontSize: 24,
    color: 'white'
  }
});
