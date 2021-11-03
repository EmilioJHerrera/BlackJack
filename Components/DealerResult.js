import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

const DealerResult = ({acumulador}) => {
    
    const [dealer, setDealer] = useState(0); 
    const [winner, setWinner] = useState("");    
    const numeroCualquiera = (min, max) =>{
        return Math.floor(Math.random() * (max - min)) + min;
    }
    
    const llamarDealer = () => {
        setDealer(numeroCualquiera(18, 23));
  }
  
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
  
  
  useEffect(()=> {llamarDealer(),calcularGanador()}, []);
  useEffect(()=> {calcularGanador()}, [acumulador]);
  return ( <View>
    
    <Text>Dealer:{dealer}</Text>
    <Text>Usted:{acumulador}</Text>
    <Text>{winner}</Text>
    

    </View> );
}

const styles = StyleSheet.create({

});
export default DealerResult;