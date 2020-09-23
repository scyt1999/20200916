import React,{useState} from 'react';

import {Alert, Button, Text} from 'react-native';



export default function Click() {

  const [count, setCount] = useState(0);

  let countString = "count:"+count;

  function handleClick() {
    setCount(count+1)
    // Alert.alert("count:"+count);

  }

  return (
<>
    <Button title={countString} onPress={handleClick}/>
  <Text>{count}</Text>
  </>

   

  );

}