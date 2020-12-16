import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import SignIn from '../screens/SignIn';
import CreateAccount from '../screens/CreateAccount';

const Auth = createStackNavigator();

function AuthStack() {

  return (
    <Auth.Navigator initialRouteName="SignIn">
      <Auth.Screen
                name="SignIn"
                component={SignIn}
                options={{title: 'Please Sign In'}}
              />
      <Auth.Screen
                name="CreateAccount"
                component={CreateAccount}
                options={{title: 'Please Create an Account'}}
              />
    </Auth.Navigator> 
  );
}

export default AuthStack;