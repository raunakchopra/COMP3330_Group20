import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Keyboard, Button } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import HikeCard from '../components/hikeCard';

export default function Headerbar() {
  const navigation = useNavigation();
    return (
        <View style={styles.header}>
            <View>
                <AntDesign
                    name="search1"
                    size={25}
                    style={{marginLeft: 15}}
                    color="black"
                    onPress={() => navigation.navigate('Search', { })}
                />
            </View>
            <View>
                <TextInput
                    placeholder="Search"
                    style={{ width: 260, height: 35, borderWidth: 1, marginLeft: 10, borderRadius: 5, alignItems: 'center', alignContent: 'center', padding: 5 }}
                />
            </View>
            <View>
            <TouchableOpacity 
                style={styles.addEventContainer}
                onPress={() => navigation.navigate('AddEvent', {})}
            >
                <AntDesign
                    name="plus"
                    size={25}
                    color="black"
                    style={{ borderWidth: 1, borderRadius: 15, alignItems: 'center', alignContent: 'center', marginLeft: 3, marginRight: 11 }}
                />
            </TouchableOpacity>
            </View>
            <View>
                <AntDesign
                    name="user"
                    size={25}
                    color="black"
                    style={{ borderWidth: 1, borderRadius: 15, alignItems: 'center', alignContent: 'center', marginRight: 25 }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    addEventContainer:{
        flex: 0,
        marginLeft: 10,
    },
    addEventText:{
        fontSize: 15
    },
    header: {
        width: '100%',
        height: 50,
        // margin
        alignSelf: 'center',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingRight: 5,
        paddingLeft: 5,
        shadowColor: '#000000',
        borderBottomWidth: 2,
        borderBottomColor: '#f2f2f2',
    }
});
