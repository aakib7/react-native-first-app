import React from 'react';
import {SafeAreaView,FlatList,StyleSheet, View, Text,Image,TouchableHighlight} from 'react-native'


export default class Products extends React.Component{
    constructor(props){
        super(props);
    
        this.state={
            products:[
                {name:"iphone x",price:200,descripton:"bfjdh jbdj jbj",key:1},
                {name:"iphone xr",price:1200,descripton:"bfjdh jbdj jbj",key:2},
                {name:"iphone 11",price:2200,descripton:"bfjdh jbdj jbj",key:3},
                {name:"iphone 13",price:22300,descripton:"bfjdh jbdj jbj",key:4},
                {name:"iphone 11 pro",price:2030,descripton:"bfjdh jbdj jbj",key:5},
                {name:"iphone 11 pro max",price:2030,descripton:"bfjdh jbdj jbj",key:6},
                {name:"apple",price:2040,descripton:"bfjdh jbdj jbj",key:7},
                {name:"apple",price:2060,descripton:"bfjdh jbdj jbj",key:8},
                {name:"apple",price:20640,descripton:"bfjdh jbdj jbj",key:9},
                {name:"apple",price:2070,descripton:"bfjdh jbdj jbj",key:10},
                {name:"apple",price:2900,descripton:"bfjdh jbdj jbj",key:11},
                {name:"apple",price:2090,descripton:"bfjdh jbdj jbj",key:12},
            ]
        }
        
      }
      render(){
        var navigate = this.props.navigation;
          return(
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={this.state.products}
                    renderItem={({item})=>(
                        <View key={item.key} style={styles.product}>
                            <View style={styles.imageStyle}>
                                <TouchableHighlight onPress={() => navigate.push('SingleProduct')}>
                                    <Image 
                                    style={styles.image}
                                    source={require("../assets/iphoneq.jpeg")}
                                    />
                                </TouchableHighlight>
                            </View>
                            <View style={styles.productText}>
                                <Text style={styles.nameText}
                                onPress={() => navigate.push('SingleProduct')}
                                >{item.name}</Text>
                                <Text style={styles.priceText}
                                onPress={() => navigate.push('SingleProduct')}
                                >${item.price}</Text>
                                <Text style={styles.descriptionText}
                                onPress={() => navigate.push('SingleProduct')}
                                >{item.descripton}</Text>
                            </View>
                        </View>
                    )}
                 />
                 {/* <View style={styles.product}>
                    <View style={styles.imageStyle}>
                        <Image 
                        style={styles.image}
                        source={require("../assets/COMSATS.jpeg")}
                        />
                    </View>
                    <View style={styles.productText}>
                        <Text style={styles.nameText}>Name</Text>
                        <Text style={styles.priceText}>Price</Text>
                        <Text style={styles.descriptionText}>Description</Text>
                    </View>
                 </View> */}
            </SafeAreaView>
          )
      } 
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
    },
    product:{
        flex:0.20,
        flexDirection:"row",
        marginTop:7
    },
    imageStyle:{
        justifyContent:"center",
        marginLeft:12,
    },
    image:{
        width:120,
        height:120

    },
    productText:{
        justifyContent:"center",
        marginLeft:30,
    },
    nameText:{
        fontSize:25,
        fontWeight:"bold",
        color:"blue",
    },
    priceText:{
        fontSize:25,

    },
    descriptionText:{
        fontSize:20,
    },
    
  });