import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import HikeCard from '../components/hikeCard';

export default function Hike() {
  return (
    <View style={styles.container}>
          <ImageBackground 
            style={styles.image}
            source={image}
            blurRadius={1}
            resizeMode="cover"
          >
              <View style={{backgroundColor: 'rgba(0,0,0,0.4)', height: 300, justifyContent: 'center'}}>
                <Text style={styles.hikeNameTitle}>Dragons Back</Text>   
              </View>
          </ImageBackground>
          <View style={styles.buttonContainer}>
            <TouchableOpacity>
              <Text style={styles.buttonText}>Map</Text>
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
              <Text style={styles.buttonText}>Reviews</Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.contentSection}>
            <View>
              <Text style={styles.sectionTitle}> Map </Text>
              <Image 
                style={styles.mapImage}
                source={image} 
              />
            </View>
            <View>
              <Text style={styles.sectionTitle}> Information </Text>
              <Text style={styles.infoText}>
                Lion Rock – Hong Kong’s iconic peak is not only known for breathtaking views of the city but also its peculiar shape that can be identified from miles. For those living in Hong Kong, it is a symbol of grit and determination. And for many miles. For those living in Hong Kong, it is a symbol of grit and determination.
                Lion Rock – Hong Kong’s iconic peak is not only known for breathtaking views of the city but also its peculiar shape that can be identified from miles. For those living in Hong Kong, it is a symbol of grit and determination. And for many miles. For those living in Hong Kong, it is a symbol of grit and determination.
              </Text>
            </View>


            <View>
              <Text style={styles.sectionTitle}> Details </Text>
              <View style={styles.detailsSection}>
                <Text style={styles.labelDetail}>Length: </Text>
                <Text style={styles.labelData}>5kms.</Text>
              </View>
              <View style={styles.detailsSection}>
                <Text style={styles.labelDetail}>Duration: </Text>
                <Text style={styles.labelData}>5kms.</Text>
              </View>
              <View style={styles.detailsSection}>
                <Text style={styles.labelDetail}>Difficulty: </Text>
                <Text style={styles.labelData}>5kms.</Text>
              </View>
              <View style={styles.detailsSection}>
                <Text style={styles.labelDetail}> Experience Required: </Text>
                <Text style={styles.labelData}> No</Text>
              </View>
              <View style={styles.detailsSection}>
                <Text style={styles.labelDetail}> Yada-Yada: </Text>
                <Text style={styles.labelData}> Yada-Yada</Text>
              </View>
            </View>

            <View>
              <Text style={styles.sectionTitle}> Pictures </Text>
              <ScrollView
                horizontal={true}
              >
                <HikeCard />
                <HikeCard />
                <HikeCard />
              </ScrollView>
            </View>
            
          </ScrollView>
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
