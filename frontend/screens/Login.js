import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';


// Archit verma was here
export default function Login() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/logo.jpeg')}
        style={styles.logo}
      />
      <TextInput 
        style={styles.input}
        placeholder = "Username"
      />
      <TextInput 
        style={styles.input}
        placeholder = "Password"
      />
      <Text style={styles.footer}>
          Hike Hong Kong - 2021
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: -3,
  },
  logo: {
      height: 150,
      width: 150,
      transform: [{ rotate: '270deg' }],
      marginBottom: 20,
  },
  footer:{
      top: 250
  }
});
