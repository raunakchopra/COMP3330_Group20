import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView } from 'react-native';

import HikeCard from '../components/hikeCard';

export default function Newsfeed() {
  return (
    <View style={styles.container}>
        <Text style={styles.hikeHeading}> HIKES </Text>
        <ScrollView 
            horizontal={true}
            style={styles.scrollView}
        >
            <HikeCard />
            <HikeCard />
            <HikeCard />
        </ScrollView>
        <Text style={styles.hikeHeading}> EVENTS </Text>
        <ScrollView 
            horizontal={true}
            style={styles.scrollView}
        >
            <HikeCard />
            <HikeCard />
            <HikeCard />
        </ScrollView>
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
    paddingRight: 15,
    paddingLeft: 15,
  },
  scrollView:{
  },
  hikeHeading: {
      fontFamily: 'sans-serif-medium',
      fontSize: 26,
      textAlign: 'center',
      fontWeight: 'bold',
      marginLeft: -7,
      marginBottom: 15
  },
  hikeText: {
      width:400,
      marginRight: 10,
      height:200,
      backgroundColor: 'red'
  }
});
