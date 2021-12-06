import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';

const Stack = createNativeStackNavigator();

import Login from './screens/Login'
import Newsfeed from './screens/Newsfeed'
import Hike from './screens/Hike'
import Event from './screens/Event'
import Events from './screens/Events'
import Hikes from './screens/Hikes'
import Search from './screens/Search';
import AddEvent from './screens/AddEvent';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Search" component={Search}/>
        <Stack.Screen name="NewsFeed" component={Newsfeed} />
        <Stack.Screen name = "Hike" component={Hike} />
        <Stack.Screen name = "HikePage" component={Hikes} />
        <Stack.Screen name = "EventPage" component={Events} />
        <Stack.Screen name = "Event" component={Event} />
        <Stack.Screen name="AddEvent" component={AddEvent} />
      </Stack.Navigator>
    </NavigationContainer>
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

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();