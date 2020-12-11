import React from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { AuthContext } from '../contexts/context'

const createAccountSchema = yup.object({
    username: yup.string()
        .required('Please provide a name'),
    email: yup.string()
        .email('Please provide a properly formatted email'),
    username: yup.string()
      .required('Please provide a username')
      .min(6, 'Your username must be at least 6 characters long'),
    password: yup.string()
        .required('Please provide a password')
        .min(8, 'Your password must be at lease 8 characters long')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character")
  })

function CreateAccount({ navigation }) {
    const { signUp } = React.useContext(AuthContext);
    return (
        <>
        <Formik
    initialValues={{ name: 'Name', email: 'Email', username: 'Username', password: 'Password' }}
    validationSchema={createAccountSchema}
      onSubmit={(values, actions) => {
        actions.resetForm(); 
        signUp();
      }}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
        <TextInput
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
            style={styles.formInput}
        />
        <TextInput
            onChangeText={handleChange('username')}
            onBlur={handleBlur('username')}
            value={values.username}
            style={styles.formInput}
        />
        <TextInput
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
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

export default CreateAccount