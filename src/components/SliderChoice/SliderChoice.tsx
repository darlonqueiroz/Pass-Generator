import React from 'react';
import { View } from 'react-native';
import Slider  from '@react-native-community/slider';
import { styles } from './SliderChoiceStyle';

export function SliderChoice() {
  return (
    <View style={styles.ContainerStyle}>
 <Slider
        value={vertValue}
        onValueChange={setVertValue}
        maximumValue={50}
        minimumValue={20}
        step={1}
        orientation="vertical"
        thumbStyle={{ height: 20, width: 16, backgroundColor: 'transparent' }}
        thumbProps={{}
        children: (
            <><Icon
              name="heartbeat"
              type="font-awesome"
              size={20}
              reverse
              containerStyle={{ bottom: 20, right: 20 }}
              color="#f50" />

            </>)}
   
  );}