import React, {Component} from 'react';
import {AppRegistry, StyleSheet,View,TextInput,Image,Text,Button} from 'react-native';
import {Card} from 'react-native-elements';
import ScanCode from '../Components/ScanCode';

export default class ReceiveOrder extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.order_data}>05/18</Text>
                <ScanCode />
                <Card flexDirection='row' title="Orders List" style={styles.basecard}>
                    <View style={{flexDirection: 'row', paddingVertical:5, paddingHorizontal: 5}}>
                        <View style={{width:'30%'}}>
                            <Text style={{fontSize: 12, fontWeight: '700', paddingHorizontal:5}}>ITEM ID</Text>
                            <Text style={{fontSize: 10, fontWeight: '700', color: 'orange', paddingHorizontal:5}}>0123456789</Text>
                        </View>
                        <View style={{width:'30%'}}>
                            <Text style={{fontSize: 12, fontWeight: '700', paddingHorizontal:5}}>QUANTITY</Text>
                            <Text style={{fontSize: 10, fontWeight: '700', color: 'orange', paddingHorizontal:5}}>06</Text>
                        </View>
                        <View style={{width:'30%'}}>
                            <Text style={{fontSize: 12, fontWeight: '700', paddingHorizontal:5}}>Description</Text>
                            <Text style={{fontSize: 10, fontWeight: '700', color: 'orange', paddingHorizontal:5}}>06</Text>
                        </View>
                        <View style={{width:'10%'}}>
                            <Image source={require('../../Image/tick_icon.jpg')} style={styles.TickImageStyle} />  
                        </View>
                    </View>

                    <View style={{flexDirection: 'row', paddingVertical:5, paddingHorizontal: 5}}>
                        <View style={{width:'30%'}}>
                            <Text style={{fontSize: 12, fontWeight: '700', paddingHorizontal:5}}>ITEM ID</Text>
                            <Text style={{fontSize: 10, fontWeight: '700', color: 'orange', paddingHorizontal:5}}>0123456789</Text>
                        </View>
                        <View style={{width:'30%'}}>
                            <Text style={{fontSize: 12, fontWeight: '700', paddingHorizontal:5}}>QUANTITY</Text>
                            <Text style={{fontSize: 10, fontWeight: '700', color: 'orange', paddingHorizontal:5}}>06</Text>
                        </View>
                        <View style={{width:'30%'}}>
                            <Text style={{fontSize: 12, fontWeight: '700', paddingHorizontal:5}}>Description</Text>
                            <Text style={{fontSize: 10, fontWeight: '700', color: 'orange', paddingHorizontal:5}}>06</Text>
                        </View>
                        <View style={{width:'10%'}}>
                            <Image source={require('../../Image/tick_icon.jpg')} style={styles.TickImageStyle} />
                        </View>
                    </View>

                    <View style={{flexDirection: 'row', paddingVertical:5, paddingHorizontal: 5}}>
                        <View style={{width:'30%'}}>
                            <Text style={{fontSize: 12, fontWeight: '700', paddingHorizontal:5}}>ITEM ID</Text>
                            <Text style={{fontSize: 10, fontWeight: '700', color: 'orange', paddingHorizontal:5}}>0123456789</Text>
                        </View>
                        <View style={{width:'30%'}}>
                            <Text style={{fontSize: 12, fontWeight: '700', paddingHorizontal:5}}>QUANTITY</Text>
                            <Text style={{fontSize: 10, fontWeight: '700', color: 'orange', paddingHorizontal:5}}>06</Text>
                        </View>
                        <View style={{width:'30%'}}>
                            <Text style={{fontSize: 12, fontWeight: '700', paddingHorizontal:5}}>Description</Text>
                            <Text style={{fontSize: 10, fontWeight: '700', color: 'orange', paddingHorizontal:5}}>06</Text>
                        </View>
                        <View style={{width:'10%'}}>
                            <Image source={require('../../Image/tick_icon.jpg')} style={styles.TickImageStyle} />
                        </View>
                    </View>

                    <View style={{flexDirection: 'row', paddingVertical:5, paddingHorizontal: 5}}>
                        <View style={{width:'30%'}}>
                            <Text style={{fontSize: 12, fontWeight: '700', paddingHorizontal:5}}>ITEM ID</Text>
                            <Text style={{fontSize: 10, fontWeight: '700', color: 'orange', paddingHorizontal:5}}>0123456789</Text>
                        </View>
                        <View style={{width:'30%'}}>
                            <Text style={{fontSize: 12, fontWeight: '700', paddingHorizontal:5}}>QUANTITY</Text>
                            <Text style={{fontSize: 10, fontWeight: '700', color: 'orange', paddingHorizontal:5}}>06</Text>
                        </View>
                        <View style={{width:'30%'}}>
                            <Text style={{fontSize: 12, fontWeight: '700', paddingHorizontal:5}}>Description</Text>
                            <Text style={{fontSize: 10, fontWeight: '700', color: 'orange', paddingHorizontal:5}}>06</Text>
                        </View>
                        <View style={{width:'10%'}}>
                            <Image source={require('../../Image/tick_icon.jpg')} style={styles.TickImageStyle} />
                        </View>
                    </View>

                    <View style={{flexDirection: 'row', paddingVertical:5, paddingHorizontal: 5}}>
                        <View style={{width:'30%'}}>
                            <Text style={{fontSize: 12, fontWeight: '700', paddingHorizontal:5}}>ITEM ID</Text>
                            <Text style={{fontSize: 10, fontWeight: '700', color: 'orange', paddingHorizontal:5}}>0123456789</Text>
                        </View>
                        <View style={{width:'30%'}}>
                            <Text style={{fontSize: 12, fontWeight: '700', paddingHorizontal:5}}>QUANTITY</Text>
                            <Text style={{fontSize: 10, fontWeight: '700', color: 'orange', paddingHorizontal:5}}>06</Text>
                        </View>
                        <View style={{width:'30%'}}>
                            <Text style={{fontSize: 12, fontWeight: '700', paddingHorizontal:5}}>Description</Text>
                            <Text style={{fontSize: 10, fontWeight: '700', color: 'orange', paddingHorizontal:5}}>06</Text>
                        </View>
                        <View style={{width:'10%'}}>
                            <Image source={require('../../Image/tick_icon.jpg')} style={styles.TickImageStyle} />
                        </View>
                    </View>
                
                </Card>

                <Button
                    style={styles.markasreceived}
                    title="MARK AS RECEIVED"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
 
    container: {
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'center',
     
    },
    basecard:{
        width:400,
        
       
    },
    order_data: {
        fontSize: 30,
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
  markasreceived: {
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 20
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

