import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

import axios from 'axios';

import { useFonts } from 'expo-font';
import  AppLoading from 'expo-app-loading';

import Desk from './Components/Desk';
import Instruccion from './Components/Instruccion';
import DealerResult from './Components/DealerResult';

import { Colors } from './assets/Colors';

export default function App() {
  
 

  const [cartas, setCartas] = useState([]);
  const [shuffle, setShuffle] = useState('');
  const [acumulador, setAcumulador] = useState(0);
  const [isReset, setIsReset] = useState(false);
  const [showResult,isShowResult] = useState(false);
  const [showInstruccion, setShowInstruccion] = useState(true);

  //funcion para obtener las 2 cartas del dealer

  const consultaBaraja = async () => {
    const url = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1';
    const resultado = await axios.get(url);
    //obtener el id del shuffle
    setShuffle(resultado.data.deck_id);
     const url2 = `https://deckofcardsapi.com/api/deck/${resultado.data.deck_id}/draw/?count=2`;
     const resultado2 = await axios.get(url2);
     console.log(resultado2.data.cards);
     setCartas(resultado2.data.cards);
   //obtener las 2 cartas iniciales
  }

  useEffect(()=>{  
    
     consultaBaraja();
    },[]);
    
    useEffect(()=>{
      console.log("acumulador:", acumulador)
      consultaBaraja();
      //isShowResult(false);
      //setShowInstruccion(false)
    },[isReset]);
    
    const handleStop = () => {
    
    let contador= 0;
    for(let i=0; i<cartas.length; i++){
      if (cartas[i].value === 'KING' || cartas[i].value === 'QUEEN' || cartas[i].value === 'JACK') {
        contador += 10;
      } else if (cartas[i].value === 'ACE') {
        contador += 1;
      } else {
      contador= contador + parseInt(cartas[i].value);
      }

    }
    setAcumulador(contador);
    isShowResult(true);
    // console.log(contador)
  };

    const handleHit =() => {
      const nuevaCarta = async () => {
      const url3 = `https://deckofcardsapi.com/api/deck/${shuffle}/draw/?count=1`;
      const resultado3 =  await axios.get(url3);
      console.log(resultado3.data.cards);
      console.log( 'CARTAS',cartas);
      // setCartas([...cartas, resultado3.data.cards]);
      setCartas(cartas.concat( resultado3.data.cards));
      //NO SE PORQUE FUNCIONA Pero ya esta bien
      console.log("ACTUALIZADO", cartas.concat( resultado3.data.cards))
    }
    nuevaCarta();
    };

    //OJO DONDE SE COLOQUE ESTO!!!! SINO REACT CONVULSIONA POR LOS USEEFFECT
    const [loaded] = useFonts({
      'CevicheOne': require('./assets/fonts/CevicheOne-Regular.ttf'),
    });
    if (!loaded) {return <AppLoading />}
  
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Mi Blackjack</Text>
     
    {showInstruccion && <Instruccion setShowInstruccion={setShowInstruccion}/>}

    {!showInstruccion &&
        <View>
          <View>
          <Desk cartas={cartas} handleHit={handleHit} handleStop={handleStop}/>
          </View>

          <View>
           {showResult && 
            <DealerResult acumulador={acumulador} setAcumulador={setAcumulador} isReset ={isReset} setIsReset={setIsReset} isShowResult={isShowResult}/>
           }
           
          </View>
        </View>
  }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backGround,
   
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartita:{
    width: 70,
    height: 100,
  },
  textHeader:{
    fontFamily: 'CevicheOne',
    fontSize: 40,
    marginBottom: '10%',
    color: '#dFdFdF',
  }  
  
});
