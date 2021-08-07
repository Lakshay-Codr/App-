import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';
import Signup from './components/Signup';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './components/Navigation';
import Tabnavigation from './components/Tabnavigation';
import Drawernavigator from './components/Drawer';

export default function App() {
  return (
    
     <NavigationContainer>
        {/* <Navigation>
          
        </Navigation> */}
        {/* <Tabnavigation></Tabnavigation> */}
        <Drawernavigator></Drawernavigator>
     </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
