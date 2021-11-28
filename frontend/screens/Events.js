import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, Keyboard, Button } from 'react-native';

import HikeCard from '../components/hikeCard';
import Headerbar from '../components/headerbar';

export default function Events() {
    return (
        <>
            <Headerbar />

            <View style={styles.container}>
                <Text style={styles.hikeHeading}> Events </Text>
                <View style={styles.divider}></View>
                <ScrollView
                    vertical={true}
                    style={styles.scrollView}
                >
                    <HikeCard />
                    <HikeCard />
                    <HikeCard />
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
