import React,{useState} from 'react';
import { View,TouchableWithoutFeedback,Text,
    TextInput,StyleSheet,Image,Linking,Alert } from 'react-native';


const Login = ({navigation})=>{
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const logInButton = ()=>{
        if (userName ==="Aakib" && password ==="test"){
            navigation.push("Home");
        }
    }
    return(
        <View style={styles.container}>
            <View style={styles.textLogoStyle}>
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

            <View style={styles.inputFeilds}>
                <TextInput
                    style={styles.inputEmail}
                    placeholder="Enter User Name"
                    onChangeText={newText => setUserName(newText)}
                    Value={userName}                
                />
                <TextInput
                    style={styles.inputPassword}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={newText => setPassword(newText)}
                    Value={password}
                />
            </View>

            <View style={styles.buttonsStyles}>
                <TouchableWithoutFeedback onPress={logInButton}>
                    <View style={styles.buttonUsername}>
                        <Text style={styles.btnText}>Log IN</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={() => navigation.push('Register')}>
                    <View style={styles.buttonPassword}>
                        <Text style={styles.btnText}>Sign Up</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.forgetPassword}>
            <Text style={styles.forgetPasswordText}
                onPress={() => Linking.openURL('http://google.com')}>
                Forget Password
            </Text>

            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
     },
     textLogoStyle: {
        flex:0.30,
        width:"100%"
     },
     imageWrapper:{
        flex:0.8,
        alignItems: 'center',
        justifyContent:"center"

     },
     image:{
        width:150,
        height:150
    },
    textWrapper:{
        alignItems: 'center'
    },
    text:{
        fontSize:16,
        fontWeight:"bold"
    },
     
     inputFeilds: {
        flex:0.25,
        width:"100%",
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
     inputPassword: {
        height: 40,
        margin: 15,
        borderWidth: 2,
        padding: 12,
        borderRadius:15,
        color:"black",
        fontSize:18
      },
      buttonsStyles:{
        flex:0.2,
        width:"100%"
      },
      buttonUsername: {
        alignItems: "center",
        backgroundColor: "green",
        padding: 13,
        marginTop:8,
        width:"70%",
        justifyContent:"center",
        marginLeft:50,
        borderRadius:15
      },
      buttonPassword:{
        alignItems: "center",
        backgroundColor: "gray",
        padding: 13,
        marginTop:8,
        width:"70%",
        justifyContent:"center",
        marginLeft:50,
        marginTop:20,
        borderRadius:15
      },
      btnText:{
          color:"white",
          fontSize:18,
          fontWeight:"bold"
      },
      forgetPassword:{
          flex:0.15,
          textAlign:"center",
        
      },
      forgetPasswordText:{
          color:"blue",
          marginTop:25,
      }
      
   
     
       
  });
export default Login;