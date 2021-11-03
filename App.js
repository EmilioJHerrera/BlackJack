import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

import axios from 'axios';

import Desk from './Components/Desk';
import Instruccion from './Components/Instruccion';
import DealerResult from './Components/DealerResult';

export default function App() {
  
  const [cartas, setCartas] = useState([]);
  const [shuffle, setShuffle] = useState('');
  const [acumulador, setAcumulador] = useState(0);

  const [showInstruccion, setShowInstruccion] = useState(true);

  useEffect(()=>{
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
    
     
     consultaBaraja();
    },[]);
    
    useEffect(()=>{console.log("acumulador:", acumulador)},[acumulador]);
    
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
  
  return (
    <View style={styles.container}>
      <Text>mi blackjack</Text>
     
    {showInstruccion? <Instruccion setShowInstruccion={setShowInstruccion}/>: null}

    {!showInstruccion &&
        <View>
          <View>
          <Desk cartas={cartas} handleHit={handleHit} handleStop={handleStop}/>
          </View>

          <View>
            {/* <Text>{acumulador}</Text> */}
            <DealerResult acumulador={acumulador}/>
          </View>
        </View>
  }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartita:{
    width: 70,
    height: 100,
  },
  
});
