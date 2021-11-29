import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity, Alert } from 'react-native';

import HikeCard from '../components/hikeCard';
import EventCard from '../components/eventCard';
import Headerbar from '../components/headerbar';

export default function Newsfeed({navigation, route}) {
  const {name} = route.params; 
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
            HikeData.map((hike) => <HikeCard data={hike} />)
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
            EventData.map((event) => <EventCard data={event} />)
          }
        </ScrollView>
        <TouchableOpacity 
          style={styles.addEventContainer}
          onPress={() => navigation.navigate('AddEvent', {})}
        >
          <Text style={styles.addEventText}>Add Event</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  addEventContainer:{
    flex: 1,
    paddingVertical: 40
  },
  addEventText:{
    fontSize: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingRight: 15,
    paddingLeft: 15,
  },
  scrollView: {
  },
  hikeHeading: {
    fontFamily: 'sans-serif-medium',
    fontSize: 26,
    textAlign: 'center',
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

const HikeData = [
  {
      "route": "Jardines Lookout - Quarry Bay",
      "brief": "Start at Mount Butler Road, walk along Sir Cecils Ride and proceed to Tai Tam Reservoir Road, Jardines Lookout and Siu Ma Shan. Continue along Quarry Bay Tree Walk to Greig Road, Quarry Bay. This route largely follows Section 2 of the Wilson Trail. The middle part is rather rugged with uphill and downhill sections.",
      "startingPoint": "Mount Butler Road, Jardine's Lookout (KK108651)- Take Citybus Route No. 11 at MTR Admiralty Station.",
      "finishingPoint": "Next to the Buddhist Chung Wah Kornhill Primary School at Greig Road, Quarry Bay (KK128665)- Go to MTR Tai Koo Station by walking to King's Road via Greig Road.",
      "length": "about 8.5 km",
      "duration": "about 4 hours",
      "difficulty": 3,
      "map": "https://www.lcsd.gov.hk/en/healthy/hiking/map/map_a1.html",
      "heightMap": "https://www.lcsd.gov.hk/en/healthy/hiking/common/hiking/graphics/cross_large/A1_cross.jpg",
      "instructions": "https://www.lcsd.gov.hk/en/healthy/hiking/common/hiking/doc/A1.pdf"
  },
  {
      "route": "Tsuen Kam Au - Fu Yung Shan",
      "brief": "Walk along the Hiking Practice Trail in Tai Mo Shan before entering the Rotary Park Nature Trail. Walk down the trail until you reach the watercress fields at Chuen Lung Village. Then take the tranquil path in the south of Tai Mo Shan and visit the 4-faced Buddha at Chuk Lam Sim Yuen, Fu Yung Shan, before proceeding to Tsuen Wan. The route is largely downhill with a rugged section which takes about 25 to 30 minutes to walk.",
      "startingPoint": "Tsuen Kam Au, Tai Mo Shan (KK020804)- Take Kowloon Motor Bus Route No. 51 at MTR Tsuen Wan Station and get off at the Country Park Management Centre on Route Twisk. Walk in the direction of Tsuen Wan for a few dozen metres and then turn left to Tai Mo Shan Road. Walk upslope along the road to the entrance of Rotary Park.",
      "finishingPoint": "Fu Yung Shan Road (KK032776)- Take green minibus Route No.85 or walk for about 1.2 km to MTR Tsuen Wan Station.",
      "length": "about 4.5 km",
      "duration": "about 4 hours",
      "difficulty": 2,
      "map": "https://www.lcsd.gov.hk/en/healthy/hiking/map/map_a2.html",
      "heightMap": "https://www.lcsd.gov.hk/en/healthy/hiking/common/hiking/graphics/cross_large/A2_cross.jpg",
      "instructions": "https://www.lcsd.gov.hk/en/healthy/hiking/common/hiking/doc/A2.pdf"
  },
  {
      "route": "Shing Mun Reservoir Pai Tau Village",
      "brief": "Shing Mun Country Park, located south east of Tai Mo Shan, is full of intersecting footpaths and lyrical scenery. The Shing Mun Reservoir lying amid lush hills, reservoir walks, Tai Shing Stream, woodlands of paperbark trees and the arboretum are the major attractions. Walk along the woodland paths around the reservoir and head for Sha Tin via To Fung Shan after crossing the pass between Grassy and Needle Hills. Alternatively, you may take a footpath on the left leading to Pai Tau Village and visit the Ten Thousand Buddhas Monastery before proceeding to Sha Tin if you are physically fit for it. The early section of the route comprises uphill restricted access of the reservoir while the later section comprises downhill footpaths.",
      "startingPoint": "Pineapple Dam, Shing Mun Reservoir (KK058782)- Take green minibus Route No. 82 at Siu Wo Street, Tsuen Wan.",
      "finishingPoint": "Pai Tau Village KK103779)- Walk to MTR Sha Tin Station.",
      "length": "about 10.5 km",
      "duration": "about 5 hours",
      "difficulty": 2,
      "map": "https://www.lcsd.gov.hk/en/healthy/hiking/map/map_a3.html",
      "heightMap": "https://www.lcsd.gov.hk/en/healthy/hiking/common/hiking/graphics/cross_large/A3_cross.jpg",
      "instructions": "https://www.lcsd.gov.hk/en/healthy/hiking/common/hiking/doc/A3.pdf"
  },
  {
      "route": "Wu Kau Tang <-> Sam A Wan",
      "brief": "Visit the villages in Wu Kau Tang in the northeast of the New Territories and get a good view of Tiu Tang Lung. Walk down the ancient footpath of Lai Tau Shek to explore the magnificent scenery of Sam A Wan and Sam A Chung. Taste some Hakka snacks at Sam A Tsuen, visit Miu Sam Stream and walk along the ancient stone path of Miu Sam before heading back to Wu Kau Tang. The route comprises mainly ancient cobbled footpaths with a gentle uphill section at the end.",
      "startingPoint": "u Kau Tang (KK163914)- Take green minibus Route No. 20R at MTR Tai Po Market Station and return",
      "finishingPoint": "",
      "length": "about 9 km",
      "duration": "about 5.5 hours",
      "difficulty": 2,
      "map": "https://www.lcsd.gov.hk/en/healthy/hiking/map/map_a4.html",
      "heightMap": "https://www.lcsd.gov.hk/en/healthy/hiking/common/hiking/graphics/cross_large/A4_cross.jpg",
      "instructions": "https://www.lcsd.gov.hk/en/healthy/hiking/common/hiking/doc/A4.pdf"
  }
]

const EventData = [
  {
    "name": "Hike to Peak",
    "hike": "Victoria Peak",
    "information": "Start at Mount Butler Road, walk along Sir Cecils Ride and proceed to Tai Tam Reservoir Road, Jardines Lookout and Siu Ma Shan. Continue along Quarry Bay Tree Walk to Greig Road, Quarry Bay. This route largely follows Section 2 of the Wilson Trail. The middle part is rather rugged with uphill and downhill sections.",
    "organizer": "Victoria Peak Hiking Group",
    "date": "Thursday, December 1st"
  },
  {
    "name": "Hike to Peak",
    "hike": "Victoria Peak",
    "information": "Start at Mount Butler Road, walk along Sir Cecils Ride and proceed to Tai Tam Reservoir Road, Jardines Lookout and Siu Ma Shan. Continue along Quarry Bay Tree Walk to Greig Road, Quarry Bay. This route largely follows Section 2 of the Wilson Trail. The middle part is rather rugged with uphill and downhill sections.",
    "organizer": "Victoria Peak Hiking Group",
    "date": "Thursday, December 1st"
  },
  {
    "name": "Hike to Peak",
    "hike": "Victoria Peak",
    "information": "Start at Mount Butler Road, walk along Sir Cecils Ride and proceed to Tai Tam Reservoir Road, Jardines Lookout and Siu Ma Shan. Continue along Quarry Bay Tree Walk to Greig Road, Quarry Bay. This route largely follows Section 2 of the Wilson Trail. The middle part is rather rugged with uphill and downhill sections.",
    "organizer": "Victoria Peak Hiking Group",
    "date": "Thursday, December 1st"
  },
  {
    "name": "Hike to Peak",
    "hike": "Victoria Peak",
    "information": "Start at Mount Butler Road, walk along Sir Cecils Ride and proceed to Tai Tam Reservoir Road, Jardines Lookout and Siu Ma Shan. Continue along Quarry Bay Tree Walk to Greig Road, Quarry Bay. This route largely follows Section 2 of the Wilson Trail. The middle part is rather rugged with uphill and downhill sections.",
    "organizer": "Victoria Peak Hiking Group",
    "date": "Thursday, December 1st"
  }
]