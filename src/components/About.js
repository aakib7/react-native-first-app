import React from 'react';
import {SafeAreaView, View, Text} from 'react-native'


export default class About extends React.Component{
    constructor(props){
        super(props);
    
        this.state={
        }
        
      }
      render(){
          return(
            <SafeAreaView>
                <View>
                    <Text>
                        Page About here
                    </Text>

                </View>
            </SafeAreaView>
          )
      }
}