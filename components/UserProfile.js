import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text } from 'react-native';

function UserProfile(props) {

    return (
        <>
        <View>
                <Text>User: {props.user}</Text>
                <Text>Name: {props.name}</Text>
                <Text>Email: {props.email}</Text>
        </View>
            
      </> 
    );
};
  
const styles = StyleSheet.create({
    // checkbox: {
    //     display: "flex",
    //     justifyContent: "flex-start",
    //     alignItems: "flex-start",
    //     // padding: "30px 20px 0",
    //     width: "70%",
    //     // borderBottom: "1px solid #cecece",
    //     fontFamily: "Roboto, sans-serif",
    //     fontWeight: "100",
    //     fontSize: 15,
    //     color: "#333333"
    //   }

    // checkbox: {
    //     display: inline-block,
    //     verticalAlign: -25%,
    //     height: 2ex,
    //     width: 2ex,
    //     backgroundColor: white,
    //     border: 1px solid #c3c4c6,
    //     borderRadius: 4px,
    //     marginRight: 0.5em
    //  }
});
  
  
  export default UserProfile;