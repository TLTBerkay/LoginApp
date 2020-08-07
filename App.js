
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Alert
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Card from './src/pages/card'
import Buttons from './src/components/Buttons' 




const App: () => React$Node = () => {
  return (
    
    <View style={styles.container}>
        
      
      
        
        <View style={styles.bluebox}/>
        <View style={styles.containertext}>
          <Text style={styles.logo}>UDAC</Text>
          <Text style={styles.title2}>Property & Tax Survey</Text>
          <Text style={styles.title3}>Don't have an account?</Text>
          <View style={styles.button}>
          <Button
          title='Sign-up'
          onPress={() => Alert.alert('Simple Button pressed')}
          color='black'
            />
          </View>
        </View>
      
        <ScrollView style={styles.scroll}>
          <Card style={styles.Card}></Card>
       </ScrollView>
       
    
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
  bluebox:{
    width:1500,
    height:1500,
    borderRadius:700,
    backgroundColor:'blue',
    marginBottom:1500,
    marginRight:450

  },
  containertext:{
    position:'absolute',
    paddingTop:100,
    width:'100%',
    height:'100%',
       
  },
  scroll:{
    width:'100%',
    height:'100%',
    position:'absolute',
    padding:50,
    paddingTop:100

  },
  logo:{
    textAlign:"center",
    fontSize:40,
    color:'white',

    
  },
  title2:{
    textAlign:"center",
    fontSize:18,
    color:'white'
  },
title3:{
  textAlign:"center",
  marginTop:630,
  fontSize:16,
  paddingRight:110
},
button:{
    position:'absolute',
    marginTop:790,
    marginLeft: 240,

}
 
  
  

  
});

export default App;
