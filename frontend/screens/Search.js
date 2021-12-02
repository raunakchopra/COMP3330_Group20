import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';

import HikeCard from '../components/hikeCard';
import EventCard from '../components/eventCard';


export default function Search({ navigation }) {
    let seacrhQuery = "Ma On Shan"
    const [relevantHikes, setRelevantHikes] = useState([])
    const [relevantEvents, setRelevantEvents] = useState([])

    useEffect(()=>{
        let tempHikes = [], tempEvents = []
        HikeData.map((hike) => {
            if(hike.route.includes(seacrhQuery) || hike.brief.includes(seacrhQuery)){
                tempHikes.push(hike)
            }
        })
        setRelevantHikes(tempHikes)

        EventsData.map((event) => {
            if(event.name.includes(seacrhQuery) || event.hike.includes(seacrhQuery) || event.information.includes(seacrhQuery)){
                tempEvents.push(event)
            }
        })

        setRelevantEvents(tempEvents)
    }, [])



  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.hikeHeading}> HIKES </Text>
        </TouchableOpacity>
        <ScrollView
          horizontal={true}
          style={styles.scrollView}
        >
          {
            relevantHikes.map((hike) => <HikeCard data={hike} />)
          }
        </ScrollView>
        <TouchableOpacity onPress={() => navigation.navigate('EventPage', { name: 'Jane' })}>
          <Text style={styles.hikeHeading}> EVENTS </Text>
        </TouchableOpacity>
        <ScrollView
          horizontal={true}
          style={styles.scrollView}
        >
          {
            relevantEvents.map((event) => <EventCard data={event} />)
          }
        </ScrollView>
      </View>
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
  },
  enterButton: {
    marginTop: 20,
    backgroundColor: '#35BDD0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  enterText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#CAD5E2'
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

const EventsData = [
    {
    "name": "Hike to Ma On Shan",
    "hike": "Victoria Peak",
    "information": "Start at Mount Butler Road, walk along Sir Cecils Ride and proceed to Tai Tam Reservoir Road, Jardines Lookout and Siu Ma Shan. Continue along Quarry Bay Tree Walk to Greig Road, Quarry Bay. This route largely follows Section 2 of the Wilson Trail. The middle part is rather rugged with uphill and downhill sections.",
    "organizer": "Victoria Peak Hiking Group",
    "date": "Thursday, December 1st"
},
{
    "name": "Hike to Peak",
    "hike": "Ma On Shan",
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
        "route": "Shing Mun Reservoir  Pai Tau Village",
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
    },
    {
        "route": "Ma On Shan - Ngong Ping - Tai Shui Hang",
        "brief": "Start at Ma On Shan Country Park Management Centre and walk along the Ma On Shan Country Trail to the viewing point at Ngong Ping Campsite. Then, walk downhill via Mau Ping to Chevalier Garden. This route comprises an uphill section and a downhill section with easy footpaths and vehicular access.",
        "startingPoint": "Ma On Shan Country Park Management Centre (KK155807)- Go to Yiu On Estate in Ma On Shan. Then walk upslope along Ma On Shan Tsuen Road next to the Ma On Shan Road Roundabout for about 45 minutes.",
        "finishingPoint": "Chevalier Garden, Tai Shui Hang (KK143803)- Walk to MTR Tai Shui Hang Station.",
        "length": "about 8.5 km",
        "duration": "about 4.5 hours",
        "difficulty": 2,
        "map": "https://www.lcsd.gov.hk/en/healthy/hiking/map/map_a5.html",
        "heightMap": "https://www.lcsd.gov.hk/en/healthy/hiking/common/hiking/graphics/cross_large/A5_cross.jpg",
        "instructions": "https://www.lcsd.gov.hk/en/healthy/hiking/common/hiking/doc/A5.pdf"
    },
    {
        "route": "Tsuen King Circuit - Sham Tseng",
        "brief": "Enter the Yuen Tsuen Ancient Trail from Pun Shan Tsuen in Chai Wan Kok and follow the path around Shek Lung Kung. Cross Tin Tsing Bridge and walk past Tin Fu Tsai Campsite to reach Tsing Fai Tong. Walk westward for about 1 km to a junction and continue down the path heading south to Sham Tseng Settlement Basin. Proceed to the forest track and walk along the path from Tai Lam Country Park Sham Tseng Management Centre to Sham Tseng. The early part of the route goes uphill while the later part is a relatively long rugged downhill path.",
        "startingPoint": "Tsuen King Circuit (KK018774) - Take Kowloon Motor Bus Route No. 39M at MTR Tsuen Wan Station.",
        "finishingPoint": "Road junction at Sham Tseng Village (JK971766)- Take Kowloon Motor Bus Route No. 53 or 52Xto MTR Tsuen Wan Station or Mei Foo Station.",
        "length": "about 11 km",
        "duration": "about 5.5 hours",
        "difficulty": 3,
        "map": "https://www.lcsd.gov.hk/en/healthy/hiking/map/map_a6.html",
        "heightMap": "https://www.lcsd.gov.hk/en/healthy/hiking/common/hiking/graphics/cross_large/A6_cross.jpg",
        "instructions": "https://www.lcsd.gov.hk/en/healthy/hiking/common/hiking/doc/A6.pdf"
    },
    {
        "route": "Wong Nai Tau - Pak Sha Wan",
        "brief": "Start at Wong Nai Tau, Sha Tin, walk slowly up Shek Nga Pui, and take the path around West Buffalo Hill and Buffalo Hill. Then cross Buffalo Pass (Ta She Yau Au) to reach Pak Sha Wan. The route is slightly rugged with uphill and downhill sections.",
        "startingPoint": "ong Nai Tau (KK135778)- Take Kowloon Motor Bus Route No. 83K at Sha Tin Central Bus Terminus",
        "finishingPoint": "Pak Sha Wan (KK178762)- Take Kowloon Motor Bus Route No. 92 to MTR Diamond Hill Station.",
        "length": "about 7 km",
        "duration": "about 4 hours",
        "difficulty": 2,
        "map": "https://www.lcsd.gov.hk/en/healthy/hiking/map/map_a7.html",
        "heightMap": "https://www.lcsd.gov.hk/en/healthy/hiking/common/hiking/graphics/cross_large/A7_cross.jpg",
        "instructions": "https://www.lcsd.gov.hk/en/healthy/hiking/common/hiking/doc/A7.pdf"
    },
    {
        "route": "Ma Mei Ha - Luk Keng",
        "brief": "Ascend Ping Teng Au from Tan Chuk Hang, walk along Nam Chung Country Trail and head toward Nam Chung via Lo Lung Tin. Take in the views of the north-eastern part of the New Territories and the boundary at Sha Tau Kok along the way. The route is rather rugged with uphill and downhill sections.",
        "startingPoint": "Ma Mei Ha (KK095929)- Take Kowloon Motor Bus Route No. 78K or green minibus Route No.56k at MTR Fanling Station. Alternatively take green minibus Route No. 56B at MTR Fanling Station and start at Tan Chuk Hang.",
        "finishingPoint": "uk Keng (KK136935)- Take green minibus Route No. 56K to MTR Fanling Station.",
        "length": "about 9 km",
        "duration": "about 4.5 hours",
        "difficulty": 3,
        "map": "https://www.lcsd.gov.hk/en/healthy/hiking/map/map_a8.html",
        "heightMap": "https://www.lcsd.gov.hk/en/healthy/hiking/common/hiking/graphics/cross_large/A8_cross.jpg",
        "instructions": "https://www.lcsd.gov.hk/en/healthy/hiking/common/hiking/doc/A8.pdf"
    },
    {
        "route": "A9  Shui Long Wo <-> Pak Tam Chung",
        "brief": "Starting from Shui Long Wo, the walk takes you along the coast and catchwater before continuing to Yung Shue O, giving you unparalleled vistas of Three Fathoms Cove (Kei Ling Ha Hoi). Then walk up to Pak Tam along the path via Yung Pak Corridor and pass through the farmland and villages of the Christian New Being Fellowship before ending the walk at Pak Tam Chung. There are uphill and downhill sections along the way.",
        "startingPoint": "hui Long Wo (KK199802)- Take Kowloon Motor Bus No. 99 at MTR Wu Kai Sha Station",
        "finishingPoint": "Pak Tam Chung (KK239792)- Take Kowloon Motor Bus No.94 to Sai Kung Town Centre",
        "length": "about 9 km",
        "duration": "about 5 hours",
        "difficulty": 2,
        "map": "https://www.lcsd.gov.hk/en/healthy/hiking/map/map_a9.html",
        "heightMap": "https://www.lcsd.gov.hk/en/healthy/hiking/common/hiking/graphics/cross_large/A9_cross.jpg",
        "instructions": "https://www.lcsd.gov.hk/en/healthy/hiking/common/hiking/doc/A9.pdf"
    },
    {
        "route": "A10 - Tung Chung Tai O",
        "brief": "Start at MTR Tung Chung Station, take the concrete path along Tung Chung Bay and head toward Hau Wong Temple to get a distant view of the Hong Kong International Airport at Chek Lap Kok. Pass through Sha Lo Wan San Tsuen and Sham Shek Tsuen to reach Sham Wat, where you can enjoy the picturesque vista of Sham Wat Wan. Continue along the path to find the North Lantau Stone Obelisk and proceed to Po Chue Tam. The sight of Yeung Hau Temple marks your arrival at Tai O, where you can find a quaint fishing village with stilt houses, disused salt pans, mangroves and a rope ferry. The later part of the route is rather rugged.",
        "startingPoint": "MTR Tung Chung Station (HE030677)",
        "finishingPoint": "Tai O Bus Terminus (GE950636) - Take New Lantao Bus Route No. 11 back to Tung Chung.",
        "length": "about 13 km",
        "duration": "about 5 hours",
        "difficulty": 2,
        "map": "https://www.lcsd.gov.hk/en/healthy/hiking/map/map_a10.html",
        "heightMap": "https://www.lcsd.gov.hk/en/healthy/hiking/common/hiking/graphics/cross_large/A10_cross.jpg",
        "instructions": "https://www.lcsd.gov.hk/en/healthy/hiking/common/hiking/doc/A10.pdf"
    },
    {
        "route": "A11 - Chuen Lung - Shing Mun Reservoir",
        "brief": "Start at Chuen Lung minibus station at Route Twist. Upon reaching Choi Lung Restaurant, follow the driveway leading to Chuen Lung Management Centre. Continue along the Lung Mun Country Trail and proceed to the Shing Mun Forest Track (Reservoir Section). Take the path on the right leading to Pineapple Dam, where you may visit the Butterfly Paradise on the way. The trip ends at Shing Mun Road. The first half of the route goes gently uphill while the second half is slightly longer and comprises rather rugged downhill paths.",
        "startingPoint": "Chuen Lung, Route Twisk (KK024795)Walk to Chuen Lung Street from MTR Tsuen Wan Station and take green minibus Route No. 80 from there.",
        "finishingPoint": "Pineapple Dam, Shing Mun Reservoir (KK058782)Take green minibus Route No. 82 to Siu Wo Street, Tsuen Wan and then walk to MTR Tsuen Wan Station.",
        "length": "about 8 km",
        "duration": "about 4 hours",
        "difficulty": 3,
        "map": "https://www.lcsd.gov.hk/en/healthy/hiking/map/map_a11.html",
        "heightMap": "https://www.lcsd.gov.hk/en/healthy/hiking/common/hiking/graphics/cross_large/A11_cross.jpg",
        "instructions": "https://www.lcsd.gov.hk/en/healthy/hiking/common/hiking/doc/A11.pdf"
    },
    {
        "route": "A12 - Lau Shui Heung - Tai Po Tau",
        "brief": "Start at Lau Shui Heung Reservoir and take the country trail on the right. After passing by Lau Shui Bridge, cross Lung Shan Bridge and walk through Kat Tsai Shan Au. Walk slowly up Cloudy Hill (Kau Lung Hang Shan) located on the western boundary of Pat Sin Leng Country Park and enjoy a spectacular view of Tolo Harbour and Tai Po lying at the foot of the mountains in the north-eastern part of New Territories. Continue along Section 8 of the Wilson Trail in the reverse direction to reach Tai Po Tau, where dining and entertainment options are conveniently available. There are uphill and downhill sections all the way and the later part of the route is quite rugged.",
        "startingPoint": "Lau Shui Heung (KK089910)- Take green minibus Route No. 52B at MTR Fanling Staion.",
        "finishingPoint": "Tai Po Tau (KK074858)- Walk along Tai Po Tau Drive and Po Nga Road for about 10 minutes to MTR Tai Wo Station.",
        "length": "about 7.5 km",
        "duration": "about 4.5 hours",
        "difficulty": 3,
        "map": "https://www.lcsd.gov.hk/en/healthy/hiking/map/map_a12.html",
        "heightMap": "https://www.lcsd.gov.hk/en/healthy/hiking/common/hiking/graphics/cross_large/A12_cross.jpg",
        "instructions": "https://www.lcsd.gov.hk/en/healthy/hiking/common/hiking/doc/A12.pdf"
    },
    {
        "route": "A13 - Pak Tam Chung - Tai Mong Tsai",
        "brief": "Walk along Pak Tam Chung Family Walk and proceed to Pak Tam. Continue along Yung Pak Corridor before entering Section 3 of the MacLehose Trail. Then head for Tai Mong Tsai via Lui Ta Shek and Shek Hang. This tranquil route is well-shaded by trees with sound of chirping birds and buzzing insects along the way. You can enjoy a close-up view of Kai Kung Shan and Lui Ta Shek after passing through the forest, and a panoramic view of Plover Cove Reservoir and Pat Sin Leng is visible from a distance. There are uphill and downhill sections, and a walk uphill along the middle section needs a bit more effort. Part of the route is rather rugged with gravels.",
        "startingPoint": "Pak Tam Chung (KK239793)- Take Kowloon Motor Bus Route No. 94 at Sai Kung Town Centre.",
        "finishingPoint": "Tai Mong Tsai (KK219788)- Take Kowloon Motor Bus Route No. 94 to Sai Kung Town Centre.",
        "length": "about 7.5 km",
        "duration": "about 4.5.hours",
        "difficulty": 2,
        "map": "https://www.lcsd.gov.hk/en/healthy/hiking/map/map_a13.html",
        "heightMap": "https://www.lcsd.gov.hk/en/healthy/hiking/common/hiking/graphics/cross_large/A13_cross.jpg",
        "instructions": "https://www.lcsd.gov.hk/en/healthy/hiking/common/hiking/doc/A13.pdf"
    }
]

