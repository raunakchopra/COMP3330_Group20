import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, Keyboard, Button } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


export default function Comment(props) {
    console.log(props)
  const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{flex: 1, flexDirection:'row'}}>
                <Image 
                    source={image} 
                    style={styles.userImage}
                />
                <View style={{width:300}}>
                    <Text style={styles.username}>{props.details.username}</Text>
                    <Text>{props.details.text} </Text>
                </View>
            </View>
        </View>
    );
}

const image = {
    uri: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
}

const styles = StyleSheet.create({
  userImage:{
    height: 50,
    width: 50,
    borderRadius: 40,
    marginRight: 10
  },  
  container:{
      paddingVertical: 5,
      paddingHorizontal: 20
  },
  username:{
      fontSize: 18,
      fontWeight: 'bold'
  }
});
