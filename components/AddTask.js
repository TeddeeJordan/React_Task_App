import React, {useState, useEffect} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
// import { TextInput } from 'react-native-gesture-handler';

const AddTask = () => {

  return(
    <Formik
      initialValues={{ task: '' }}
      onSubmit={values => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <TextInput
            onChangeText={handleChange('task')}
            onBlur={handleBlur('task')}
            value={values.task}
          />
          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>

  );
};
  
// const styles = StyleSheet.create({
    
// });
  
  
  export default AddTask;