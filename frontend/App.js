import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './screens/Login'
import Newsfeed from './screens/Newsfeed'
import Hike from './screens/Hike'

export default function App() {
  return (
    <Hike />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
