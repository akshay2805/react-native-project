import React, {Component} from 'react';
import {AppRegistry, StyleSheet,View,TextInput,Image,Text,Button} from 'react-native';
import {Card} from 'react-native-elements';

export default class ScanCode extends Component {

    render() {
      return (
        <View style={styles.SectionStyle}>
            <TextInput
                style={{flex:1}}
                placeholder=" Scan Code"
                underlineColorAndroid="transparent"
            />
            <Image source={require('../../Image/scan_icon.jpg')} style={styles.ImageStyle} />
        </View>

      );
    }
  }

  const styles = StyleSheet.create({

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
    ImageStyle: {
      padding: 10,
      marginRight: 5,
      height: 30,
      width: 30,
      resizeMode : 'stretch',
      alignItems: 'center'
    }
  });
