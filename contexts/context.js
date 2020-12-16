import React, {useState} from 'react'

export const AuthContext = React.createContext();
export const ChangeAuth = React.createContext();

function UserProvider({children}) {
  const [auth, setAuth] = useState(false);

  const changeAuth = bool => {
    setAuth(bool);
  }

  return (
    <ChangeAuth.Provider value={changeAuth}>
      <AuthContext.Provider value={auth}>
        {children}
      </AuthContext.Provider>
    </ChangeAuth.Provider>
  );
}

export default UserProvider;