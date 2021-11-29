import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, Keyboard, Button } from 'react-native';

import HikeCard from '../components/hikeCard';
import Headerbar from '../components/headerbar';
import EventCard from '../components/eventCard';

export default function Events() {
    return (
        <>
            <Headerbar />

            <View style={styles.container}>
                <Text style={styles.hikeHeading}> Events </Text>
                <ScrollView
                    vertical={true}
                    style={styles.scrollView}
                >
                    {
                        EventsData.map((event) => <EventCard data={event} />)
                    }
                </ScrollView>

            </View>
        </>
    );
}

const styles = StyleSheet.create({
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
        marginTop: 5,
    },
    divider: {
        height: 30,
        width: 1000,
        backgroundColor: '#404040',

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
});

const EventsData = [
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
