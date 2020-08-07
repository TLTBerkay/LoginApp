import React, { Component } from 'react';
import { View, Text ,TextInput,StyleSheet,Image} from 'react-native';

export default class Textınput extends Component {
state={
text: ''
};

  render() {
    return (
      <View style={styles.ınputArea}>
        <TextInput 
          {...this.props}
        style={styles.ınput}
        value={this.state.text}
        onChangeText={text=> this.setState({text})}
        >

        </TextInput> 
        <Image source={require('../assets/user.png')} style={styles.ımage1}></Image>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
    ınputArea:{
        marginTop:15,
        width:250,
        height:45,
        borderWidth:1,
        borderRadius:5,
        borderColor:'blue',

    },

    ınput:{
        marginTop:2,
        marginLeft:36,
        width:210,
        height:40,
        borderWidth:1,
        borderRadius:5,
        borderColor:'white',
        fontSize:18,
        
        
        

        

    },
   
    ımage1:{
        width:25,
        height:25,
        marginTop:-30,
        marginLeft:10

     

    }


});
