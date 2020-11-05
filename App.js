import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Click from './src/Click'
import PersonList from './src/PersonList';
import ProductList from './src/ProductList';
import {config} from './firebase_config';

function HomeScreen() {

    const navigation = useNavigation();
    return (
  
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  
        <Text>Home Screen</Text>
        {/* <Button title="Go to Details" onPress={()=> navigation.navigate('Details')}/> */}
        <Button title="Go to Click" onPress={()=> navigation.navigate('Click')}/>
  
      </View>
  
    );
  
  }

  // function DetailsScreen() {
  //   const navigation = useNavigation();
  //   return (

  //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

  //       <Text>Details Screen</Text>
  //       <Button title="Go to Home" onPress={()=>navigation.navigate('Home')}/>
  //       <Button title="Go to Click" onPress={()=> navigation.navigate('Click')}/>

  //     </View>

  //   );

  // }


//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {

    return (
  
      <NavigationContainer>
  
        <Tab.Navigator>
  
            <Tab.Screen name="Home" component={HomeScreen} />
            {/* <Tab.Screen name="Details" component={DetailsScreen} /> */}
            <Tab.Screen name="ProductList" component={ProductList} />
            <Tab.Screen name="Click" component={Click} initialParams={{count:10}}/>
            <Tab.Screen name="PersonList" component={PersonList} />
        </Tab.Navigator>
  
      </NavigationContainer>
  
    );
  
  }
  
  
  export default App;