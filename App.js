
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MyStack from './navigation/indexstack';
import MyTabs from './navigation/indextab';


//import MyStack from './navigation';
import Welcome from './src/welcome';
import Home from './src/home';
import Weather from './src/weather';
//import { API_KEY } from './utils/WeatherAPIKey';
//import Weather from './src/weather';




const App = () => {
  return (
   

    <NavigationContainer>

    <MyTabs />

    </NavigationContainer>

    

  );
};

export default App;


const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
});
