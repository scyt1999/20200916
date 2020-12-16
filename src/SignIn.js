import React, {useState,useEffect, useContext} from 'react';
import {Button, View, Text, TextInput } from 'react-native';
import * as firebase from 'firebase';
import * as FirebaseCore from 'expo-firebase-core';
import {AuthContext} from '../src/account/AuthContext';


import styles from './styles';

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const authContext = useContext(AuthContext);
  if (!firebase.apps.length) {
    firebase.initializeApp(FirebaseCore.DEFAULT_WEB_APP_OPTIONS);
  }
  async function signIn(){
    try {
      const res= await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log('User login successfully!');
      if(res) {
        authContext.setStatus(true);

      }
      setEmail('');
      setPassword('');
      setMessage('');
    }
    catch(error){
        console.log('err sign in', error)
      setMessage(error.message);
    } 
   };

   

  return(
    <View style={styles.form}>  
      <TextInput
        style={styles.inputStyle}
        placeholder="電子信箱"
        value={email}
        onChangeText={text=>setEmail(text)}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder="密碼"
        value={password}
        onChangeText={text=>setPassword(text)}
        maxLength={15}
        secureTextEntry={true}
      />   
      <Button
        title="登入"
        onPress={signIn}
      />
      <Text>{message}</Text>
      <Text>
        尚未註冊，我要註冊
      </Text>

    </View>
  )
}