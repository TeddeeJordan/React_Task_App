import React, {useEffect} from 'react';
import { Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import UserProfile from '../components/UserProfile';
import { ChangeAuth } from '../contexts/context'
import accounts from '../accounts';

const accountMap = accounts.map(user => <UserProfile key={user.id} user={user} />)

function Profile({ navigation }) {
    const logIn = React.useContext(ChangeAuth);

  const handleSignIn = () => {
    AsyncStorage.setItem('auth', 'false');
    logIn(false);
  }
    
  const getProfile = async (key) => {
      const userProfile = await AsyncStorage.getItem(key)
      console.log("ran")
  }
   

    

    return (
        <>
            <Text>Profile Screen</Text>
            {/* {accountMap} */}
            <Button title="Sign Out" onPress={() => handleSignIn()} />
        </>
    )
}

export default Profile