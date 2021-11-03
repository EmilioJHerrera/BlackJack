import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

const Instruccion = ({setShowInstruccion}) => {
    return ( <View>
<View>
    <Text>Bienvenido a Blackjack.</Text>
    <Text>El objetivo del juego es llegar a 21 puntos sin sobrepasar dicho valor.</Text>
    <Text>El jugador que sobrepase 21 puntos pierde.</Text>
    <Text>El rey, reina y sota valen 10ptos, los ases valen 1.</Text>
    <Text>Presiona "hit me" para pedir otra carta.</Text>
    <Text>Presiona "Pará boludo" para mostrar tus cartas y ver las del dealer.</Text>
    <Text>¿Estás preparado?</Text>

    <TouchableHighlight onPress={()=>{setShowInstruccion(false)}}>
        <Text>Jugar</Text>
    </TouchableHighlight>

</View>

    </View> );
}
 
export default Instruccion;