import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from './screens/Login'
import Newsfeed from './screens/Newsfeed'
import Hike from './screens/Hike'
import Event from './screens/Event'
import Events from './screens/Events'
import Hikes from './screens/Hikes'

export default function App() {
  return (
    <Newsfeed />
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
