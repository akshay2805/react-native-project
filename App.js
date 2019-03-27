/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import ReceiveOrder from './src/Screens/ReceiveOrder';
import PickOrder from './src/Screens/PickOrder';
import Cart from './src/Screens/Cart';
import DelieveryList from './src/Screens/DelieveryList';
export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.order_data}>05/18</Text> */}
        <PickOrder />
      </View>
    );
  }
}

const styles = StyleSheet.create({
   container: {  
 
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
   
  },
  order_data: {
    fontSize: 30,
  },
 
  /*container: {
    paddingTop:10,
    marginTop:80,
    flex: 1,
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  order_data: {
    fontSize: 35,
    textAlign: 'center',

  },*/
});
