import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer'
// import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContext } from '../contexts/context'

import Home from '../screens/Home';
import AddItem from '../screens/AddItem';
import SignIn from '../screens/SignIn';
import CreateAccount from '../screens/CreateAccount';
import Profile from '../screens/Profile';
import Basic from '../screens/Basic'
import Splash from '../screens/Splash'

const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{ title: 'To Do List' }}
    />
    <HomeStack.Screen
      name="AddItem"
      component={AddItem}
      options={{ title: 'Add New Item' }}
    />
  </HomeStack.Navigator>
)

const TabsScreen = () => {
  return(
    <Tabs.Navigator>
      <Tabs.Screen
        name="Home"
        component={HomeStackScreen}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
      />
    </Tabs.Navigator>
  )
  
}


function AppStack(props) {
  
    return (
      <>
        <Drawer.Navigator initialRouteName="Home">
              <Drawer.Screen
                name="Home"
                component={TabsScreen}
              />
              <Drawer.Screen
                name="Basic"
                component={Basic}
              />
        </Drawer.Navigator>
        
      </>
    );
};
  
export default AppStack;