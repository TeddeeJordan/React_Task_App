import React, {useEffect} from 'react';
import { Text } from 'react-native';
import { StyleSheet, View, TextInput, Button, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup'
import { useNavigation, CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {ChangeAuth} from '../contexts/context'
import utils from '../utils/utils'
import Splash from './Splash'
// import accounts from '../accounts'


const signinSchema = yup.object({
  username: yup.string()
    .required('Please supply your username'),
  password: yup.string('Please supply your password')
  .required()
})


function Signin({ navigation }) {
  const logIn = React.useContext(ChangeAuth);
  


  let item;
  const handleSignIn = async (props) => {
    const accounts = await AsyncStorage.getItem('accounts');
    console.log(accounts)
    // accounts.forEach((item) => {
      console.log(accounts.username)
    //   if (item.username === props.username && item.password === props.password) {
    //     AsyncStorage.setItem('auth', 'true');
    //     AsyncStorage.setItem('username', props.username);
    //     AsyncStorage.setItem('password', props.password);
    //     logIn(true);
    //   } 
    // });
  }

  const checkCookies = async () => {
    await AsyncStorage.getItem('auth').then(res => {
      if (res === 'true') {
        // console.log('I automatically signed in');
        logIn(true)
      } else {
        logIn(false);
      }
    })
  }

  useEffect(() => {
    checkCookies();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View>
        <Formik
    initialValues={{ username: 'Username', password: 'Password' }}
    validationSchema={signinSchema}
      onSubmit={(values, actions) => {
        actions.resetForm(); 
        // console.log(values)
        handleSignIn(values);
      }}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
        <TextInput
          onChangeText={handleChange('username')}
          onBlur={handleBlur('username')}
            value={values.username}
            style={styles.formInput}
            

          />
              <TextInput
                secureTextEntry={true}
             onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
               value={values.password}
            style={styles.formInput} 
          />
          <Button
            color="#d989f3"
            onPress={handleSubmit}
            title="Submit"
          />
          </View>
          
    )}
      </Formik>
      <View>
      <TouchableOpacity
                onPress={() => navigation.navigate('CreateAccount')}
                style={styles.appButtonContainer}
            >
            <Text style={styles.appButtonText}>Create an Account</Text>
            </TouchableOpacity>
        </View>
        </View>
    </TouchableWithoutFeedback>  
    
    )
}

const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
      elevation: 8,
      color: "#d989f3",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    formInput: {
      borderWidth: 4,
      borderColor: "#ddd",
      padding: 10,
      margin: 10,
      fontSize: 18,
      borderRadius: 6,
      textAlign: "center"
   },
    appButtonText: {
      fontSize: 15,
      color: "#d989f3",
      alignSelf: "center",
      textShadowColor: "black",
      textShadowRadius: 1,
    }
  });

export default Signin