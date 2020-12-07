import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import AddItem from '../screens/AddItem';

const Stack = createStackNavigator();

const AppStack = () => {

  
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{title: 'To Do List'}}
            />
            <Stack.Screen
              name="AddItem"
              component={AddItem}
              options={{title: 'Add New Item'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
};
  
export default AppStack;