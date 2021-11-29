import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, Keyboard, Button, TouchableOpacity } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import HikeCard from './hikeCard';

export default function Footer() {
  const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.buttonConatiner} onPress={() => navigation.navigate('HikePage', { })}>
                <Text style={styles.buttonText}>Hikes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonConatiner} onPress={() => navigation.navigate('NewsFeed', { })}>
                <Text style={styles.buttonText}>Newsfeed</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonConatiner} onPress={() => navigation.navigate('EventPage', { })}>
                <Text style={styles.buttonText}>Events</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    buttonConatiner: {
        flex: 0,
        height: 50,
        width: 140,
        borderRightWidth: 2,
        borderRightColor: '#f2f2f2',
  
    },
    buttonText: {
        fontSize: 20,
        marginTop: 7,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    header: {
        width: '100%',
        borderTopWidth: 3,
        borderTopColor: '#f2f2f2',
        height: 50,
        alignSelf: 'center',
        backgroundColor: '#BA2487',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: 5,
        paddingLeft: 5,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0
    }
});
