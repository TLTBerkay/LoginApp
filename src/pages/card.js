import React, { Component } from 'react';
import { View, Text,StyleSheet, Alert,Button,KeyboardAvoidingView  } from 'react-native';
import Textınput from '../components/Textınput';
import Buttons from '../components/Buttons';

export default class card extends Component {
  

  render() {
    return (
      <View>
        <KeyboardAvoidingView behavior={'position'}>
        <View style={styles.card}>
            <Text style={styles.title1}>Property Tax Server</Text>
            <Text style={styles.title2}>lksfg jdsgoıjw pwoef wjegj pokwegpojpwjg pojpwjpweo prkgpoejrg okepojg. </Text>
            <Text style={styles.sing}>Sign in</Text>
            <Textınput
            placeholder='UserName'/>
            <Textınput
              secureTextEntry={true}
              placeholder='password'
              />
            <View style={styles.buttons}>
              <Button
              title= 'Sign-in Now'
              color='white'
              onPress={() => Alert.alert('Simple Button pressed')}

              />
            </View>
        </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    card:{
       flex:1,
       alignItems:"center",
        borderRadius:20,
        borderColor:'black',
        borderWidth:0.6,
        width:300,
        height:500,
        backgroundColor:'white',
        marginTop:150,
        shadowOpacity:0.2,
        shadowRadius:4,
        shadowOffset:{
          width:2,
          height:4
        }
        
      },
       
     
     title1:{
         marginTop:35,
         fontSize:24,
     },
     title2:{
        marginTop:15,
        fontSize:12,
        color:'grey',
      },
    sing:{
        marginTop:18,
         fontSize:16,
         marginRight:190

    },
    buttons:{
      width:250,
      height:45,
      backgroundColor:'blue',
      borderRadius:5,
      marginTop:80

    }    

    
    
});
