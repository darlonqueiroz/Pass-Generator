import React from 'react';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  boxContainer:{
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    height:124,
    padding: 20,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
    container: {
       borderRadius: 5,
       width: '80%',
       height:98,
       
    },
    copyPass:{
      width: '100%',
      backgroundColor:'gray',
      color: 'white',
      borderRadius: 5,
      padding: 10,
      fontWeight: 'bold'
    },
    CharacterPass:{
    color: "black",
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 35
    }
  });
