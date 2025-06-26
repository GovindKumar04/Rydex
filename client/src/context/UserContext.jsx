import React, { useState } from "react";

export const UserDataContext = React.createContext();

const UserContext = ({children}) => {
  const [user, setUser] = useState({
    email:"",
    fullname:{
      firstname:"",
      lastname:""
    },

    
  })
  return (
    <UserDataContext.Provider value={user}>{children}</UserDataContext.Provider>
  );
};

export default UserContext;
