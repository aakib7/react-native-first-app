import React from 'react';
import { SafeAreaView,View, Text, StyleSheet,Image, TouchableWithoutFeedback, TextInput, Alert, TouchableOpacity } from 'react-native';

export default class Signup extends React.Component {

  constructor(props){
    super(props);

    this.state={
        username:'',
        email:'',
        password:'',
        confirmPassword:'',
    }
  }

//   UNSAFE_componentWillMount(){
      
//   }

  render(){
      const register = ()=>{
          if(this.state.username.length<3){
              alert("User Name Must Contain 3 Leter");
              return;
          }
          if(this.state.email.length<7){
              alert("Enter Valid Email");
              return;
          }
          if(this.state.password.length<8){
              alert("Password must be 8 length string");
              return;
          }
          if(this.state.password != this.state.confirmPassword){
              alert("Password Not Matched");
              return;
          }
          else{
              alert(`Register Successfully\nUser Name: ${this.state.username}`);
              return;
          }

      }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logoArea}>
                <View style={styles.imageWrapper}>
                <Image 
                        style={styles.image}
                        source = {require("../assets/COMSATS.jpeg")}
                    />
                </View>
                <View style={styles.textWrapper}>
                    <Text style={styles.text}>
                        COMSATS UNIVERSITY LAHORE, ISLAMABAD
                    </Text>
                </View>
            </View>

            <View style={styles.inputArea}>
                <View style={styles.headingWrapper}>
                    <Text style={styles.heading}>Register Here</Text>
                </View>
                <View style={styles.inputFieldsWrapper}>
                    <TextInput
                        style={styles.inputEmail}
                        placeholder="Enter User Name"
                        value = {this.state.username}
                        onChangeText = {(value) => this.setState({username : value})}               
                    />
                    <TextInput
                        style={styles.inputField}
                        placeholder="Enter Email"
                        value={this.state.email}                
                        onChangeText = {(value) => this.setState({email : value})}
                    />
                    <TextInput
                        style={styles.inputField}
                        placeholder="Password"
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText = {(value) => this.setState({password : value})}               
                    />
                    <TextInput
                        style={styles.inputField}
                        placeholder="Confirm Password"
                        secureTextEntry={true}
                        value={this.state.confirmPassword}
                        onChangeText = {(value) => this.setState({confirmPassword : value})}             
                    />
                </View>
            </View>

            <View style={styles.buttonArea}>
                <TouchableWithoutFeedback onPress={register}>
                    <View style={styles.buttonRigister}>
                        <Text style={styles.btnText}>Register</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>

        </SafeAreaView>
    );
  }

  componentDidMount(){
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      logoArea:{
        flex:.2,
        justifyContent:"center",
        alignItems:"center",
      },
      imageWrapper:{
          flex:0.8,
          justifyContent:"center",
          alignItems:"center",
      },
      image:{
        width:120,
        height:120
      },
      textWrapper:{
        flex:0.2,
        justifyContent:"center",
        alignItems:"center",
      },
      text:{
        fontSize:16,
        fontWeight:"bold"
    },

    inputArea:{
        flex:0.6,
    },
    headingWrapper:{
        flex:0.3,
        justifyContent:"center",
        alignItems:"center",
    },
    heading:{
        fontSize:20,
        fontWeight:"bold",
        color:"blue"
    },
    inputFieldsWrapper:{
        flex:0.7,
    },
    inputEmail:{
        height: 40,
        margin: 15,
        marginTop:40,
        borderWidth: 2,
        padding: 12,
        borderRadius:15,
        color:"black",
        fontSize:18

     },
    inputField:{
        height: 40,
        margin: 15,
        marginTop:10,
        borderWidth: 2,
        padding: 12,
        borderRadius:15,
        color:"black",
        fontSize:18
     },
     buttonArea:{
        flex:0.2,
     },
     buttonRigister: {
        alignItems: "center",
        backgroundColor: "green",
        padding: 13,
        marginTop:8,
        width:"70%",
        justifyContent:"center",
        marginLeft:50,
        borderRadius:15
      },
      btnText:{
        color:"white",
        fontSize:18,
        fontWeight:"bold"
    },
      
    

});

