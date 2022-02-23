import React from 'react';
import Profile from './Profile';
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();



export default class MyDrawer extends React.Component{
    constructor(props){
        super(props);
    
        this.state={
        }
        
      }
      render(){
          return(
            <Drawer.Navigator>
                <Drawer.Screen name="Profile" component={Profile} />
            </Drawer.Navigator>

          )
      }
}