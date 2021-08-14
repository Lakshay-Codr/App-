import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Login from './Login';
import Signup from './Signup'; 


const Drawer=createDrawerNavigator();

export default function Drawernavigator() {
  return (
      <Drawer.Navigator>
        <Drawer.Screen name="Sign Up" component={Signup} />
        <Drawer.Screen name="Log In" component={Login} />

      </Drawer.Navigator>
    
  );
}
