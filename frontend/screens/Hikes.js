import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, Keyboard, Button } from 'react-native';
import axios from 'axios'
import HikeCard from '../components/hikeCard';
import Headerbar from '../components/headerbar';
import Footer from '../components/footer';

export default function Hikes() {
    const [hikeData, setHikeData] = useState([])

    useEffect(async () => {
        const resHikes = await axios.get('http://cd81-202-189-105-151.ngrok.io/v1/hike/')
        setHikeData(resHikes.data.hikes)
      }, [])

    return (
        <>
            <Headerbar />

            <View style={styles.container}>
                <ScrollView
                    vertical={true}
                    style={styles.scrollView}
                >

                    <Text style={styles.hikeHeading}> HIKES </Text>
                    {
                        hikeData.map((hike) => <View style={{marginBottom: 40}}><HikeCard data={hike}/></View>)
                    }
                </ScrollView>
            </View>
            <Footer/>
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
        marginTop: 0,
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
        marginTop: 2,
        marginBottom: 10
    },
    hikeText: {
        width: 400,
        marginRight: 10,
        height: 200,
        backgroundColor: 'red'
    },

});

