import React, {Component} from 'react';
import {AppRegistry, StyleSheet,View,TextInput,Image,Text,Button} from 'react-native';
import {Card} from 'react-native-elements';
import ScanCode from '../Components/ScanCode';

export default class Cart extends Component {
    render(){
        return(
            <View style={styles.container}>
              
                <Card flexDirection='row' title="Item List" containerStyle={styles.basecard}>
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
                            <Text style={{fontSize: 20, fontWeight: '700', color: 'orange', paddingHorizontal:5}}>15</Text>
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
                            <Text style={{fontSize: 20, fontWeight: '700', color: 'orange', paddingHorizontal:5}}>25</Text>
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
                        <Text style={{fontSize: 20, fontWeight: '700', color: 'orange', paddingHorizontal:5}}>35</Text>
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
                            <Text style={{fontSize: 20, fontWeight: '700', color: 'orange', paddingHorizontal:5}}>45</Text>
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
                            <Text style={{fontSize: 20, fontWeight: '700', color: 'orange', paddingHorizontal:5}}>55</Text>
                        </View>
                    </View>
                
                </Card>

                <View style={{flexDirection: 'row',marginTop: -100}}>
                    <View style={{width:'10%'}}>
                       
                    </View>
                    <View style={{width:'30%'}}>
                        <Button
                        style={styles.markasreceived}
                        title="CHECK OUT"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                        />
                    </View>
                    <View style={{width:'20%'}}>
                       
                    </View>
                    <View style={{width:'30%'}}>
                        <Button
                            style={styles.markasreceived}
                            title="ADD ITEMS"
                            color="#841584"
                            accessibilityLabel="Learn more about this purple button"
                        />
                    </View>
                    <View style={{width:'10%'}}>
                       
                    </View>
                </View>
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

