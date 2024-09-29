import React from 'react';
import { View, Text, Image } from 'react-native';
import logoCadeado from '../../../assets/logopass.png'
import { styles } from './LogoStyle';

export function Logo() {
  return (
    <>
        <Text style={styles.title}>PASS GENERATOR</Text>
        <Image 
        source= {logoCadeado}
        style={{
            resizeMode: 'contain',
            height: 280,
        }}
       />

    </>
  );
}