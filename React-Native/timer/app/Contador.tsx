import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';

export default function Contador(props) {
  let done = false;

  function addSegundos() {
    props.setarSegundos(prevSegundos => {
      const novoSegundos = prevSegundos + 30;
      if (novoSegundos > 59) {
        
        props.setarMinutos(prevMin => prevMin + Math.floor(novoSegundos / 60));
        return novoSegundos % 60; 
      }
      return novoSegundos;
    });
  }

  useEffect(() => {
    const timer = setInterval(() => {
      props.setarSegundos(prevSegundos => {
        if (prevSegundos > 0) {
          return prevSegundos - 1;
        } else {
          if (props.minutos > 0) {
            props.setarMinutos(prevMin => prevMin - 1);
            return 59;
          } else {
            if (!done) {
              done = true;
              props.setarEstado('selecionar');
              props.setarMinutos(0);
              props.setarSegundos(1);
              playSound();
            }
            return 0;
          }
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [props.segundos]);

  async function playSound() {
    try {
      const soundObject = new Audio.Sound();
      const alarmeSelecionado = props.alarmes.find(val => val.selecionado)?.file;
      if (alarmeSelecionado) {
        await soundObject.loadAsync(alarmeSelecionado);
        await soundObject.playAsync();
      }
    } catch (error) {
      console.log('Erro ao tocar o som:', error);
    }
  }

  function resetar() {
    props.setarEstado('selecionar');
    props.setarMinutos(0);
    props.setarSegundos(1);
  }

  function formatarNumero(number) {
    return number < 10 ? `0${number}` : number;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <LinearGradient
        colors={['rgb(1, 66, 23)', 'rgba(3, 90, 32, 0.8)']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '100%'
        }}
      />

      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.textContador}>{formatarNumero(props.minutos)} : </Text>
        <Text style={styles.textContador}>{formatarNumero(props.segundos)}</Text>
      </View>

      <TouchableOpacity onPress={resetar} style={styles.btnIniciar}>
        <Text style={{ textAlign: 'center', color: 'white', fontSize: 20 }}>Resetar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={addSegundos} style={styles.btnIniciar}>
        <Text style={{ textAlign: 'center', color: 'white', fontSize: 20 }}>+ 30s</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textContador: {
    color: 'white',
    fontSize: 40
  },
  btnIniciar: {
    backgroundColor: 'rgb(10, 119, 37)',
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 30,
    borderColor: 'white',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
