import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios'
import HikeCard from '../components/hikeCard';
import EventCard from '../components/eventCard';
import Headerbar from '../components/headerbar';
import Footer from '../components/footer';

export default function Newsfeed({navigation, route}) {
  const {name} = route.params; 
  const [hikeData, setHikeData] = useState([])
  const [eventData, setEventData] = useState([])
  
  useEffect(async () => {
    const resHikes = await axios.get('http://cd81-202-189-105-151.ngrok.io/v1/hike/')
    const resEvents = await axios.get('http://cd81-202-189-105-151.ngrok.io/v1/event/')
    
    let tempHikes = []
    for(let i=0; i<4; i++){
      tempHikes.push(resHikes.data.hikes[i])
    }
    setHikeData(tempHikes)

    let tempEvents = []
    for(let i=0; i<4; i++){
      tempEvents.push(resEvents.data.events[i])
    }
    setEventData(tempEvents)
  }, [])

  const createAlert = () =>
    Alert.alert(
      "Hike Hong Kong",
      `Welcome to Hike Hong Kong, ${name}. `,
      [
        {
          text: "Proceed!",
        }
      ]
    );
  createAlert()
  return (
    <ScrollView>
      <Headerbar />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('HikePage', { name: 'Jane' })
        }}>
          <Text style={styles.hikeHeading}> FEATURED HIKES </Text>
        </TouchableOpacity>
        <ScrollView
          horizontal={true}
          style={styles.scrollView}
        >
          {
            hikeData.map((hike) => <HikeCard data={hike} />)
          }
        </ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('EventPage', { name: 'Jane' })}>
          <Text style={styles.hikeHeading}> LATEST EVENTS </Text>
        </TouchableOpacity>
        <ScrollView
          horizontal={true}
          style={styles.scrollView}
        >
          {
            eventData.map((event) => <EventCard data={event} />)
          }
        </ScrollView>
        {/*  */}
      </View>
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 689,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 28,
    paddingRight: 15,
    paddingLeft: 15,
  },
  scrollView: {
  },
  hikeHeading: {
    fontFamily: 'sans-serif-medium',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: -7,
    marginBottom: 15
  },
  hikeText: {
    width: 400,
    marginRight: 10,
    height: 200,
    backgroundColor: 'red'
  }
});