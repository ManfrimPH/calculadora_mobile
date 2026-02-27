import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.allbox}>
      <View style={styles.linhaconta}>
        <Text style={styles.textoResultado}>0</Text>
      </View>

      <View style={styles.teclado}>
        <View style={styles.linha}>
          <Text style={styles.botao}>1</Text>
          <Text style={styles.botao}>2</Text>
          <Text style={styles.botao}>3</Text>
          <Text style={[styles.botao, styles.operador]}>-</Text>
        </View>

        <View style={styles.linha}>
          <Text style={styles.botao}>4</Text>
          <Text style={styles.botao}>5</Text>
          <Text style={styles.botao}>6</Text>
          <Text style={[styles.botao, styles.operador]}>+</Text>
        </View>

        <View style={styles.linha}>
          <Text style={styles.botao}>7</Text>
          <Text style={styles.botao}>8</Text>
          <Text style={styles.botao}>9</Text>
          <Text style={[styles.botao, styles.operador]}>×</Text>
        </View>

        <View style={styles.linha}>
          <Text style={[styles.botao, styles.especial]}>C</Text>
          <Text style={styles.botao}>0</Text>
          <Text style={[styles.botao, styles.igual]}>=</Text>
          <Text style={[styles.botao, styles.operador]}>÷</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  allbox: {
    backgroundColor: "black",
    flex: 1,
    padding: 10,
  },
  linhaconta: {
    flex: 2, 
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  textoResultado: {
    color: 'white',
    fontSize: 100,
    fontWeight: '300',
  },
  teclado: {
    flex: 3,
  },
  linha: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  botao: {
    backgroundColor: "gray",
    color: "white",
    width: 80,
    height: 80,
    borderRadius: 40,
    textAlign: "center",
    lineHeight: 80, 
    fontSize: 30,
    fontWeight: '500',
    overflow: 'hidden',
  },
  operador: {
    backgroundColor: 'orange',
  },
  especial: {
    backgroundColor: 'white',
    color: 'black',
  },
  igual: {
    backgroundColor: 'green',
  }
});