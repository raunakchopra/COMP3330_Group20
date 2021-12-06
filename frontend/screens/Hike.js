import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, ScrollView, TouchableOpacity, Button } from 'react-native';

import Comment from '../components/comment';
import Footer from '../components/footer';
import Headerbar from '../components/headerbar';
import HikeCard from '../components/hikeCard';

export default function Hike({route}) {
  const { hike } = route.params

  const [commentText, setCommentText] = useState("")
  const [commentData, setCommentData] = useState([...hike.comments])

  const pushToCommentData =  async () => {
    let temp = [...commentData]
    temp.unshift({
      username: "Soumil",
      text: commentText
    })

    setCommentData(temp)

    const res = await axios.post(`https://hiking-app-server.herokuapp.com/v1/hike/${hike._id}/comment`, {
      user: "Soumil",
      text: commentText
    }, {
      headers: { 'Content-Type': 'application/json' }
    })

  }

  return (
    <View style={styles.container}>
      <Headerbar />
          <ImageBackground 
            style={styles.image}
            source={{uri: hike.image}}
            blurRadius={1}
            resizeMode="cover"
          >
              <View style={{backgroundColor: 'rgba(0,0,0,0.4)', height: 200, justifyContent: 'center'}}>
                <Text style={styles.hikeNameTitle}>{hike.route}</Text>   
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
                source={{
                  uri: 'https://www.lcsd.gov.hk/en/healthy/hiking/common/hiking/graphics/map_large/A10_map.jpg'
                }} 
              />
            </View>
            <View>
              <Text style={styles.sectionTitle}> Information </Text>
              <Text style={styles.infoText}>
                { hike.brief }
              </Text>
            </View>

            <View>
              <Text style={styles.sectionTitle}> Pictures </Text>
              <ScrollView
                horizontal={true}
              >
                {
                  images.map((image) => <Image style={{
                    height: 200,
                    width: 380,
                    marginRight: 10
                  }} source={{
                    uri: 'https://media.istockphoto.com/photos/group-of-hikers-walks-in-mountains-at-sunset-picture-id1189969126?k=20&m=1189969126&s=612x612&w=0&h=6JPjSS9UORT-DAnIoa0mopA9lwFxX8tX8HQrJdb_i70='
                  }} /> )
                }
              </ScrollView>
            </View>
            <View>
              <Text style={styles.sectionTitle}> Details </Text>
              <View style={{display: 'flex', flexDirection: 'row', marginLeft: 20}}>
                <View style={styles.detailsSection}>
                  <Text style={styles.labelDetail}>Length: </Text>
                  <Text style={styles.labelDetail}>Duration: </Text>
                  <Text style={styles.labelDetail}>Difficulty: </Text>
                  <Text style={styles.labelDetail}>Starting Point:  </Text>
                  <Text style={styles.labelDetail}>Finishing Point: </Text>
                </View>
                <View style={styles.detailsSection}>
                  <Text style={styles.labelData}>{hike.length}</Text>
                  <Text style={styles.labelData}>{hike.duration}</Text>
                  <Text style={styles.labelData}>{hike.difficulty}</Text>
                  <Text style={styles.labelData}>{hike.startingPoint}</Text>
                  <Text style={styles.labelData}>{hike.finishingPoint}</Text>
                </View>
              </View>
            </View>
            <View>
              <View style={styles.reviewsHeader}>
                <Text style={styles.reviewsTitle}>Reviews:</Text>
              </View>
              <ScrollView>
                <View style={{
                  paddingVertical: 5,
                  paddingHorizontal: 10
                }}>
                  <View style={{flex: 1, flexDirection:'row'}}>
                    <Image 
                        source={image} 
                        style={styles.userImage}
                    />
                    <TextInput 
                      style={styles.commentInput}
                      onChangeText={(text) => setCommentText(text)}
                      placeholder="Enter your comment.."
                    />
                  </View>
                  <TouchableOpacity style={styles.submitComment} onPress={() => pushToCommentData()}>
                    <Text style={styles.submitCommentText}>Submit</Text>
                  </TouchableOpacity>
                </View>
                {
                  commentData.map((comment) => <Comment details={comment} />)
                }
              </ScrollView>
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
  { uri: '../assets/180206103735-tai-mo-shan-full-169.jpg'},
  { uri: '../assets/825200.jpg'},
  { uri: '../assets/http---cdn.cnn.com-cnnnext-dam-assets-160707154131-hk-beauty-dragons-back-02.jpg'},
  { uri: '../assets/image-6.jpg' }
]

const data = {
  route: "Jardines Lookout - Quarry Bay",
  brief: "Start at Mount Butler Road, walk along Sir Cecils Ride and proceed to Tai Tam Reservoir Road, Jardines Lookout and Siu Ma Shan. Continue along Quarry Bay Tree Walk to Greig Road, Quarry Bay. This route largely follows Section 2 of the Wilson Trail. The middle part is rather rugged with uphill and downhill sections.",
  startingPoint: "Mount Butler Road, Jardine's Lookout (KK108651)- Take Citybus Route No. 11 at MTR Admiralty Station.",
  finishingPoint: "Next to the Buddhist Chung Wah Kornhill Primary School at Greig Road, Quarry Bay (KK128665)- Go to MTR Tai Koo Station by walking to King's Road via Greig Road.",
  length: "about 8.5 km",
  duration: "about 4 hours",
  difficulty: 3,
  map: "https://www.lcsd.gov.hk/en/healthy/hiking/map/map_a1.html",
  heightMap: "https://www.lcsd.gov.hk/en/healthy/hiking/common/hiking/graphics/cross_large/A1_cross.jpg",
  instructions: "https://www.lcsd.gov.hk/en/healthy/hiking/common/hiking/doc/A1.pdf"
}

const commentTempData = [
  {
    username: "Raunak",
    text: "This hike was amazing. The cliff was good and I recommend it to every who wants to learn hiking!"
  },
  {
    username: "Archit",
    text: "I agree with Raunak. The Hike was certainly cool and I enjoyed it as well"
  },
  {
    username: "Yash",
    text: "I agree with Raunak. The Hike was certainly cool and I enjoyed it as well"
  }
]


const styles = StyleSheet.create({
  submitComment: {
    marginTop: 5,
    alignItems: 'flex-end'
  },
  submitCommentText: {
    borderWidth: 1,
    padding: 7,
    backgroundColor: '#BA2487',
    borderRadius: 5,
    color: 'white'
  },
  container: {
    flex: 1,
  },
  reviewsHeader: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  commentInput:{
    height: 55,
    width: 300,
    borderWidth: 1,
    paddingHorizontal: 5
  },  
  reviewsTitle: {
    fontSize: 25,
    fontFamily: 'sans-serif-medium',
  },
  userImage:{
    height: 50,
    width: 50,
    borderRadius: 40,
    marginRight: 10
  }, 
  labelDetail: {
    fontSize: 15,
    marginBottom: 5,
    fontFamily: 'sans-serif-medium',
  },
  labelData: {
    marginBottom: 5,
    fontSize: 15,
    fontFamily: 'sans-serif-medium',
  },
  detailsSection: {
      flex: 0,
      flexDirection: 'column',
      marginRight: 10
  },
  infoText: {
    fontFamily:'sans-serif-medium',
    fontSize: 13,
    paddingHorizontal: 25,
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
    marginLeft: 15
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
    width: 370,
    flex: 0,
    marginLeft: 15
  },
  hikeNameTitle: {
      fontFamily:'sans-serif-medium',
      fontSize: 30,
      color: 'white',
      textAlign: 'center'
  }
});