// import 'react-native-gesture-handler';
import React, {useContext} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Home from './screens/Home';
// import AddItem from './screens/AddItem';
import AppStack from './routes/AppStack';
import {AuthContext} from './contexts/context';
import AuthStack from './routes/AuthStack';
function App() {
  const isLoggedIn = useContext(AuthContext);

  return (
    //Auth
    <NavigationContainer>
      {isLoggedIn && <AppStack />}
      {!isLoggedIn && <AuthStack />}
    </NavigationContainer>
  );
};


export default App;
