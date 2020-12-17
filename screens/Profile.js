import React, {useEffect, useState} from 'react';
import { Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import UserProfile from '../components/UserProfile';
import { ChangeAuth } from '../contexts/context'
import accounts from '../accounts';


function Profile({ navigation }) {
    const logIn = React.useContext(ChangeAuth);
    const [profileUser, setProfileUser] = useState(null)

  const handleSignIn = () => {
    AsyncStorage.setItem('auth', 'false');
    logIn(false);
  }
    
    
    const getData = async () => {
    try {
        const username = await AsyncStorage.getItem('username')
        
        if (username !== null) {
        accounts.forEach(item => {
              if (item.username === username) {
                  const profile = {
                    name: item.name,
                    user: item.username,
                    email: item.email
                  }
                  setProfileUser(profile)
              } 
        })
            }
    } catch(e) {
      console.log("no value")
    }
  }
    
    useEffect(() => {
        getData();
    }, []);
    
    return (
        <>
            <Text>Profile Screen</Text>
            <UserProfile
               {...profileUser}
                />
            <Button title="Sign Out" onPress={() => handleSignIn()} />
        </>
    )
}

export default Profile