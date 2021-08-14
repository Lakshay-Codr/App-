import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, } from 'react-native';
import BasicButton from './basicbutton';
import LoginSignUpBtn from './Loginsignupbutton';
import {Picker} from '@react-native-picker/picker';
import ValidationComponent from 'react-native-form-validator';
import { reduce } from 'async';
import ORDivider from './Ordivider';
import SnackBar from './Snackbar';
import { Audio } from 'expo-av';
import firebase from './FirebaseAuthentication';

export default class Signup extends ValidationComponent{
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            password:"",
            confirmpassword:"",
            agegroup:"",
            SnackBarvisible:false,
            SnackBartype:"",
            SnackBartext:"",

        };
    }
    playaudio=async()=>{
        try{
            const soundobject=new Audio.Sound();
            await soundobject.loadAsync(require('../assets/ding2.mp3'))
            await soundobject.playAsync();
        }
        catch(error){}
    }
    displaysnakbar=(type,text)=>{
        this.setState({
            "SnackBartype":type,
            "SnackBartext":text,
            "SnackBarvisible":true,
        });
    }
    hideSnackBar=()=>{
        this.setState({
            "SnackBarvisible":false,


        });

    }
    handleregister=()=>{
        this.validate({
            name: {minlength:3, maxlength:7, required: true},
            email: {email: true,required:true},
            agegroup:{required:true},
            password:{required:true},
            confirmpassword:{required:true,equalPassword:this.state.password},
            phoneno:{required:true},
          });
          if(this.getErrorMessages()){
              this.displaysnakbar("error",this.getErrorMessages())
          }
          else{ 
          this.playaudio();
          firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                    .then((userCredential)=>{
                      var user = userCredential.user;
                      console.log(user)
                      this.displaysnakbar("sucess","LoginSucessful")
                  
                    })
                    .catch((error)=>{
                        this.displaysnakbar("error",this.getErrorMessages())

                    });
        }

         
    }
    render(){
        return(
            <>
            <ScrollView style={css.container}>
            <Text style={css.title}>Sign Up</Text>
            <View style={css.form}>
                <Text style={css.label}>Name</Text>
                <TextInput
                    style={css.inputfield} 
                    placeholder="Enter Your Email ID"
                    placeholderTextColor='#263238'
                    onChangeText={(name)=>{this.setState({name})}}
                    value={this.state.name}
                    
                >

                </TextInput>
                    <View style={css.divider}></View>
                <Text style={css.label}>Email Address</Text>
                <TextInput
                    style={css.inputfield} 
                    placeholder="Enter Your Password"
                    placeholderTextColor='#263238'
                    
                    onChangeText={(email)=>{this.setState({email})}}
                    value={this.state.email}
                >


                    

                </TextInput>
                    <View style={css.divider}></View>
                    <Text style={css.label}>Age Group</Text>
                    <Picker
                    style={css.inputfield}
                        selectedValue={this.state.agegroup}
                        onValueChange={(agegroup, itemIndex) =>
                            this.setState({agegroup})
                        }>
                        <Picker.Item label="" value="" />
                        <Picker.Item label="1-4" value="1-4" />
                        <Picker.Item label="5-12" value="5-12" />
                        <Picker.Item label="13-18" value="13-18" />
                        </Picker>



                    <View style={css.divider}></View>
                <Text style={css.label}>Password</Text>
                <TextInput
                    style={css.inputfield} 
                    placeholder="Enter Your Password"
                    placeholderTextColor='#263238'
                    secureTextEntry
                    onChangeText={(password)=>{this.setState({password})}}
                    value={this.state.password}
                >

                </TextInput>
                <View style={css.divider}></View>

                <Text style={css.label}>Confirm Password</Text>
                <TextInput
                    style={css.inputfield} 
                    placeholder="Enter Your Password"
                    placeholderTextColor='#263238'
                    secureTextEntry
                    onChangeText={(confirmpassword)=>{this.setState({confirmpassword})}}
                    value={this.state.confirmpassword}
                >

                </TextInput>
            </View>
            <BasicButton text="Register" onPress={this.handleregister}></BasicButton>
            <ORDivider></ORDivider>

            


            <LoginSignUpBtn 
            text="Already have an account "
            btnText="Sign Up"
            onPress={this.handlesignin}
            customStyle={css.signin}
            ></LoginSignUpBtn>

        </ScrollView>
        {
            this.state.SnackBarvisible?
            <SnackBar
                isVisible={this.state.SnackBarvisible}
                text={this.state.SnackBartext}
                type={this.state.SnackBartype}
                onClose={this.hideSnackBar}
            ></SnackBar>:null
        }
        </>
        );
    }
}



const css=StyleSheet.create({
    container:{
        flex:1,
        margin:60,
        paddingHorizontal:30,
        
        
         
    },
    title:{
        fontWeight:'500',
        fontSize:30,
        letterSpacing:0.2,
        textAlign:'center',
    },
    form:{
        marginVertical:35,
        borderWidth:5,
        borderRadius:10,
        padding:20,
        backgroundColor:"#e040fb",
    },
    label:{
        fontSize:16,
        lineHeight:18,
        marginBottom:5,

    },
    inputfield:{
        fontSize:14,
        borderBottomWidth:1,
        paddingVertical:6,
        
    },
    divider:{
        paddingVertical:12,

    },
    signin:{
        marginVertical:40,

    },
    log:{
        textAlign:'center',
        color:"red",
        marginVertical:5,
    }
});