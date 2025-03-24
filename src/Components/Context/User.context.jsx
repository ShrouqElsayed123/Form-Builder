import { createContext, useState } from "react";


// eslint-disable-next-line react-refresh/only-export-components
export const userContext=createContext(null);

// eslint-disable-next-line react/prop-types
export default function UserProvider({children}){
     
    let [token,setToken]=useState(localStorage.getItem("token"));

    function logout(){
       setToken(null);
        localStorage.removeItem("token");

    }
    return <userContext.Provider value={{token,setToken,logout}}>
    {children}
    </userContext.Provider>
}