import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight, ScrollView, FlatList} from 'react-native';

import { Colors } from '../assets/Colors';

const Desk = ({cartas,handleHit, handleStop}) => {
  
    
  return ( <> 
 {/* FlatList es la manera optima de mostrar una lista de elementos. pero tendrias que modificar el state de CARTAS para agregar el id de cada carta, ademas de invocar otro paquete como nanoID y todas las dependencias adicionales.  */}
    {/* <View>
      <FlatList
      data= {cartas}
      renderItem={(carta,index)=>{
        return(
          <View key={index} style={{marginHorizontal: 10}}>
          <Image  style={styles.cartita} source={{uri: carta.image}}/>
          <Text>{carta.value}</Text>
          <Text>{carta.suit}</Text>
          </View>
        )
      }}
      />
    </View> */}

    <View style={styles.mazo}>
  {cartas.map((carta,index)=>{
          return(
            <View key={index} style={{marginHorizontal: 10}}>
            <Image  style={styles.cartita} source={{uri: carta.image}}/>
            <Text style={styles.textCartita}>{carta.value}</Text>
            <Text style={styles.textCartita}>{carta.suit}</Text>
            </View>
          )
        })}
    </View> 
    <View style={styles.botonesContainer}>
    <View>
        <TouchableHighlight style={styles.btn} onPress={handleHit}>
          <Text style={styles.btnText}>Hit me</Text>
        </TouchableHighlight>
      </View>
    
      <View>
        <TouchableHighlight style={styles.btn} onPress={handleStop}>
          <Text style={styles.btnText}>Pará boludo</Text>
        </TouchableHighlight>
      </View>
    </View>
    </>
    
    );
}

const styles = StyleSheet.create({
    cartita:{
        width: 80,
        height: 110,
        justifyContent: 'center',
      },
      mazo:{
        flexDirection: 'row',
        marginHorizontal: '2%'
      },
      botonesContainer:{
        flexDirection: 'row',
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
    },
    textCartita:{
      fontSize: 16,
      color: Colors.textColor,
      textAlign: 'center',
      fontStyle: 'italic',
    },
});

export default Desk;