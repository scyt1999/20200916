import React,{useState, useEffect, Component} from 'react';

import {View, Button, Text} from 'react-native';



export default function Click({ route, navigation }) {
  const [count, setCount] = useState(null);

  useEffect(()=>{
    setCount(route.params.count)
  },[route.params.count])

  const handleClick = () => {
    setCount(oldCount=>oldCount+1)
  }

    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>Click Screen</Text>
        <Button title={`count: ${count}`} onPress={handleClick}/>
      </View>
    )
}