// import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Home from './screens/Home';
// import AddItem from './screens/AddItem';
import AppStack from './routes/AppStack';

const App = () => {
  return (
    <AppStack />
  )

};


export default App;
