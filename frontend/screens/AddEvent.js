import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, ScrollView, TouchableOpacity, Alert } from 'react-native';
import HikeCard from '../components/hikeCard';
import axios from 'axios'
export default function Event({route}) {
  const { event } = route.params
  const [name, setName] = useState("")
  const [hike, setHike] = useState("")
  const [info, setInfo] = useState("")
  const [org, setOrg] = useState("")
  const [date, setDate] = useState("")

  const createSubmitAlert = () =>{
    const res = axios.post('http://cd81-202-189-105-151.ngrok.io/v1/event', {
      name,
      hike,
      organizer: org,
      information: info,
      date
    }, {
      headers: { 'Content-Type': 'application/json' }
    })
    
    Alert.alert(
      "Hike Hong Kong",
      `Thank You for Submitting the Event!.`,
      [
        {
          text: "Ok!",
        }
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/logo.jpeg')}
        style={styles.logo}
      />
      <View style={styles.infoInputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>Name:</Text>
          <Text style={styles.labelText}>Hike: </Text>
          <Text style={styles.longLabelText}>Information: </Text>
          <Text style={styles.labelText}>Organizer: </Text>
          <Text style={styles.labelText}>Date: </Text>
        </View>
        <View style={styles.labelContainer}>
          <TextInput 
            onChangeText={(text) => setName(text)} 
            style={styles.simpleInput} />
          <TextInput 
            onChangeText={(text) => setHike(text)}
            style={styles.simpleInput} />
          <TextInput 
            onChangeText={(text) => setInfo(text)}
            style={styles.longInput} />
          <TextInput 
            onChangeText={(text) => setOrg(text)}
            style={styles.simpleInput} />
          <TextInput 
            onChangeText={(text) => setDate(text)}
            style={styles.simpleInput} />
        </View>
      </View>    
      <View style={styles.attendButtonContainer}>
          <TouchableOpacity 
            style={styles.attendButton}
            onPress={() => createSubmitAlert()}
          >
              <Text style={styles.attendButtonText}>SUBMIT EVENT</Text>
          </TouchableOpacity>
      </View>
    </View>
  );
}

const image = {
    uri: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
}


const styles = StyleSheet.create({
  infoInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'center'
  },
  simpleInput: {
    height: 30,
    width: 200,
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 20
  },  
  labelText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20
  },
  longLabelText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 90
  },
  labelContainer: {
    display: 'flex',
  },
  logo: {
    height: 150,
    width: 150,
    transform: [{ rotate: '270deg' }],
    marginTop: 20,
    marginBottom: 50,
    marginLeft: 140
},
  longInput: {
    height: 100,
    width: 200,
    borderWidth: 1,
    marginBottom: 20
  },
  attendButton: {
    backgroundColor: '#BA2487',
    width: 230,
    flex: 0,
    marginTop: 50,
    borderRadius: 25,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center'
  },  
  attendButtonContainer: {
    flex:0,
    marginBottom: 15,
    alignItems: 'center'
  },
  attendButtonText: {
      fontFamily: 'sans-serif-medium',
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold'
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  }, 
  labelDetail: {
    fontSize: 17,
    fontFamily: 'sans-serif-medium',
  },
  labelData: {
    fontSize: 17,
    fontFamily: 'sans-serif-medium',
  },
  detailsSection: {
      flex: 0,
      flexDirection: 'row'
  },
  infoText: {
    fontFamily:'sans-serif-medium',
    fontSize: 13,
    paddingHorizontal: 15,
    color: 'black',
  },  
  contentSection: {
    paddingTop: 5,
    paddingHorizontal: 5
  },  
  sectionTitle:{
    fontFamily:'sans-serif-medium',
    fontSize: 25,
    color: 'black',
    marginBottom: 8,
    marginTop: 10,
  },
  buttonContainer: {
    marginTop: 2,
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: '#171717',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    height: 40,
  },
  buttonText: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    fontSize: 20,
  },
  image: {
      height: 300,
  },

  mapImage: {
    height: 200,
    width: 300,
    flex: 0,
    marginLeft: 55
  },
  hikeNameTitle: {
      fontFamily:'sans-serif-medium',
      fontSize: 30,
      color:'white',
      textAlign: 'center'
  }
});

// {
//   "name": "Hike to Peak",
//   "hike": "Victoria Peak",
//   "information": "Start at Mount Butler Road, walk along Sir Cecils Ride and proceed to Tai Tam Reservoir Road, Jardines Lookout and Siu Ma Shan. Continue along Quarry Bay Tree Walk to Greig Road, Quarry Bay. This route largely follows Section 2 of the Wilson Trail. The middle part is rather rugged with uphill and downhill sections.",
//   "organizer": "Victoria Peak Hiking Group",
//   "date": "Thursday, December 1st"
// }
