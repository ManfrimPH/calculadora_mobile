import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [display, setDisplay] = useState('0');

  const handlePress = (label) => {
    if (label === 'C') {
      setDisplay('0');
      return;
    }

    if (label === '√') {
      try {
        const valorAtual = eval(display.replace(/x/g, '*').replace(/%/g, '/'));
        if (valorAtual < 0) {
          setDisplay('0'); 
        } else {
          const resultado = Math.sqrt(valorAtual);
          setDisplay(String(Number(resultado.toFixed(8))));
        }
      } catch (e) {
        setDisplay('0');
      }
      return;
    }

    if (label === '=') {
      try {
        let operacao = display.replace(/x/g, '*').replace(/%/g, '/');
        const resultado = eval(operacao);
        setDisplay(String(Number(resultado.toFixed(8))));
      } catch (e) {
        setDisplay('0');
      }
      return;
    }

    const operadores = ['+', '-', 'x', '%'];
    const ultimoChar = display.slice(-1);

    if (operadores.includes(label)) {
      if (display === '0' && label !== '-') return;
      if (operadores.includes(ultimoChar)) {
        setDisplay(display.slice(0, -1) + label);
        return;
      }
    }

    if (display === '0' && !isNaN(label)) {
      setDisplay(label);
    } else {
      setDisplay(display + label);
    }
  };

  const Botao = ({ label, style }) => (
      <TouchableOpacity 
        style={[styles.botao, style]} 
        onPress={() => handlePress(label)}
      >
        <Text style={[styles.textoBotao, style === styles.especial ? {color: 'black'} : {color: 'white'}]}>
          {label}
        </Text>
      </TouchableOpacity>
    );

  return (
    <SafeAreaView style={styles.allbox}>
      <View style={styles.linhaconta}>
        <Text style={styles.textoResultado}>{display}</Text>
      </View>

      <View style={styles.teclado}>
        <View style={styles.linha}>
          <Botao label="1"/>
          <Botao label="2"/>
          <Botao label="3"/>
          <Botao label="-" style={styles.operador}/>
        </View>

        <View style={styles.linha}>
          <Botao label="4"/>
          <Botao label="5"/>
          <Botao label="6"/>
          <Botao label ="+"style={styles.operador}/>
        </View>

        <View style={styles.linha}>
          <Botao label="7"/>
          <Botao label="8"/>
          <Botao label="9"/>
          <Botao label="x" style={styles.operador}/>
        </View>

        <View style={styles.linha}>
          <Botao label="C"style={styles.especial}/>
          <Botao label="0"/>
          <Botao label="."style={styles.especial}/>
          <Botao label="%"style={styles.operador}/>
        </View>

        <View style={styles.linha}>
          <Botao label="="style={styles.igual}/>
          <Botao label="√"style={styles.operador}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  allbox: {
    backgroundColor: "black",
    flex: 1,
  },
  linhaconta: {
    flex: 1, 
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 20,
  },
  textoResultado: {
    color: 'white',
    fontSize: 80,
    fontWeight: '300',
  },
  teclado: {
    flex: 2,
    paddingBottom:20,
  },
  linha: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  botao: {
    backgroundColor: "gray",
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems:'center'
  },
  textoBotao:{
    fontSize: 30,
    fontWeight:'500'
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
    width:280
  }
});