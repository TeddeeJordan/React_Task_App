import React from 'react';
import { Text, Button } from 'react-native';
import { AuthContext } from '../contexts/context'

function Profile({ navigation }) {
    const { signOut } = React.useContext(AuthContext);
    return (
        <>
            <Text>Profile Screen</Text>   
            <Button title="Sign Out" onPress={() => signOut()} />
        </>
    )
}

export default Profile