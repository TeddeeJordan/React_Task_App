import React from 'react';
import { Text } from 'react-native';
import accounts from '../accounts';
import { StyleSheet, View, TextInput, Button, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup'
import { AuthContext } from '../contexts/context'


const signinSchema = yup.object({
  username: yup.string()
    .required('Please supply your username'),
  password: yup.string('Please supply your password')
  .required()
})



function Signin({ navigation }) {
  const { signIn } = React.useContext(AuthContext);
  return (
      <>
        <Formik
    initialValues={{ username: 'Username', password: 'Password' }}
    validationSchema={signinSchema}
      onSubmit={(values, actions) => {
        actions.resetForm(); 
        signIn();
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
    </>
    
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