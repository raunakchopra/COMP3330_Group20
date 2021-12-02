import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';


export default function Login({ navigation  }) {
  const [username, setUserName] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState()

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/logo.jpeg')}
        style={styles.logo}
      />
      <TextInput 
        style={styles.input}
        onChangeText={(val) => setUserName(val)}
        placeholder = "Username"
      />
      <TextInput 
        style={styles.input}
        onChangeText={(val) => setPassword(val)}
        placeholder = "Password"
      />
      <TouchableOpacity 
        style={styles.enterButton}
        onPress={() => {
          setUser({username, password})
          navigation.navigate('NewsFeed', { name: 'Raunak' })
        }}  
      >
        <Text style={styles.enterText}>Enter</Text>
      </TouchableOpacity>
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
  enterButton: {
    marginTop: 20,
    backgroundColor: '#BA2487',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  enterText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white'
  },  
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 1,
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
