import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, ScrollView, TouchableOpacity, Alert } from 'react-native';
import Footer from '../components/footer';
import HikeCard from '../components/hikeCard';

export default function Event({route}) {
  const { event } = route.params

  const createEventAttendAlert = () =>
    Alert.alert(
      "Hike Hong Kong",
      `Your Attendance has been noted. Thank You`,
      [
        {
          text: "Proceed!",
        }
      ]
    );
  
  return (
    <View style={styles.container}>
          <ImageBackground 
            style={styles.image}
            source={image}
            blurRadius={1}
            resizeMode="cover"
          >
              <View style={{backgroundColor: 'rgba(0,0,0,0.4)', height: 200, justifyContent: 'center'}}>
                <Text style={styles.hikeNameTitle}>{event.name}</Text>   
              </View>
          </ImageBackground>
          <View style={styles.buttonContainer}>
            <TouchableOpacity>
              <Text style={styles.buttonText}>About</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.buttonText}>Info</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.buttonText}>Pics</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.buttonText}>Details</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.buttonText}>Attend</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.contentSection}>
            <View>
              <Text style={styles.sectionTitle}> About Event </Text>
              <Text style={styles.infoText}>
                {event.information}
              </Text>
            </View>

            <View>
              <Text style={styles.sectionTitle}> Details </Text>
              <View style={{display: 'flex', flexDirection: 'row', marginLeft: 20}}>
                  <View style={styles.detailsSection}>
                    <Text style={styles.labelDetail}>Hike: </Text>
                    <Text style={styles.labelDetail}>Organizer:  </Text>
                    <Text style={styles.labelDetail}>Date: </Text>
                  </View>
                  <View style={styles.detailsSection}>
                    <Text style={styles.labelData}>{event.hike}</Text>
                    <Text style={styles.labelData}>{event.organizer}</Text>
                    <Text style={styles.labelData}>{event.date}</Text>
                  </View>
              </View>
            </View>
            <View>
              <Text style={styles.sectionTitle}> Pictures </Text>
              <ScrollView
                horizontal={true}
              >
                {
                  images.map((image) => <Image source={image} style={{
                    height: 200,
                    width: 350,
                    marginRight: 10
                  }} /> )
                }
              </ScrollView>
            </View>

            <View style={styles.attendButtonContainer}>
                <TouchableOpacity style={styles.attendButton} onPress={() => createEventAttendAlert()}>
                    <Text style={styles.attendButtonText}>ATTEND EVENT</Text>
                </TouchableOpacity>
            </View>
          </ScrollView>
          <Footer />
    </View>
  );
}

const image = {
    uri: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
}

const images = [
  { uri: 'https://media.istockphoto.com/photos/group-of-hikers-walks-in-mountains-at-sunset-picture-id1189969126?k=20&m=1189969126&s=612x612&w=0&h=6JPjSS9UORT-DAnIoa0mopA9lwFxX8tX8HQrJdb_i70='},
  { uri: 'https://media.istockphoto.com/photos/hiking-in-the-allgaeu-alps-picture-id1141196125?k=20&m=1141196125&s=612x612&w=0&h=C9SeVSPCqPF2gwP4z8xLG4O0of7ztKXbvhU5vaOMl7o='},
  { uri: 'https://media.istockphoto.com/photos/young-people-on-mountain-hike-at-sunset-picture-id649871644?k=20&m=649871644&s=612x612&w=0&h=2x1TEygkIH0bb--PlwEuQSF2TCFhqpEEdPWGrB9jtDA='},
  { uri: 'https://st.depositphotos.com/2270781/2435/i/600/depositphotos_24359265-stock-photo-hiking-in-the-mountains.jpg' }
]

const styles = StyleSheet.create({

  attendButton: {
    backgroundColor: '#BA2487',
    width: 230,
    flex: 0,
    borderRadius: 25,
    height: 75,
    alignItems: 'center',
    justifyContent: 'center'
  },  
  attendButtonContainer: {
    flex:0,
    marginTop: 10,
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
      height: 200,
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
