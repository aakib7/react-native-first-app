import React from 'react';
import {SafeAreaView, View, Text} from 'react-native'


export default class Profile extends React.Component{
    constructor(props){
        super(props);
    
        this.state={
        }
        
      }
    render(){
        return(
            <SafeAreaView>
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </ScrollView>
            </SafeAreaView>
        );
    }
    
}