import React from 'react';
import { Button, View, Pressable, Text } from 'react-native';
import { styles } from './ButtonCopyStyle';
import { useState } from 'react';
import {TextInputCode} from '../textInput/TextInputCode';
import generatePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';
import { SliderChoice} from '../SliderChoice/SliderChoice'

export function ButtonCopy() {
  const[pass, setPass] = useState('')
  function handleGenerationButton(){
    let generateToken = generatePass
      setPass(generateToken)
  }
  function handleCopyButton(){
    Clipboard.setStringAsync(pass)
  }
  return (
    
    <><View style={styles.boxContainer}>
      <TextInputCode
        pass={pass} />
    </View>
    <View>
      <SliderChoice/>
        <Button
          style={styles.container}
          onPress={handleGenerationButton}
          title='GENERATOR'
          accessibilityLabel='Gerar' />

        <Pressable
          onPress={handleCopyButton}
        >
          <Text style={styles.copyPass}>
            COPY
          </Text>
        </Pressable>
      </View></>
      
  );
}