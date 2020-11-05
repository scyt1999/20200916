import React, { useEffect, useState } from 'react';
import {FlatList, View, Text, StatusBar, StyleSheet, TouchableOpacity, YellowBox,ActivityIndicator} from 'react-native';
import styles from '../src/styles';
import ProductAdd from './ProductAdd';
import { Icon, Fab } from 'native-base';

import * as firebase from 'firebase';
import firestore from 'firebase/firestore';
import {config} from '../firebase_config';

export default function ProductList(){
    YellowBox.ignoreWarnings(['Setting a timer']);
    const [product ,setProduct] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSelected, setIsSelected] = useState(null)

    function update(){
        setModalVisible(false);
    }

    const renderItem = ({ item, index}) => {
        const backgroundColor = index === isSelected ? "#f9c2ff" : "#00ffff";
        return(
        <TouchableOpacity style = {[styles.item, {backgroundColor}]} onPress={()=>setIsSelected(index)}>
            <Text style = {styles.title}>{item.desc}</Text>
            <Text style = {styles.content}>{item.price}</Text>
            <Text style = {styles.content}>{index}</Text>
        </TouchableOpacity>

        )
    }

    const db = firebase.firestore();

    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }


    async function readData(){
        const newProducts=[];
        setIsLoading(true)
        try {
          const querySnapshot = await db.collection("product").get();    
          querySnapshot.forEach((doc) => {
            const newProduct = {
                desc:doc.data().desc,
                price:doc.data().price
            }  
            newProducts.push(newProduct);        
          });//foreach
          setProduct(newProducts);
          setIsLoading(false)
        }//try 
        catch(e){console.log(e);}
      }//readData

    useEffect(()=>{
        readData();
    },[modalVisible]);

    return(
        <View style = {styles.container}>
            {!isLoading?
            <FlatList
            data = {product}
            renderItem = {renderItem}
            keyExtractor = {(item, index)=> ""+index}
            />:
            <View style={styles.loading}>
                <ActivityIndicator color="red" size="large" animating={isLoading} />
            </View>
        }
            
            <Fab onPress={()=>setModalVisible(true)}>
                <Icon ios='ios-add' android="md-add"/>
            </Fab>
            <ProductAdd update={update} modalVisible={modalVisible} setModalVisible={setModalVisible}/>
        </View>
    )
}
