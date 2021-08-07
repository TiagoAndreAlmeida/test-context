import React, { createContext, useContext, useState } from 'react';

export const AuthContext = createContext({});

const AuthProvider = (props) => {

  //contexts states
  const [name, setName] = useState("Teste")

  //function to handle context states
  function testFunction (param1, param2) {
    console.log(param1, param2);
    setName(param1 + param2);
  }

  return (
    <AuthContext.Provider value={
      {//values and functions will be pass throgh components
        name: name,
        testFunction: testFunction
      }
    }>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;

//hook to return auth values
export const useAuth = () => {
  return useContext(AuthContext);
}