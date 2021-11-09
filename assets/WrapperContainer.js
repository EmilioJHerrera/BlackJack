import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import { Colors } from '../assets/Colors';

//sólo se usa para ejecutar la consigna del wrapper

const WrapperContainer = props => (
        <View style={{...styles.container, ...props.style}}>
            {props.children}
        </View>
    
)

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'green',
        padding: '2.5%'
    },
});
 
export default WrapperContainer;