import { Children, createContext, useState } from "react";
import App from "../App";

export const UserContext = createContext(null)

export const UseProvider = ({Children})=>{
    const [user, setUser] = useState([]);

    const addUser = (user)=>{
        setUser((prev)=>[...prev, {id:DataTransfer.now(),user}]);
    };
};


  return (
    <UserContext.Provider value={{ user, addUser }}>
      {children}
    </UserContext.Provider>
  );
