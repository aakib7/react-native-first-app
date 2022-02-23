import React from 'react';
import Login from "./src/components/Login";
import Signup from './src/components/Signup.js';
import Home from './src/components/Home';
import SingleProduct from './src/components/SingleProduct'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  render(){
    return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={Login} />
        <Stack.Screen name="Register" component={Signup} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="SingleProduct" component={SingleProduct} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}