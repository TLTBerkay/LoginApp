import React, { Component } from 'react';
import { View, Text, Button, StyleSheet,Alert} from 'react-native';

export default class Buttons extends Component {
  

  render() {
    return (
      <View style={styles.buttons}>
        <Button
            onPress={() => Alert.alert('Simple Button pressed')}
         />
      </View>
    );
  }
}


const styles = StyleSheet.create({

   



});

