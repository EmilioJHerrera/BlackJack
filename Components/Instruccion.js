import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

import { Colors } from '../assets/Colors';

const Instruccion = ({setShowInstruccion}) => {
    return ( <View >
<View >
    <Text style={styles.title}>Bienvenido a Blackjack.</Text>
    <Text style={styles.text}>El objetivo del juego es llegar a 21 puntos sin sobrepasar dicho valor.</Text>
    <Text style={styles.text}>El jugador que sobrepase 21 puntos pierde.</Text>
    <Text style={styles.text}>El rey, reina y sota valen 10ptos, los ases valen 1.</Text>
    <Text style={styles.text}>Presiona "hit me" para pedir otra carta.</Text>
    <Text style={styles.text}>Presiona "Pará boludo" para mostrar tus cartas y ver las del dealer.</Text>
    <Text style={styles.text}>¿Estás preparado?</Text>

    <TouchableHighlight onPress={()=>{setShowInstruccion(false)}} style={styles.btn}>
        <Text style={styles.btnText}>Jugar</Text>
    </TouchableHighlight>

</View>

    </View> );
}

const styles = StyleSheet.create({
    title:{
        color: Colors.textColor,
        fontSize: 20,
        textAlign: 'center',
        marginBottom: '1.5%'
    },
    text:{
        color: Colors.textColor,
        fontSize: 16
    },
    btn:{
        backgroundColor: Colors.btnBackground,
        padding: 10,
        marginHorizontal: '2%',
        marginVertical: '10%',
        borderRadius: 10,
        alignItems: 'center',
    },
    btnText:{
        textTransform: 'uppercase',
        fontSize: 16,
        color: 'black'
    }

    }
);
 
export default Instruccion;