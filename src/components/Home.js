import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Products from './Products';
import Mobiles from './Mobiles';
import About from './About';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
export default class Home extends React.Component{
    constructor(props){
        super(props);
    
        this.state={
        }
        
      }
      render(){
          return(
            
                <Tab.Navigator>
                    <Tab.Screen name="Products" component={Products} options={{
                        title:"Products"
                    }}/>
                    <Tab.Screen name="Mobiles" component={Mobiles} options={{
                        title:"Mobiles"
                    }}/>
                    <Tab.Screen name="About" component={About} options={{
                        title:"About"
                    }}/>
                </Tab.Navigator>
          )
      }
}