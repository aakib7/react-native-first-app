import React from 'react';
// import { View, Text,TextInput,Button } from 'react-native';
import Login from "./src/components/Login";
import Signup from './src/components/Signup.js';

export default class App extends React.Component {
  // Write Functions Here
  render(){
    return (
      <>
      {/* {signup.render()} */}
      <Signup />
      {/* <Flex /> */}
      </>
    );
  }
}

// const styles = StyleSheet.create({

// });