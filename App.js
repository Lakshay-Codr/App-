import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import Signup from './components/Signup';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './components/Navigation';


export default function App() {
  return (
    <View style={styles.container}>
     <NavigationContainer>
        <Navigation>
          
        </Navigation>
     </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
