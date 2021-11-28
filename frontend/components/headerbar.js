import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, Keyboard, Button } from 'react-native';
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
                    size={20}
                    color="black"
                    onPress={() => navigation.navigate('Search', { })}
                />
            </View>
            <View>
                <TextInput
                    placeholder="Search"
                    style={{ width: 250, borderWidth: 1, borderRadius: 5, alignItems: 'center', alignContent: 'center', padding: 5 }}
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
    header: {
        width: '100%',
        height: 50,
        alignSelf: 'center',
        backgroundColor: '#fff',
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
