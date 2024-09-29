import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View,} from 'react-native';
import {Menu} from './src/components/Menu/Menu';
import {Logo} from './src/components/Logo/Logo';
import { ButtonCopy } from './src/components/ButtonCopy/ButtonCopy';

export default function App() {
  return (
    <View style={styles.container}>
      <View style = {styles.logoContainer}>
        <Logo/>
      </View>
        
       <View style={styles.containerView}>
        <ButtonCopy/>
       </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0EBEF',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'blue'
  },
  logoContainer:{
    flexDirection: 'column',
    borderWidth: 2,
    borderColor: '#E0EBEF',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 9,
    paddingTop: 20
  },
  containerView:{
    flexDirection: 'column',
    width:'90%',
    borderWidth: 2,
    borderColor: '#E0EBEF',
    justifyContent: 'center',
    alignSelf: 'center'
  }
});
