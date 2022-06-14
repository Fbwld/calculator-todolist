import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import CalculatorBody from './src/components/CalculatorBody';
// import Home from './src/components/Home';
// import ImgHi from './src/components/ImgHi';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, extendTheme } from "native-base";
import Navigation from './src/routers';
import {firebase} from './firebase'


export default function App() {
  
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <View style={styles.container}>
          <Navigation/>
        </View>
    </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA0A0',
    // alignItems: 'center',
    // justifyContent: 'center',
},
});
