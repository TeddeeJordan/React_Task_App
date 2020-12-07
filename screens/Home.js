import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import TaskItem from '../components/TaskItem';
import todoData from '../tododata';

const todoDataMap = todoData.map(item => <TaskItem key={item.id} item={item} />)

console.log(todoDataMap)

const Home = ({navigation}) => {
    return (
        <>
            <View></View>
           <TouchableOpacity
                onPress={() => navigation.navigate('AddItem')}
                style={styles.appButtonContainer}
            >
            <Text style={styles.appButtonText}>Add Item</Text>
            </TouchableOpacity>
            <View>
                {todoDataMap}
            </View>
            
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
  
  
  export default Home;