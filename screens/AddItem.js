import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import AddTask from '../components/AddTask'

const AddItem = ({navigation}) => {
    return (
        <>
        <AddTask />
        <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
                style={styles.appButtonContainer}
            >
            <Text style={styles.appButtonText}>Return to Task List</Text>
            </TouchableOpacity>
      </>
    );
};
  
const styles = StyleSheet.create({
  // ...
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#d989f3",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});
  
  
  export default AddItem;