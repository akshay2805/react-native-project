import React, {Component} from 'react';
import {AppRegistry, StyleSheet,View,TextInput,Image,Text,Button} from 'react-native';
import {Card,Divider} from 'react-native-elements';
import ScanCode from '../Components/ScanCode';


export default class PickOrder extends Component {

    render(){
        return(
            <View>
                <Text style={styles.order_data}>05/18</Text>
                <Text style= {styles.OrderCreatedBy}>Order Created By FSR0021548</Text>
                <View elevation={10} style={{marginTop:10,marginLeft:10,marginRight:10,height:150, shadowOpacity:0.8,backgroundColor:'white',borderRadius:10}}>
                    <View style={{height: 100, flexDirection: 'row'}}>
                            <View style={{width:'65%', backgroundColor:'white'}}>
                                <Text style={{fontSize: 12, color:'black', paddingHorizontal:5,marginTop:7}}> ITEM ID</Text>
                                <Text style={{fontSize: 10,  color: 'orange', paddingHorizontal:5,marginLeft:3}}>0123456789</Text>
                                <Text style={{fontSize: 18, color:'black', paddingHorizontal:5,marginTop:7}}>DESCRIPTION</Text>
                                <Text> Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar Lorem Ipsum Dolar </Text>
                            </View>
                            <View style={{width:'35%', height:150, backgroundColor:'green'}}>
                                <Text style={{fontSize: 16,  paddingHorizontal:5,textAlign:'center',marginTop:16}}>QUANTITY</Text>
                                <Text style={{fontSize: 35,textAlign:'center', paddingHorizontal:5,marginTop:11}}>05</Text>
                            </View>
                    </View>
                    
                </View>
                <View style={{marginTop:18}}>
                    <ScanCode style={{marginTop:28}}/>
                </View>

                <View style={styles.SectionStyle}>
                    <TextInput
                        style={{flex:1}}
                        placeholder=" Quantity"
                        underlineColorAndroid="transparent"
                    />
                </View>
                <View style={{width:150,marginLeft:12,marginTop:8}}>
                    <Button 
                        buttonStyle={{borderRadius:8}}
                        title="NEXT"
                        color="#4a138c"
                        accessibilityLabel="Next"
                    />
                </View>
            </View> 

        );
    }
}

const styles = StyleSheet.create({
 
    container: {
      flex: 1,
      justifyContent: 'space-evenly',
    },
    OrderCreatedBy: {
        marginTop:20, 
        marginLeft:10,       
    },
    basecard:{
        flex: 0,
        flexDirection: 'row',
        width:400,
    },
    SectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'gray',
      borderWidth: 2,
      height: 55,
      borderRadius: 8,
      margin: 10
  },
  order_data: {
    fontSize: 30,
    textAlign:'center',
  },
  Next:{
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 20,
    width:10,
    borderRadius:15,
  },
  CardRight: {
    width:'30%',
    backgroundColor: 'green',
  },
  CardLeft: {
    width:'70%',
    //backgroundColor: '',
  },
  ImageStyle: {
      padding: 10,
      marginRight: 5,
      height: 30,
      width: 30,
      resizeMode : 'stretch',
      alignItems: 'center'
  },
  TickImageStyle: {
    padding: 10,
    marginRight: 5,
    height: 20,
    width: 20,
    resizeMode : 'stretch',
    alignItems: 'center'
},
  });

