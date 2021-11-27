import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, Keyboard, Button } from 'react-native';
import { AntDesign } from "@expo/vector-icons";

import HikeCard from '../components/hikeCard';

export default function Headerbar() {
    return (
        <View style={styles.header}>
            <View>
                <AntDesign
                    name="search1"
                    size={20}
                    color="black"
                    style={{ margin: 5 }}
                />
            </View>
            <View>
                <TextInput

                    placeholder="Search"
                    style={{ width: 200, borderWidth: 1, borderRadius: 5, alignItems: 'center', alignContent: 'center', padding: 5 }}
                />
            </View>
            <View>
                <AntDesign
                    name="heart"
                    size={20}
                    color="#d90058"
                    style={{ margin: 5, }}
                />
            </View>
            <View>
                <AntDesign
                    name="user"
                    size={20}
                    color="black"
                    style={{ borderWidth: 1, borderRadius: 10, alignItems: 'center', alignContent: 'center', margin: 5 }}
                />
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
    header: {
        width: '90%',
        height: 50,
        alignSelf: 'center',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 50,
        paddingRight: 5,
        paddingLeft: 5,
        borderColor: 'black',
        borderWidth: 1,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 5,
        shadowOpacity: 1.0

    }

});
