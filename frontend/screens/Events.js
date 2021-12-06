import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, Keyboard, Button } from 'react-native';
import axios from 'axios'
import HikeCard from '../components/hikeCard';
import Headerbar from '../components/headerbar';
import EventCard from '../components/eventCard';
import Footer from '../components/footer';

export default function Events() {
    const [eventData, setEventData] = useState([])
    useEffect(async () => {
        const res = await axios.get('https://hiking-app-server.herokuapp.com/v1/event/')
        setEventData(res.data.events)
      }, [])

    return (
        <>
            <Headerbar />

            <View style={styles.container}>
                <ScrollView
                    vertical={true}
                    style={styles.scrollView}
                >

                    <Text style={styles.hikeHeading}> EVENTS </Text>
                    {
                        eventData.map((event) => <View style={{marginBottom: 40}}><EventCard data={event} /></View>)
                    }
                </ScrollView>
            </View>
            <Footer />
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
        fontSize: 20,
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
