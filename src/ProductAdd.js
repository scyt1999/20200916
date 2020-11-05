import React, {useState} from 'react';
import { Button, Modal, TextInput, View, StyleSheet } from 'react-native';
import * as firebase from 'firebase';
import {config} from '../firebase_config';


export default function ProductAdd(props){
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");

    if (!firebase.apps.length) {

        firebase.initializeApp(FirebaseCore.DEFAULT_WEB_APP_OPTIONS);
    
      } 
    
      const db = firebase.firestore();

    async function update(){
        try {

            const docRef = await db.collection("product").add({
      
              desc: desc,
      
              price: parseInt(price)
      
            });
      
            console.log(docRef.id);
      
            setDesc("");
      
            setPrice("");
      
            props.update();
      
          }
      
          catch(error) {
      
            console.error("Error adding document: ", error);
      
          }
        // props.update({desc,price});
        // props.setModalVisible(false)
    }

    function cancel(){

        setDesc("");
    
        setPrice("");
    
        props.update();
    
      }


    return(
        <Modal visible={props.modalVisible}>
        <View style={styles.container}>
            <TextInput placeholder="產品說明" value={desc} onChangeText={text=>setDesc(text)}/>
            <TextInput placeholder="價格" value={price} onChangeText={text=>setPrice(text)}/>
            <Button onPress={update} title="新增"></Button>
            <Button onPress={cancel} title="返回上一頁"/>
        </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  