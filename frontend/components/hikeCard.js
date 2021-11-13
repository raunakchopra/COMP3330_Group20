import React from 'react';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';

export default function hikeCard() {
  return (
        <View style={styles.container}>
            <ImageBackground 
                source={image} 
                resizeMode="cover"
                style={styles.image}
            >
                <View style={styles.textContainer}>
                    <Text style={styles.hikeName}>Dragons Back</Text>
                    <Text style={styles.hikeLocation}>Hong Kong Island</Text>
                </View>
            </ImageBackground>
            <View>
                <Text style={styles.hikeInfo}><Text style={styles.hikeInfoLabel}>Duration: </Text>approx. 3 hours </Text>
                <Text style={styles.hikeInfo}><Text style={styles.hikeInfoLabel}>Length:</Text> 7 km.</Text>
            </View>
        </View>
  );
}

const image = {
    uri: 'https://images.unsplash.com/photo-1551632811-561732d1e306?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGlraW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
}

const styles = StyleSheet.create({
  container: {
    width:353,
    marginRight: 10,
    height:250,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 10
  },
  textContainer: {
      backgroundColor: '#BA2487',
      width: 150,
      marginTop: 133,
  },
  hikeName: {
    color: 'white',
    fontFamily: 'sans-serif-medium',
    fontSize: 18,
    textAlign: 'center',
  },
  hikeLocation: {
      color: 'white',
      fontFamily: 'sans-serif-medium',
      fontSize: 11,
      textAlign: 'center',
  },
  hikeInfoLabel:{
      fontSize:16,
      fontFamily:'sans-serif-medium',
      fontWeight: 'bold'
  },
  hikeInfo:{
      fontSize: 15
  }
});
