import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { Text, View } from 'react-native';
import Signup from './Signup';
import Login from './Login';
const Tab = createBottomTabNavigator();

export default function Tabnavigation(){
    return(
        <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Signup" component={Signup} />
      </Tab.Navigator>
    );
}