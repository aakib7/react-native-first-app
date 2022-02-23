import React from 'react';
import {TouchableWithoutFeedback,SafeAreaView,StyleSheet,TouchableHighlight,Image, View, Text} from 'react-native'
import { back } from 'react-native/Libraries/Animated/Easing';


export default class SingleProduct extends React.Component{
    constructor(props){
        super(props);
    
        this.state={
            products:[
                {name:"iphone x",price:200,descripton:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",key:1},
            ]
        }
        
      }
      render(){
          return(
            <SafeAreaView style={styles.container}>
                <View style={styles.imageArea}>
                    <TouchableHighlight>
                        <Image 
                            style={styles.image}
                            source={require("../assets/iphoneq.jpeg")}
                            />
                    </TouchableHighlight>
                </View>
                <View style={styles.textArea}>
                    <Text>Name: {this.state.products[0].name}
                        <Text>Price: {this.state.products[0].price}</Text>
                    </Text>
                    <Text>{this.state.products[0].descripton}</Text>
                    <Text>Ratings</Text>
                </View>
                <View style={styles.btnArea}>
                <TouchableWithoutFeedback>
                    <View style={styles.buttonBuyNow}>
                        <Text style={styles.btnText}>Buy Now</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <View style={[styles.buttonBuyNow,styles.colorB]}>
                        <Text style={styles.btnText}>Add To Cart</Text>
                    </View>
                </TouchableWithoutFeedback>
                </View>
            </SafeAreaView>
          )
      }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    imageArea:{
        flex:0.5,
    },
    textArea:{
        flex:0.4,
        alignItems:"center",
        marginTop:25,
    },
    btnArea:{
        flex:0.1,
        flexDirection:"row-reverse",
        justifyContent:"space-around"
    },
    image:{
        width:"100%",
        height:"100%",
    },
    buttonBuyNow:{
        alignItems: "center",
        backgroundColor: "red",
        // padding: 13,
        width:"40%",
        justifyContent:"center",
        // marginRight:30,
        marginTop:10,
        marginBottom:10,
        borderRadius:15,
        width:130,
      },
      btnText:{
          color:"white",
          fontSize:16,
          fontWeight:"bold"
      },
      colorB:{
          backgroundColor:"blue",
      }

})