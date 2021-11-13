import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';

export default function Hike() {
  return (
    <View style={styles.container}>
          {/* <ImageBackground 
            style={styles.image}
            source={image}
            blurRadius={1}
            resizeMode="cover"
          >
              <View style={{backgroundColor: 'rgba(0,0,0,0.4)', height: 300, justifyContent: 'center'}}>
                <Text style={styles.hikeNameTitle}>Dragons Back</Text>   
              </View>
          </ImageBackground> */}
          <View style={{
              flex: 1,
              height: 500,
              backgroundColor: 'red',
              flexDirection: 'row'
          }}>
             <Text>Hello</Text>          
          </View>
    </View>
  );
}

const image = {
    uri: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
      height: 300,
  },
  hikeNameTitle: {
      fontFamily:'sans-serif-medium',
      fontSize: 30,
      color:'white',
      textAlign: 'center'
  }
});
