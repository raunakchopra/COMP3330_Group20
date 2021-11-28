import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function See_all() {
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>See All</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        width: 353,
        marginRight: 10,
        height: 200,
        backgroundColor: '#bebebe',

    },
    txt: {
        flex: 1,
        justifyContent: "center",
        //marginTop: 100,
        //marginLeft: 160,
        fontSize: 20,
        color: 'white',
        fontFamily: 'sans-serif-medium',
        textAlign: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        textAlignVertical: 'center',
        alignContent: 'center',

    },
    image: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 10
    },
    textContainer: {
        backgroundColor: '#BA2487',
        width: 150,
        marginTop: 133,
    },
    hikeName: {
        color: 'white',
        fontFamily: 'sans-serif-medium',
        fontSize: 18,
        textAlign: 'center',
    },
    hikeLocation: {
        color: 'white',
        fontFamily: 'sans-serif-medium',
        fontSize: 11,
        textAlign: 'center',
    },
    hikeInfoLabel: {
        fontSize: 16,
        fontFamily: 'sans-serif-medium',
        fontWeight: 'bold'
    },
    hikeInfo: {
        fontSize: 15
    }
});
