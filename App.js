import  React,{useState} from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Click from './src/Click'
import PersonList from './src/PersonList';
import ProductList from './src/ProductList';
import {config} from './firebase_config';
import SignUp from './src/SignUp';
import SignIn from './src/SignIn';
import SignOut from './src/SignOut';
import {AuthContext} from './src/account/AuthContext';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './src/store/reducer';
import TodoList from './src/component/TodoList'
import notification from './src/notification'

const store = createStore(reducer)

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

  function DetailsScreen() {
    const navigation = useNavigation();
    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text>Details Screen</Text>
        <Button title="Go to Home" onPress={()=>navigation.navigate('Home')}/>
        <Button title="Go to Click" onPress={()=> navigation.navigate('Click')}/>

      </View>

    );

  }

  function StoreScreen() {
    return(
      <Provider store={store}>
        <TodoList/>
      </Provider>
    )
  }




//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false)

    return (
  
      <NavigationContainer>
        <AuthContext.Provider value={{isSignedIn: isSignedIn, setStatus:setIsSignedIn}}>
        <Tab.Navigator>
          {isSignedIn?(
            <>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="StoreScreen" component={StoreScreen}/>
            <Tab.Screen name="ProductList" component={ProductList} />
            {/* <Tab.Screen name="Click" component={Click} initialParams={{count:10}}/> */}
            <Tab.Screen name="PersonList" component={PersonList} />
            <Tab.Screen name="SignOut" component={SignOut}/>
            <Tab.Screen name="notification" component={notification}/>
            </>
          ):(
            <>
            <Tab.Screen name="SignIn" component={SignIn}/>
            <Tab.Screen name="SignUp" component={SignUp}/>

            </>
          )}
            
        </Tab.Navigator>
        </AuthContext.Provider>
      </NavigationContainer>
  
    );
  
  }
  
  
  export default App;