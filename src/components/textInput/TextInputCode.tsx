import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './TextInputStyle';
interface TextInputProps{
  pass:string
}

export function TextInputCode(props : TextInputProps) {
  return (
    <View style={styles.InputContainer}>
      <TextInput 
      placeholder = 'Password'
      value ={props.pass}>
      
      </TextInput>
    </View>
  );
}