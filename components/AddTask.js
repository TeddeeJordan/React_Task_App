import React, {useState, useEffect} from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup'

const taskSchema = yup.object({
  task: yup.string()
    .required()
    .min(4),
  priority: yup.number() 
    .required()
    .test('is-num-1-10', 'Please enter a priorty between 1 and 10', (val) => {
      return(parseInt(val) <= 10 && (parseInt(val)) > 0)
  })
})

function AddTask() {

  return(
  <Formik
    initialValues={{ task: 'Please Add Your New Task', priority: 'Enter Task Priority' }}
    validationSchema={taskSchema}
      onSubmit={(values, actions) => {
        actions.resetForm(); 
        console.log(values);
      }}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <View>
        <TextInput
          onChangeText={handleChange('task')}
          onBlur={handleBlur('task')}
            value={values.task}
            style={styles.formInput}
            

          />
          <TextInput
             onChangeText={handleChange('priority')}
            onBlur={handleBlur('priority')}
               value={values.priority}
            style={styles.formInput} 
            keyboardType='numeric'
          />
          <Button
            color="#d989f3"
            onPress={handleSubmit}
            title="Submit"
          />
      </View>
    )}
  </Formik>

    );
};
  
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
  }
});
  
  
  export default AddTask;