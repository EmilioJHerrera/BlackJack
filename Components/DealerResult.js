import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import { Colors } from '../assets/Colors';

const DealerResult = ({acumulador}) => {
    
    const [dealer, setDealer] = useState(0); 
    const [winner, setWinner] = useState("");    

// funcion para un numero entero cualquiera
    const numeroCualquiera = (min, max) =>{
        return Math.floor(Math.random() * (max - min)) + min;
    }
// setea el valor del dealer    
    const llamarDealer = () => {
        setDealer(numeroCualquiera(18, 23));
  }
  
//calcula el ganador y lo setea en el state  
    const calcularGanador = () => {
        if ((dealer > acumulador) && (dealer <= 21)){
            setWinner("Dealer gana, la casa siempre gana!");
        } else if ((dealer < acumulador)&&(acumulador <= 21)){
            setWinner("En horabuena! Usted ha ganado");
        } else if ((dealer === acumulador)&&(acumulador <= 21)&&(dealer <= 21)){
            setWinner("Empate... triste, pero puede ocurrir");
        
            } else if ((dealer > 21)&&(acumulador <= 21)){
            setWinner("Usted invita los choris, el Dealer sobrepaso los 21");
            }else if ((dealer <= 21)&&(acumulador > 21)){
            setWinner("Te ganó el Dealer con cualquier cosa, te pasaste de 21");
            
        } else {
            setWinner("Intenten nuevamente");
        }
    }
  
//efecto para llamar al dealer y calcular el ganador en cada render
  useEffect(()=> {llamarDealer(),calcularGanador()}, []);
//efecto para calcular el ganador cada vez que se modifique el acumulador
  useEffect(()=> {calcularGanador()}, [acumulador]);
  return ( <View >
    
    <Text style={styles.text}>Dealer:{dealer}</Text>
    <Text style={styles.text}>Usted:{acumulador}</Text>
    <Text style={styles.text}>{winner}</Text>
    

    </View> );
}

const styles = StyleSheet.create({
    text: {
        color: Colors.textColor,
        fontSize: 20,
    },

});
export default DealerResult;