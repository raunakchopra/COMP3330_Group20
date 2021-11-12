import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView } from 'react-native';

export default function Newsfeed() {
  return (
    <View style={styles.container}>
      <View>
        <Text> Hikes </Text>
        <ScrollView 
            horizontal={true}
            style={styles.scrollView}
        >
            <View style={styles.hikeText}></View>
            <View style={styles.hikeText}></View>
            <View style={styles.hikeText}></View>
            <View style={styles.hikeText}></View>
        </ScrollView>
      </View>
      <View>
          <Text> Events </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:100,
  },
  scrollView:{
    paddingLeft: 20,
    paddingRight: 20,
  },    
  hikeText: {
      width:350,
      marginRight: 10,
      height:200,
      backgroundColor: 'red'
  }
});
