import React, {useState,useEffect} from 'react';

import { Button , TextInput, Modal } from 'react-native';
import styles from './styles';
import {url} from './config';
import { View } from 'native-base';
import axios from 'axios';




export default function PersonAddEdit(props) {

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [age, setAge] = useState("0");

  const axios_config = {
    headers: {'Authorization': 'Bearer keyV5ujcbHQp277ui'},
    'Content-Type': 'application/json'};


  const get_url=url+"?maxRecords=50&view=Grid%20view";
  
  useEffect(()=>{

    setName(props.person.Name);

    setCity(props.person.City);

    setAge(""+props.person.Age);

  },[props.id]);
function update(){
  async function sendData () {

    const newPerson=props.id
    ?{records:[{

        id: props.id,

        fields:{

          Name:name,

          City:city,

          Age:parseInt(age)

        }}]

      }

      :{fields:{

        Name:name,

        City:city,

        Age:parseInt(age)

      }}


    //console.log(newPerson);

    try {

        const result = props.id

        ?await axios.put(url,newPerson, axios_config)

        :await axios.post(url,newPerson, axios_config);

      props.hide();

    }

    catch (e){

      console.log("error:"+e);

    }

}


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