import React from 'react';
import { View, Text } from 'react-native';
import Slider  from '@react-native-community/slider';
import { styles } from './SliderChoiceStyle';

export function SliderChoice() {
  return (
    <View style={styles.numberQuanty}>

        <View>
        <Text>
                Number of Character
        </Text>
 <Slider style={styles.numberQuanty}/>
 </View>
  </View>);
  }