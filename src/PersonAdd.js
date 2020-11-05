import React, {useState} from 'react';

import { Button , TextInput, Modal } from 'react-native';
import styles from './styles';
import {url} from './config';
import { View } from 'native-base';
import axios from 'axios';




export default function PersonAdd(props) {

  const [name, setName] = useState("");

  const [city, setCity] = useState("");

  const [age, setAge] = useState(0);
  const axios_config = {
    headers: {'Authorization': 'Bearer keyV5ujcbHQp277ui'},
    'Content-Type': 'application/json'};


  const get_url=url+"?maxRecords=50&view=Grid%20view";

  async function sendData () {

    const newPerson={

      fields:{

        Name:name,

        City:city,

        Age:parseInt(age)

      }

    }

    //console.log(newPerson);

    try {

        const result = await axios.post(get_url,newPerson, axios_config);

        console.log(result);

        //setPersons(result.data.records);

        props.update();

    }

    catch (e){

      console.log("error:"+e);

    }

}


function update(){

  sendData();

}




  return (

    <Modal visible={props.modalVisible} >
    <View style={{flex: 1, justifyContent:'center',alignItems:'center'}}>
    <TextInput placeholder="姓名" value={name} onChangeText={text=>setName(text)}/>

    <TextInput placeholder="城市" value={city} onChangeText={text=>setCity(text)}/>

    <TextInput placeholder="年齡" value={age} onChangeText={text=>setAge(text)}/>



    <Button onPress={update} title="新增"/>
    </View>
    </Modal>

  );

}