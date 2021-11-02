import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';

const Desk = ({cartas,handleHit, handleStop}) => {
  
    
  return ( <> 
    <View>
  {cartas.map((carta,index)=>{
          return(
            <View key={index}>
            <Text>{carta.value}</Text>
            <Text>{carta.suit}</Text>
            <Image  style={styles.cartita} source={{uri: carta.image}}/>
            </View>
          )
        })}
    </View> 
    
    <View>
        <TouchableHighlight style={styles.btn} onPress={handleHit}>
          <Text>Hit me</Text>
        </TouchableHighlight>
      </View>
    
      <View>
        <TouchableHighlight style={styles.btn} onPress={handleStop}>
          <Text>Pará boludo</Text>
        </TouchableHighlight>
      </View>
    
    </>
    
    );
}

const styles = StyleSheet.create({
    cartita:{
        width: 70,
        height: 100,
      },
      btn:{
          backgroundColor: '#FA43fE',
          margin: 10,
      },
});

export default Desk;