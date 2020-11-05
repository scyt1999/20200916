import React, {useState, useEffect} from 'react';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import {Icon, Fab} from 'native-base';
import axios from 'axios';
import styles from './styles';
import PersonAdd from './PersonAdd';
import PersonAddEdit from './PersonAddEdit'
import {axios_config,url} from './config';



export default function PersonList() {

    const [persons, setPersons] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [person, setPerson] = useState({

        Name:"",
  
        City:"",
  
        Age:0}
  
      );
    const get_url = url+"?maxRecords=50&view=Grid%20view";


    useEffect(() => {

        async function fetchData () {
    
          const result = await axios.get(get_url,axios_config);
    
          //console.log(result);
    
          setPersons(result.data.records);
    
    
    
        }
    
        fetchData();

    },[modalVisible]);

    function hide(){

        setSelectedId("");
    
        setModalVisible(false);
    
      }

      function add(){

        setPerson({
    
          Name:"",
    
          City:"",
    
          Age:0
    
        });
    
        setSelectedId("");
    
        setModalVisible(true);
    
      }

      function update(id, index){

        setPerson({
    
          Name:persons[index].fields.Name,
    
          City:persons[index].fields.City,
    
          Age:persons[index].fields.Age
    
        });
    
        setSelectedId(id);
    
        setModalVisible(true);
    
      }
    
    

    const Item = ({ index, item, onPress, style }) => (

        <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
    
          <Text>{index}</Text>
    
          <Text style={styles.title}>{item.fields.Name}</Text>
    
          <Text>{item.fields.City}</Text>
    
          <Text>{item.fields.Age}</Text>
    
        </TouchableOpacity>
    
      );

    const renderItem = ({ item, index }) => {
    
    const backgroundColor =  item.id === selectedId ? "#f9c2ff" : styles.item.backgroundColor;
    return (

        <Item
  
          index={index}
  
          item={item}
  
          onPress={() => setSelectedId(item.id)}
  
          style={{ backgroundColor }}
  
        />
  
      )
    }
    return (

        <View style={styles.container}>

        <FlatList 

        data={persons} 

        renderItem = {renderItem}

        keyExtractor={(item, index) => ""+index}

        >

        </FlatList>
        <Fab onPress={()=>setModalVisible(true)}>

     <Icon ios='ios-add' android="md-add"/>

   </Fab>
   <PersonAddEdit modalVisible = {modalVisible} person = {person} id={selectedId} hide={hide}/>


        </View>


    );

}