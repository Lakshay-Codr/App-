import React,{useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Signup from './Signup';
const Stack = createNativeStackNavigator();
export default function Navigation(){
    return(
            <Stack.Navigator initialRouteName="login">
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={Signup} />
      </Stack.Navigator> 


    );
}